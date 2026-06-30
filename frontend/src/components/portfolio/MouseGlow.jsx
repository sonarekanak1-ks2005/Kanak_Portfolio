import { useEffect, useRef } from "react";

// Mouse-following gradient glow + subtle grid highlight
const MouseGlow = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x, ty = y;
    const onMove = (e) => { tx = e.clientX; ty = e.clientY; };
    const loop = () => {
      x += (tx - x) * 0.10;
      y += (ty - y) * 0.10;
      el.style.transform = `translate3d(${x - 280}px, ${y - 280}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove);
    loop();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("mousemove", onMove); };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[5] overflow-hidden hidden md:block"
    >
      <div
        ref={ref}
        className="absolute h-[560px] w-[560px] rounded-full will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(0,245,255,0.18) 0%, rgba(139,92,246,0.10) 30%, transparent 65%)",
          filter: "blur(20px)",
        }}
      />
    </div>
  );
};

export default MouseGlow;
