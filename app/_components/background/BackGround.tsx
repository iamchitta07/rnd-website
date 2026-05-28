const BackGroundGrid = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-black/99">
      {/* The Grid Mask */}
      <div
        className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
        style={{
          maskImage: "radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)",
          WebkitMaskImage: "radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)",
        }}
      />

      {/* The Animating Ambient Glow */}
      <div className="absolute top-0 left-1/2 -z-10 h-100 w-150 -translate-x-1/2 bg-primary/10 blur-[120px]" />
    </div>
  );
};

export default BackGroundGrid;
