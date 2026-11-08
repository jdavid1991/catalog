export function CatalogHeader({ themeMode = "default" }) {
  const isHalloween = themeMode === "halloween";
  const isChristmas = themeMode === "christmas";

  return (
    <header
      className={`flex items-center justify-between gap-3 rounded-[28px] border px-4 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.06)] backdrop-blur-md sm:px-6 ${
        isHalloween
          ? "border-orange-500/30 bg-[#23131c]/70"
          : isChristmas
            ? "border-emerald-200 bg-white/80"
            : "border-slate-200/80 bg-white/70"
      }`}
    >
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white/80 shadow-sm ring-1 ring-slate-900/20 sm:h-24 sm:w-24">
          <img
            src="/images/Thread%20House.png"
            alt="Thread House logo"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="min-w-0">
          <p
            className={`truncate text-base font-bold ${
              isHalloween
                ? "text-orange-50"
                : isChristmas
                  ? "text-emerald-900"
                  : "text-slate-900"
            }`}
          >
            Thread House
          </p>
          <span
            className={`text-xs ${
              isHalloween
                ? "text-orange-100/80"
                : isChristmas
                  ? "text-emerald-700"
                  : "text-slate-500"
            }`}
          >
            Catálogo
          </span>
        </div>
      </div>

      <div className="flex shrink-0 items-center justify-end sm:w-auto">
        {isChristmas ? (
          <span
            className="text-[2rem] leading-none sm:text-4xl"
            aria-label="Navidad"
          >
            🎅🏻
          </span>
        ) : isHalloween ? (
          <span
            className="text-[2rem] leading-none sm:text-4xl"
            aria-label="Halloween"
          >
            🧙🏻
          </span>
        ) : null}
      </div>
    </header>
  );
}
