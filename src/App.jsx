import { useEffect, useState } from "react";
import products from "./data/products.json";
import { HalloweenBackground } from "./components/HalloweenBackground";
import { CatalogHeader } from "./components/CatalogHeader";
import { HeroSection } from "./components/HeroSection";
import { ProductGrid } from "./components/ProductGrid";
import { Pagination } from "./components/Pagination";
import { SiteFooter } from "./components/SiteFooter";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { ProductModal } from "./components/ProductModal";

const filters = ["Niñ@s", "Mujeres", "Todos"];

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedGender, setSelectedGender] = useState("Niñ@s");
  const [currentPage, setCurrentPage] = useState(1);

  const today = new Date();
  const isHalloweenSeason = (() => {
    const start = new Date(today.getFullYear(), 9, 1, 0, 0, 0, 0);
    const end = new Date(today.getFullYear(), 9, 31, 23, 59, 59, 999);
    return today >= start && today <= end;
  })();

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const hideNlWraps = () => {
      document
        .querySelectorAll(
          '#nl-badge-frame, #nl-hud-frame, .nl-wrap, [class*="nl-wrap"], [id*="nl-wrap"]',
        )
        .forEach((element) => {
          if (
            element.tagName === "IFRAME" ||
            element.id === "nl-badge-frame" ||
            element.id === "nl-hud-frame"
          ) {
            element.remove();
            return;
          }

          element.style.display = "none";
          element.setAttribute("hidden", "true");
        });
    };

    hideNlWraps();
    const observer = new MutationObserver(() => {
      hideNlWraps();
    });

    if (document.body) {
      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }

    return () => observer.disconnect();
  }, []);

  const formatCOP = (value) =>
    new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0,
    }).format(value);

  const filteredProducts =
    selectedGender === "Todos"
      ? products
      : products.filter((product) => product.gender === selectedGender);

  const visibleProducts =
    selectedGender === "Todos"
      ? [...filteredProducts].sort(() => Math.random() - 0.5)
      : filteredProducts;

  const itemsPerPage = 12;
  const pageCount = Math.max(
    1,
    Math.ceil(visibleProducts.length / itemsPerPage),
  );
  const currentYear = new Date().getFullYear();
  const safeCurrentPage = Math.min(currentPage, pageCount);
  const pageNumbers = Array.from(
    { length: pageCount },
    (_, index) => index + 1,
  );
  const paginatedProducts = visibleProducts.slice(
    (safeCurrentPage - 1) * itemsPerPage,
    safeCurrentPage * itemsPerPage,
  );

  const handleFilterChange = (filter) => {
    setSelectedGender(filter);
    setCurrentPage(1);
  };

  return (
    <div
      className={`relative min-h-screen overflow-hidden ${
        isHalloweenSeason
          ? "bg-[radial-gradient(circle_at_top,_rgba(251,146,60,0.18),_transparent_35%),linear-gradient(180deg,#1a0f1d_0%,#130b16_100%)] text-orange-50"
          : "bg-white text-slate-900"
      }`}
    >
      <HalloweenBackground isHalloweenSeason={isHalloweenSeason} />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-3 py-6 sm:px-5 sm:py-8">
        <CatalogHeader isHalloweenSeason={isHalloweenSeason} />

        <HeroSection
          isHalloweenSeason={isHalloweenSeason}
          formatCOP={formatCOP}
        />

        <main className="mt-8 w-full">
          <section aria-live="polite" className="space-y-4">
            <div className="flex flex-col gap-2 px-1 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p
                  className={`text-[11px] font-bold uppercase tracking-[0.18em] ${
                    isHalloweenSeason ? "text-orange-200" : "text-slate-500"
                  }`}
                >
                  Catálogo
                </p>
                <h2
                  className={`mt-5 text-3xl font-black tracking-[-0.05em] sm:text-4xl 2xl:mt-10 ${
                    isHalloweenSeason ? "text-orange-50" : "text-slate-900"
                  }`}
                >
                  Nuestras camisetas
                </h2>
              </div>
              <span
                className={`inline-flex w-fit rounded-full px-3 py-2 text-xs font-semibold ${
                  isHalloweenSeason
                    ? "bg-[#2d1723] text-orange-100"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {visibleProducts.length} productos
              </span>
            </div>

            <div className="flex flex-wrap gap-2 pb-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => handleFilterChange(filter)}
                  className={`rounded-full px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] transition ${
                    selectedGender === filter
                      ? isHalloweenSeason
                        ? "bg-orange-500 text-white shadow-lg"
                        : "bg-slate-900 text-white shadow-lg"
                      : isHalloweenSeason
                        ? "bg-[#2d1723] text-orange-100 hover:bg-[#3b1d2d]"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <ProductGrid
              products={paginatedProducts}
              isHalloweenSeason={isHalloweenSeason}
              onSelectProduct={setSelectedProduct}
              formatCOP={formatCOP}
            />

            <Pagination
              pageNumbers={pageNumbers}
              safeCurrentPage={safeCurrentPage}
              setCurrentPage={setCurrentPage}
              isHalloweenSeason={isHalloweenSeason}
            />
          </section>
        </main>

        <SiteFooter
          isHalloweenSeason={isHalloweenSeason}
          currentYear={currentYear}
        />
        <WhatsAppButton />
        <ProductModal
          selectedProduct={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      </div>
    </div>
  );
}

export default App;
