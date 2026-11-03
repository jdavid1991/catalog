import { ProductColorPalette } from "./ProductColorPalette";

export function ProductGrid({
  products,
  themeMode = "default",
  onSelectProduct,
  formatCOP,
}) {
  const isHalloween = themeMode === "halloween";
  const isChristmas = themeMode === "christmas";
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <article
          key={product.id}
          className={`overflow-hidden rounded-[30px] border shadow-[0_15px_30px_rgba(15,23,42,0.05)] ${
            isHalloween
              ? "border-orange-500/30 bg-[#23131c]/90"
              : isChristmas
                ? "border-emerald-200/80 bg-white/80"
                : "border-slate-200/80 bg-slate-50/90"
          }`}
        >
          <button
            type="button"
            onClick={() => onSelectProduct(product)}
            className="block w-full text-left"
            aria-label={`Ampliar ${product.name}`}
          >
            <div
              className={`relative overflow-hidden ${
                isHalloween
                  ? "bg-[#1f1019]"
                  : isChristmas
                    ? "bg-emerald-50"
                    : "bg-[#edf2f7]"
              }`}
            >
              <span
                className={`absolute left-4 top-4 z-10 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] shadow-sm ${
                  isHalloween
                    ? "bg-[#2d1723]/90 text-orange-100"
                    : isChristmas
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-white/90 text-slate-700"
                }`}
              >
                {product.badge}
              </span>

              {product.image ? (
                <div
                  className={`relative aspect-[4/5] w-full overflow-hidden ${
                    isHalloween
                      ? "bg-[#1a0f1d]"
                      : isChristmas
                        ? "bg-white"
                        : "bg-[#e9eef5]"
                  }`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`h-full w-full object-cover object-center transition duration-300 ${
                      product.available === false
                        ? "scale-105 grayscale-[0.2] brightness-75"
                        : "hover:scale-[1.02]"
                    }`}
                  />

                  {product.available === false && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 backdrop-blur-[1px]">
                      <span className="rounded-full border border-red-200/70 bg-red-600/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-lg backdrop-blur-sm">
                        Agotado
                      </span>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex aspect-[4/5] w-full items-center justify-center bg-[#1f1f24]">
                  <div className="h-40 w-28 rounded-[24px] bg-slate-900 shadow-lg" />
                </div>
              )}
            </div>
          </button>

          <div
            className={`space-y-3 p-4 ${isHalloween ? "bg-[#23131c]" : isChristmas ? "bg-emerald-50/60" : "bg-slate-50"}`}
          >
            <div className="flex items-center justify-between gap-3">
              <span
                className={`rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] ${
                  isHalloween
                    ? "bg-orange-500/20 text-orange-100"
                    : isChristmas
                      ? "bg-red-100 text-red-700"
                      : "bg-amber-100 text-amber-700"
                }`}
              >
                {product.category}
              </span>
              <button
                type="button"
                className={`flex h-9 w-9 items-center justify-center rounded-full transition ${
                  isHalloween
                    ? "bg-[#2d1723] text-orange-100 hover:bg-[#3b1d2d]"
                    : isChristmas
                      ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
                aria-label="Añadir a favoritos"
              >
                ♡
              </button>
            </div>

            <div>
              <h3
                className={`text-[1.8rem] font-black tracking-[-0.04em] ${
                  isHalloween
                    ? "text-orange-50"
                    : isChristmas
                      ? "text-emerald-950"
                      : "text-slate-900"
                }`}
              >
                {product.name}
              </h3>
              <p
                className={`mt-2 text-sm leading-6 ${
                  isHalloween
                    ? "text-orange-100/80"
                    : isChristmas
                      ? "text-emerald-900/75"
                      : "text-slate-600"
                }`}
              >
                {product.description}
              </p>
            </div>

            <div
              className={`flex flex-wrap items-center justify-between gap-2 text-xs ${
                isHalloween
                  ? "text-orange-100/75"
                  : isChristmas
                    ? "text-emerald-800/80"
                    : "text-slate-500"
              }`}
            >
              <span>Talla: {product.size}</span>
              <ProductColorPalette color={product.color} />
              <span>{product.material}</span>
            </div>

            <div className="pt-1">
              <strong
                className={`text-[2rem] font-black tracking-[-0.05em] ${
                  isHalloween
                    ? "text-orange-50"
                    : isChristmas
                      ? "text-emerald-950"
                      : "text-slate-900"
                }`}
              >
                {formatCOP(product.price)}
              </strong>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
