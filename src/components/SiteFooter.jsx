export function SiteFooter({ isHalloweenSeason, currentYear }) {
  return (
    <footer
      className={`mt-10 border-t pt-6 ${isHalloweenSeason ? "border-orange-500/20" : "border-slate-200"}`}
    >
      <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <p
            className={`text-base font-black tracking-[-0.04em] ${isHalloweenSeason ? "text-orange-50" : "text-slate-900"}`}
          >
            Thread House
          </p>
          <p
            className={`mt-1 text-sm ${isHalloweenSeason ? "text-orange-100/80" : "text-slate-500"}`}
          >
            © {currentYear} · Bogotá, Colombia
          </p>
        </div>

        <div
          className={`flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] sm:justify-end ${
            isHalloweenSeason ? "text-orange-100/80" : "text-slate-500"
          }`}
        >
          <span>Catálogo</span>
          <span
            className={
              isHalloweenSeason ? "text-orange-200/60" : "text-slate-300"
            }
          >
            •
          </span>
          <span>Envíos</span>
          <span
            className={
              isHalloweenSeason ? "text-orange-200/60" : "text-slate-300"
            }
          >
            •
          </span>
          <span>WhatsApp</span>
        </div>
      </div>
    </footer>
  );
}
