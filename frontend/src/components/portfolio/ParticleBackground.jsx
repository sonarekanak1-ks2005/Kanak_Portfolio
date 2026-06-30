import { useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

// Lightweight canvas particle field — slow, subtle, no generic blue constellations
const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    let particles = [];
    let w = 0, h = 0;

    const isDark = resolvedTheme === "dark";
    const dotColor = isDark ? "rgba(204,255,0,0.55)" : "rgba(20,20,20,0.45)";
    const dimColor = isDark ? "rgba(244,244,245,0.18)" : "rgba(20,20,20,0.16)";
    const lineColor = isDark ? "rgba(204,255,0,0.10)" : "rgba(20,20,20,0.08)";

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const density = Math.floor((w * h) / 22000);
      particles = Array.from({ length: density }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.6 + 0.4,
        accent: Math.random() < 0.18,
      }));
    };

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      // draw connections
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x, dy = p.y - q.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 13000) {
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }
      // draw dots
      for (const p of particles) {
        ctx.fillStyle = p.accent ? dotColor : dimColor;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    resize();
    tick();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
      data-testid="hero-particle-canvas"
    />
  );
};

export default ParticleBackground;
