export function Pagination({
  pageNumbers,
  safeCurrentPage,
  setCurrentPage,
  isHalloweenSeason,
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 pt-6">
      <span
        className={`text-[10px] font-bold uppercase tracking-[0.18em] ${
          isHalloweenSeason ? "text-white" : "text-slate-500"
        }`}
      >
        Página
      </span>

      <div className="flex items-center justify-center gap-2">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            type="button"
            onClick={() => setCurrentPage(pageNumber)}
            className={`inline-flex h-8 w-8 items-center justify-center border text-sm font-bold transition ${
              safeCurrentPage === pageNumber
                ? "border-slate-900 bg-slate-900 text-white shadow-md"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
            } rounded-[6px]`}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
}
