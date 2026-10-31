export function HeroSection({ themeMode = "default", formatCOP }) {
  const isHalloween = themeMode === "halloween";
  const isChristmas = themeMode === "christmas";
  const stats = [
    ["50+", "ventas"],
    ["4.5", "valoración"]
  ];

  return (
    <section className="mt-6 grid gap-6 px-1 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-10 md:px-2">
      <div className="space-y-6 py-2">
        <p
          className={`text-xs font-bold uppercase tracking-[0.18em] ${
            isHalloween
              ? "text-orange-300"
              : isChristmas
                ? "text-emerald-700"
                : "text-slate-500"
          }`}
        >
          Colección nueva
        </p>
        <h1
          className={`text-4xl font-black leading-[0.95] tracking-[-0.06em] sm:text-5xl lg:text-6xl ${
            isHalloween
              ? "text-orange-50"
              : isChristmas
                ? "text-emerald-950"
                : "text-slate-900"
          }`}
        >
          Estilo casual para cada día.
        </h1>
        <p
          className={`max-w-xl text-base leading-7 ${
            isHalloween
              ? "text-orange-100/90"
              : isChristmas
                ? "text-emerald-800/90"
                : "text-slate-600"
          }`}
        >
          Camisetas modernas, cómodas y listas para lucirse en el día a día.
        </p>

        <ul
          className="flex flex-wrap gap-3 pt-2"
          aria-label="estadísticas de la marca"
        >
          {stats.map(([value, label]) => (
            <li
              key={label}
              className={`min-w-[100px] rounded-2xl px-4 py-3 text-left ${
                isHalloween
                  ? "bg-[#2d1723]/80"
                  : isChristmas
                    ? "bg-emerald-100/80"
                    : "bg-slate-100/80"
              }`}
            >
              <strong
                className={`block text-lg font-bold ${
                  isHalloween
                    ? "text-orange-50"
                    : isChristmas
                      ? "text-emerald-900"
                      : "text-slate-900"
                }`}
              >
                {value}
              </strong>
              <span
                className={`text-xs ${
                  isHalloween
                    ? "text-orange-100/80"
                    : isChristmas
                      ? "text-emerald-700"
                      : "text-slate-500"
                }`}
              >
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center">
        <div
          className={`w-full max-w-md rounded-[32px] border p-5 shadow-[0_24px_60px_rgba(15,23,42,0.12)] ${
            isHalloween
              ? "border-orange-500/30 bg-gradient-to-br from-[#2a1621] to-[#120d18]"
              : isChristmas
                ? "border-emerald-200 bg-gradient-to-br from-emerald-50 to-red-50"
                : "border-slate-200 bg-gradient-to-br from-slate-50 to-indigo-100"
          }`}
        >
          <span
            className={`inline-flex rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] ${
              isHalloween
                ? "bg-orange-500/20 text-orange-200"
                : isChristmas
                  ? "bg-red-100 text-red-700"
                  : "bg-amber-100 text-amber-700"
            }`}
          >
            Más vendido
          </span>

          <div className="relative mx-auto mt-6 flex h-64 w-56 items-center justify-center overflow-hidden rounded-[24px] border border-slate-200 bg-white/60">
            <img
              src="/images/tom_and_jerry_sell.gif"
              alt="Camiseta más vendida"
              className="h-full w-full object-cover"
            />
          </div>

          <div
            className={`mt-4 flex items-center justify-between gap-4 ${
              isHalloween
                ? "text-orange-50"
                : isChristmas
                  ? "text-emerald-950"
                  : "text-slate-900"
            }`}
          >
            <p className="text-base font-semibold">Tom and Jerry</p>
            <strong className="text-xl font-black">{formatCOP(30000)}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
