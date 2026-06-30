// Reusable cyberpunk grid + radial blobs background
const GridBackground = ({ className = "" }) => {
  return (
    <div
      aria-hidden
      className={"absolute inset-0 overflow-hidden pointer-events-none " + className}
    >
      <div className="absolute inset-0 bg-grid-pattern [background-size:56px_56px] opacity-30" />
      <div className="absolute inset-0 bg-scanlines opacity-30" />
      <div className="absolute -top-32 -right-20 h-[480px] w-[480px] rounded-full bg-neon-blue/15 blur-[120px]" />
      <div className="absolute -bottom-32 -left-16 h-[460px] w-[460px] rounded-full bg-neon-purple/15 blur-[120px]" />
    </div>
  );
};

export default GridBackground;
