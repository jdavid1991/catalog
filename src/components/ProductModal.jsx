import { ProductImage } from "./ProductImage";

export function ProductModal({ selectedProduct, onClose }) {
  if (!selectedProduct) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex h-dvh items-center justify-center bg-slate-950/85 p-0 backdrop-blur-sm sm:p-3"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Vista ampliada de ${selectedProduct.name}`}
        className="relative h-full w-full overflow-hidden bg-white shadow-[0_30px_80px_rgba(15,23,42,0.45)] sm:h-[94dvh] sm:w-[min(96vw,1100px)] sm:rounded-[26px]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-md"
        >
          Cerrar
        </button>

        <div className="flex h-full w-full items-center justify-center bg-[#f3f4f6] sm:p-5">
          <ProductImage
            src={selectedProduct.image}
            alt={`${selectedProduct.name}, color ${selectedProduct.colorLabel}`}
            className="block h-full w-full object-cover object-center sm:object-contain"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
}
