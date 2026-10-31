export function CatalogHeader({ isHalloweenSeason }) {
  return (
    <header
      className={`flex flex-col gap-4 rounded-[28px] border px-4 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.06)] backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:px-6 ${
        isHalloweenSeason
          ? "border-orange-500/30 bg-[#23131c]/70"
          : "border-slate-200/80 bg-white/70"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-950 to-amber-500 text-lg font-black text-white">
          T
        </div>
        <div>
          <p
            className={`text-base font-bold ${isHalloweenSeason ? "text-orange-50" : "text-slate-900"}`}
          >
            Thread House
          </p>
          <span
            className={`text-xs ${isHalloweenSeason ? "text-orange-100/80" : "text-slate-500"}`}
          >
            Catálogo
          </span>
        </div>
      </div>

      <div className="flex w-full items-center justify-end sm:w-auto" />
    </header>
  );
}
