export function ProductModal({ selectedProduct, onClose }) {
  if (!selectedProduct) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-0 backdrop-blur-sm sm:p-3"
      onClick={onClose}
    >
      <div
        className="relative h-full w-full overflow-hidden bg-white shadow-[0_30px_80px_rgba(15,23,42,0.45)] sm:h-auto sm:max-h-[94vh] sm:w-[min(96vw,1100px)] sm:rounded-[26px]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-md"
        >
          Cerrar
        </button>

        <div className="flex h-full w-full items-center justify-center bg-[#f3f4f6] sm:max-h-[94vh] sm:p-5">
          {selectedProduct.image ? (
            <div className="flex h-full w-full items-center justify-center overflow-hidden bg-[#f3f4f6] sm:max-h-[90vh] sm:rounded-[18px]">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="h-full w-full object-cover object-center sm:max-h-[90vh]"
              />
            </div>
          ) : (
            <div className="flex h-[70vh] w-[min(80vw,700px)] items-center justify-center bg-slate-200">
              <div className="h-52 w-32 rounded-[28px] bg-slate-900 shadow-lg" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
