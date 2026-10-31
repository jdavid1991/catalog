import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Camiseta Halloween",
    category: "Urban",
    price: 40000,
    color: "Negro",
    material: "Algodón 100%",
    badge: "Nuevo",
    palette: "bg-slate-900",
    image: "/images/halloween.gif",
    description: "Ideal para looks casuales con corte cómodo y estilo moderno.",
  },
  {
    id: 2,
    name: "Camiseta Blanca Clásica",
    category: "Minimal",
    price: 25.5,
    color: "Blanco",
    material: "Premium",
    badge: "Top",
    palette: "bg-stone-100",
    image: "/images/camiseta-blanca-clasica.jpg",
    description: "Versátil, fresca y lista para combinar con cualquier outfit.",
  },
  {
    id: 3,
    name: "Camiseta Vintage Azul",
    category: "Vintage",
    price: 32.0,
    color: "Azul",
    material: "Algodón lavado",
    badge: "Edición",
    palette: "bg-indigo-500",
    image: "/images/camiseta-vintage-azul.jpg",
    description: "Acabado retro con una silueta ligera ideal para diario.",
  },
  {
    id: 4,
    name: "Camiseta Deportiva Gris",
    category: "Deportivo",
    price: 27.75,
    color: "Gris",
    material: "Microfibra",
    badge: "Popular",
    palette: "bg-slate-400",
    image: "/images/camiseta-deportiva-gris.jpg",
    description: "Perfecta para entrenar o para un look relajado y funcional.",
  },
  {
    id: 5,
    name: "Camiseta de Verano Coral",
    category: "Verano",
    price: 26.9,
    color: "Coral",
    material: "Transpirable",
    badge: "Verano",
    palette: "bg-rose-400",
    image: "/images/camiseta-verano-coral.jpg",
    description: "Ligera, fresca y alegre para días soleados y actividades.",
  },
  {
    id: 6,
    name: "Camiseta Negra Minimal",
    category: "Minimal",
    price: 30.25,
    color: "Negro",
    material: "Algodón premium",
    badge: "Nuevo",
    palette: "bg-slate-700",
    image: "/images/camiseta-negra-minimal.jpg",
    description: "Simple y elegante, con un ajuste limpio y moderno.",
  },
];

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const hideNlWraps = () => {
    document.querySelectorAll('.nl-wrap, [class*="nl-wrap"], [id*="nl-wrap"]').forEach((element) => {
      element.style.display = 'none';
      element.setAttribute('hidden', 'true');
    });
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', hideNlWraps);
    const observer = new MutationObserver(() => {
      hideNlWraps();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  const formatCOP = (value) =>
    new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <div className="mx-auto w-full max-w-[1600px] px-3 py-6 sm:px-5 sm:py-8">
      <header className="flex flex-col gap-4 rounded-[28px] border border-slate-200/80 bg-white/70 px-4 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.06)] backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-950 to-amber-500 text-lg font-black text-white">
            T
          </div>
          <div>
            <p className="text-base font-bold text-slate-900">Thread House</p>
            <span className="text-xs text-slate-500">Catálogo</span>
          </div>
        </div>

        <div className="flex w-full items-center justify-end sm:w-auto" />
      </header>

      <section className="mt-6 grid gap-6 px-1 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-10 md:px-2">
        <div className="space-y-6 py-2">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-500">
            Colección nueva
          </p>
          <h1 className="text-4xl font-black leading-[0.95] tracking-[-0.06em] text-slate-900 sm:text-5xl lg:text-6xl">
            Estilo casual para cada día.
          </h1>
          <p className="max-w-xl text-base leading-7 text-slate-600">
            Camisetas modernas, cómodas y listas para lucirse en el día a día.
          </p>

          <ul
            className="flex flex-wrap gap-3 pt-2"
            aria-label="estadísticas de la marca"
          >
            {[
              ["1.2K+", "ventas"],
              ["4.9", "valoración"],
              ["24h", "envío"],
            ].map(([value, label]) => (
              <li
                key={label}
                className="min-w-[100px] rounded-2xl bg-slate-100/80 px-4 py-3 text-left"
              >
                <strong className="block text-lg font-bold text-slate-900">
                  {value}
                </strong>
                <span className="text-xs text-slate-500">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-md rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-50 to-indigo-100 p-5 shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
            <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-amber-700">
              Más vendido
            </span>

            <div className="relative mx-auto mt-6 h-64 w-56">
              <div className="absolute left-1/2 top-3 h-14 w-20 -translate-x-1/2 rounded-t-[28px] rounded-b-xl bg-slate-900" />
              <div className="absolute left-1/2 top-14 h-32 w-36 -translate-x-1/2 rounded-[28px] bg-slate-900" />
              <div className="absolute left-5 top-16 h-24 w-11 rotate-[22deg] rounded-[20px] bg-slate-900" />
              <div className="absolute right-5 top-16 h-24 w-11 -rotate-[22deg] rounded-[20px] bg-slate-900" />
            </div>

            <div className="mt-4 flex items-center justify-between gap-4 text-slate-900">
              <p className="text-base font-semibold">Urban Basic</p>
              <strong className="text-xl font-black">$34.99</strong>
            </div>
          </div>
        </div>
      </section>

      <main className="mt-8 w-full">
        <section aria-live="polite" className="space-y-4">
          <div className="flex flex-col gap-2 px-1 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                Catálogo
              </p>
              <h2 className="text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-4xl">
                Nuestras camisetas
              </h2>
            </div>
            <span className="inline-flex w-fit rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-600">
              {products.length} productos
            </span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.id}
                className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_15px_30px_rgba(15,23,42,0.05)]"
              >
                <button
                  type="button"
                  onClick={() => setSelectedProduct(product)}
                  className="block w-full text-left"
                  aria-label={`Ampliar ${product.name}`}
                >
                  <div className="relative overflow-hidden bg-[#f3f4f6]">
                    <span className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-700 shadow-sm">
                      {product.badge}
                    </span>

                    {product.image ? (
                      <div className="aspect-[4/5] w-full overflow-hidden bg-[#f3f4f6]">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover object-center transition duration-300 hover:scale-[1.02]"
                        />
                      </div>
                    ) : (
                      <div className="flex aspect-[4/5] w-full items-center justify-center bg-slate-200">
                        <div className="h-40 w-28 rounded-[24px] bg-slate-900 shadow-lg" />
                      </div>
                    )}
                  </div>
                </button>

                <div className="space-y-3 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-amber-100 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-amber-700">
                      {product.category}
                    </span>
                    <button
                      type="button"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-lg text-slate-600 transition hover:bg-slate-200"
                      aria-label="Añadir a favoritos"
                    >
                      ♡
                    </button>
                  </div>

                  <div>
                    <h3 className="text-[1.8rem] font-black tracking-[-0.04em] text-slate-900">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                    <span>{product.color}</span>
                    <span>{product.material}</span>
                  </div>

                  <div className="pt-1">
                    <strong className="text-[2rem] font-black tracking-[-0.05em] text-slate-900">
                      {formatCOP(product.price)}
                    </strong>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <a
        href="https://wa.me/573001234567?text=Hola%20quiero%20consultar%20por%20las%20camisetas"
        target="_blank"
        rel="noreferrer"
        aria-label="Chatea por WhatsApp"
        className="fixed bottom-5 left-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.45)] transition hover:scale-105"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-7 w-7 fill-current"
        >
          <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.49 2 2.01 6.48 2.01 12.03c0 1.68.44 3.32 1.28 4.76L2 22l5.31-1.39a9.96 9.96 0 0 0 4.76 1.14h.01c5.55 0 10.03-4.48 10.03-10.03 0-2.68-1.04-5.2-2.95-7.11Zm-7.01 15.48h-.01a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.15.82.84-3.07-.2-.32a8.23 8.23 0 1 1 7.06 3.99Zm4.52-6.14c-.25-.12-1.47-.72-1.7-.8-.23-.08-.39-.12-.56.12-.17.25-.65.8-.8.96-.15.17-.3.19-.55.06-.25-.12-1.05-.39-2-1.24-.74-.66-1.24-1.48-1.39-1.73-.15-.25-.02-.39.11-.52.11-.11.25-.29.38-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.36.99 2.52.11.16 1.72 2.62 4.16 3.67.58.25 1.04.4 1.39.51.58.18 1.11.16 1.53.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.16-.47-.28Z" />
        </svg>
      </a>

      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-3 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative w-[min(96vw,1100px)] max-h-[94vh] overflow-hidden rounded-[26px] bg-white shadow-[0_30px_80px_rgba(15,23,42,0.45)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-md"
            >
              Cerrar
            </button>

            <div className="flex max-h-[94vh] items-center justify-center bg-[#f3f4f6] p-3 sm:p-5">
              {selectedProduct.image ? (
                <div className="flex max-h-[90vh] w-full items-center justify-center overflow-hidden rounded-[18px] bg-[#f3f4f6]">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="max-h-[90vh] w-full object-cover object-center"
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
      )}
    </div>
  );
}

export default App;
