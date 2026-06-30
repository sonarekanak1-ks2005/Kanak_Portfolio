from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import asyncio
import logging
import resend
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend config
resend.api_key = os.environ.get('RESEND_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
CONTACT_RECIPIENT_EMAIL = os.environ.get('CONTACT_RECIPIENT_EMAIL', 'sonarekanak1@gmail.com')

app = FastAPI(title="Kanak Sonare Portfolio API")
api_router = APIRouter(prefix="/api")

# Logger
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class ContactMessageCreate(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    subject: Optional[str] = Field(default=None, max_length=200)
    message: str = Field(min_length=1, max_length=5000)


class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    subject: Optional[str] = None
    message: str
    email_sent: bool = False
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# Routes
@api_router.get("/")
async def root():
    return {"message": "Kanak Sonare Portfolio API"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check.get('timestamp'), str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks


def _build_contact_email_html(name: str, email: str, subject: Optional[str], message: str) -> str:
    safe_subject = subject or "New portfolio message"
    return f"""
    <table width="100%" cellspacing="0" cellpadding="0" style="background:#0a0a0a;padding:24px;font-family:Arial,Helvetica,sans-serif;color:#f4f4f5;">
      <tr><td>
        <table width="100%" style="max-width:560px;margin:0 auto;background:#111;border:1px solid #1f1f22;border-radius:12px;padding:28px;">
          <tr><td style="padding-bottom:12px;border-bottom:1px solid #1f1f22;">
            <div style="font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#CCFF00;">Portfolio · Contact</div>
            <div style="font-size:22px;font-weight:bold;margin-top:6px;color:#f4f4f5;">{safe_subject}</div>
          </td></tr>
          <tr><td style="padding-top:18px;font-size:14px;line-height:1.6;color:#d4d4d8;">
            <p style="margin:0 0 6px 0;"><b>From:</b> {name} &lt;{email}&gt;</p>
            <p style="margin:0 0 16px 0;"><b>Received:</b> {datetime.now(timezone.utc).strftime('%d %b %Y · %H:%M UTC')}</p>
            <div style="background:#0a0a0a;border:1px solid #1f1f22;border-radius:8px;padding:16px;color:#e4e4e7;white-space:pre-wrap;">{message}</div>
          </td></tr>
          <tr><td style="padding-top:20px;border-top:1px solid #1f1f22;font-size:12px;color:#71717a;">
            Sent automatically from kanaksonare.dev portfolio site.
          </td></tr>
        </table>
      </td></tr>
    </table>
    """


@api_router.post("/contact")
async def submit_contact(payload: ContactMessageCreate):
    msg = ContactMessage(**payload.model_dump())
    doc = msg.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()

    # Attempt email send (non-fatal if it fails)
    email_sent = False
    if resend.api_key:
        try:
            html = _build_contact_email_html(msg.name, msg.email, msg.subject, msg.message)
            params = {
                "from": SENDER_EMAIL,
                "to": [CONTACT_RECIPIENT_EMAIL],
                "subject": f"[Portfolio] {msg.subject or 'New message from ' + msg.name}",
                "html": html,
                "reply_to": msg.email,
            }
            result = await asyncio.to_thread(resend.Emails.send, params)
            email_sent = bool(result and result.get("id"))
        except Exception as e:
            logger.error(f"Resend email failed: {e}")
            email_sent = False

    doc['email_sent'] = email_sent
    await db.contact_messages.insert_one(doc)
    return {"status": "success", "id": msg.id, "email_sent": email_sent}


@api_router.get("/contact", response_model=List[ContactMessage])
async def list_contact_messages():
    messages = await db.contact_messages.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    for m in messages:
        if isinstance(m.get('created_at'), str):
            m['created_at'] = datetime.fromisoformat(m['created_at'])
    return messages


# Include router
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
