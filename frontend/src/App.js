import { useEffect, useState } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Leadership from "@/components/portfolio/Leadership";
import Education from "@/components/portfolio/Education";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import BootSequence from "@/components/portfolio/BootSequence";
import MouseGlow from "@/components/portfolio/MouseGlow";
import { PROFILE } from "@/data/portfolio";

const Home = () => {
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    document.title = `${PROFILE.name} — AI/ML Engineer · Software Developer`;
    const meta =
      document.querySelector('meta[name="description"]') ||
      document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute(
      "content",
      `${PROFILE.name} · ${PROFILE.degree} at ${PROFILE.university}. AI-inspired portfolio of ML projects, software engineering work and leadership.`
    );
    if (!meta.parentNode) document.head.appendChild(meta);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-neon-blue selection:text-black">
      <BootSequence onDone={() => setBooted(true)} />
      <MouseGlow />
      <Navbar />
      <main data-testid="main-content" className={booted ? "" : "pointer-events-none"}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Leadership />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
        <Toaster position="bottom-right" richColors closeButton theme="dark" />
      </div>
    </ThemeProvider>
  );
}

export default App;
