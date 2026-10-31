export function HalloweenBackground({ isHalloweenSeason }) {
  if (!isHalloweenSeason) return null;

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute -left-2 top-8 text-[4rem] opacity-10">🎃</div>
      <div className="absolute left-1/4 top-20 text-[3rem] opacity-10">🎃</div>
      <div className="absolute right-10 top-24 text-[5rem] opacity-10">🎃</div>
      <div className="absolute bottom-20 left-10 text-[4.5rem] opacity-10">
        🎃
      </div>
      <div className="absolute bottom-16 right-20 text-[3.5rem] opacity-10">
        🎃
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] opacity-[0.04]">
        🎃
      </div>
      <div className="absolute left-8 top-1/3 text-[3.8rem] opacity-10">🎃</div>
      <div className="absolute right-1/4 bottom-12 text-[4.2rem] opacity-10">
        🎃
      </div>
    </div>
  );
}
