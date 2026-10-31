export function CatalogHeader({ themeMode = "default" }) {
  const isHalloween = themeMode === "halloween";
  const isChristmas = themeMode === "christmas";

  return (
    <header
      className={`flex flex-col gap-4 rounded-[28px] border px-4 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.06)] backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:px-6 ${
        isHalloween
          ? "border-orange-500/30 bg-[#23131c]/70"
          : isChristmas
            ? "border-emerald-200 bg-white/80"
            : "border-slate-200/80 bg-white/70"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-950 to-amber-500 text-lg font-black text-white">
          T
        </div>
        <div>
          <p
            className={`text-base font-bold ${
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

      <div className="flex w-full items-center justify-end sm:w-auto">
        {isChristmas ? (
          <span
            className="text-3xl leading-none sm:text-4xl"
            aria-label="Navidad"
          >
            🎅🏻
          </span>
        ) : isHalloween ? (
          <span
            className="text-3xl leading-none sm:text-4xl"
            aria-label="Halloween"
          >
            🧙🏻
          </span>
        ) : null}
      </div>
    </header>
  );
}
