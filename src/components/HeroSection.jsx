export function HeroSection({ isHalloweenSeason, formatCOP }) {
  const stats = [
    ["50+", "ventas"],
    ["4.5", "valoración"],
    ["24h", "envío"],
  ];

  return (
    <section className="mt-6 grid gap-6 px-1 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-10 md:px-2">
      <div className="space-y-6 py-2">
        <p
          className={`text-xs font-bold uppercase tracking-[0.18em] ${isHalloweenSeason ? "text-orange-300" : "text-amber-500"}`}
        >
          Colección nueva 🎃
        </p>
        <h1
          className={`text-4xl font-black leading-[0.95] tracking-[-0.06em] sm:text-5xl lg:text-6xl ${
            isHalloweenSeason ? "text-orange-50" : "text-slate-900"
          }`}
        >
          Estilo casual para cada día.
        </h1>
        <p
          className={`max-w-xl text-base leading-7 ${isHalloweenSeason ? "text-orange-100/90" : "text-slate-600"}`}
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
                isHalloweenSeason ? "bg-[#2d1723]/80" : "bg-slate-100/80"
              }`}
            >
              <strong
                className={`block text-lg font-bold ${isHalloweenSeason ? "text-orange-50" : "text-slate-900"}`}
              >
                {value}
              </strong>
              <span
                className={`text-xs ${isHalloweenSeason ? "text-orange-100/80" : "text-slate-500"}`}
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
            isHalloweenSeason
              ? "border-orange-500/30 bg-gradient-to-br from-[#2a1621] to-[#120d18]"
              : "border-slate-200 bg-gradient-to-br from-slate-50 to-indigo-100"
          }`}
        >
          <span
            className={`inline-flex rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] ${
              isHalloweenSeason
                ? "bg-orange-500/20 text-orange-200"
                : "bg-amber-100 text-amber-700"
            }`}
          >
            Más vendido
          </span>

          <div className="relative mx-auto mt-6 flex h-64 w-56 items-center justify-center overflow-hidden rounded-[24px] border border-slate-200 bg-white/60">
            <img
              src="/images/tom_and_jerry_full.png"
              alt="Camiseta más vendida"
              className="h-full w-full object-cover"
            />
          </div>

          <div
            className={`mt-4 flex items-center justify-between gap-4 ${isHalloweenSeason ? "text-orange-50" : "text-slate-900"}`}
          >
            <p className="text-base font-semibold">Tom and Jerry</p>
            <strong className="text-xl font-black">{formatCOP(30000)}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
