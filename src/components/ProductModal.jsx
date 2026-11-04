import { useEffect, useId, useRef, useState } from "react";
import {
  TransformComponent,
  TransformWrapper,
  useControls,
  useTransformComponent,
} from "react-zoom-pan-pinch";
import { ProductImage } from "./ProductImage";
import "./ProductModal.css";

const MAX_ZOOM = 4;
const DESKTOP_ZOOM_QUERY =
  "(min-width: 1024px) and (hover: hover) and (pointer: fine)";

function ZoomControls({ ready, animationTime }) {
  const { zoomIn, zoomOut, resetTransform } = useControls();
  const percent = useTransformComponent(({ state }) =>
    Math.round(state.scale * 100),
  );

  if (!ready) return null;

  return (
    <div
      className="product-modal__controls"
      role="group"
      aria-label="Controles de zoom"
    >
      <button
        type="button"
        className="product-modal__zoom-button"
        aria-label="Alejar imagen"
        title="Alejar"
        disabled={percent <= 100}
        onClick={() => zoomOut(0.3, animationTime)}
      >
        <span aria-hidden="true">−</span>
      </button>
      <span
        className="product-modal__zoom-level"
        aria-label={`Zoom: ${percent}%`}
      >
        {percent}%
      </span>
      <button
        type="button"
        className="product-modal__zoom-button"
        aria-label="Acercar imagen"
        title="Acercar"
        disabled={percent >= MAX_ZOOM * 100}
        onClick={() => zoomIn(0.3, animationTime)}
      >
        <span aria-hidden="true">+</span>
      </button>
      <button
        type="button"
        className="product-modal__zoom-button"
        aria-label="Restablecer zoom"
        title="Restablecer zoom"
        onClick={() => resetTransform(animationTime)}
      >
        <span aria-hidden="true">↺</span>
      </button>
    </div>
  );
}

function ZoomImage({ selectedProduct, hintId, onLoad, onError }) {
  const zoomed = useTransformComponent(({ state }) => state.scale > 1.01);

  return (
    <TransformComponent
      wrapperClass="product-modal__viewport"
      contentClass="product-modal__content"
      wrapperProps={{
        role: "region",
        "aria-label": "Imagen con zoom",
        "aria-describedby": hintId,
        "data-zoomed": zoomed,
        tabIndex: 0,
      }}
    >
      <ProductImage
        src={selectedProduct.image}
        alt={`${selectedProduct.name}, color ${selectedProduct.colorLabel}`}
        className="block h-full w-full object-cover object-center sm:h-auto sm:w-auto sm:max-h-[94dvh] sm:max-w-[min(96vw,1100px)] sm:object-contain"
        loading="eager"
        draggable={false}
        onLoad={onLoad}
        onError={onError}
      />
    </TransformComponent>
  );
}

function ProductModalViewer({ selectedProduct, onClose }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const hintId = useId();
  const [imageReady, setImageReady] = useState(false);
  const [desktopZoom, setDesktopZoom] = useState(
    () => window.matchMedia(DESKTOP_ZOOM_QUERY).matches,
  );
  const [reducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const animationTime = reducedMotion ? 0 : 180;

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_ZOOM_QUERY);
    const handleChange = (event) => setDesktopZoom(event.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus({ preventScroll: true });

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const controls = dialogRef.current?.querySelectorAll(
        'button:not(:disabled), [tabindex="0"]',
      );
      const first = controls?.[0];
      const last = controls?.[controls.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) {
        previousFocus.focus({ preventScroll: true });
      }
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex h-dvh items-center justify-center overscroll-contain bg-slate-950/85 p-0 backdrop-blur-sm sm:p-3"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={`Vista ampliada de ${selectedProduct.name}`}
        className="product-modal__dialog relative h-full w-full overflow-hidden bg-white shadow-[0_30px_80px_rgba(15,23,42,0.45)] sm:h-auto sm:w-auto sm:rounded-[26px] sm:bg-transparent"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Cerrar
        </button>

        {desktopZoom ? (
          <TransformWrapper
            minScale={1}
            maxScale={MAX_ZOOM}
            initialScale={1}
            disabled={!imageReady}
            limitToBounds
            disablePadding
            smooth={!reducedMotion}
            doubleClick={{ mode: "toggle", step: Math.log(2), animationTime }}
            keyboard={{ disabled: false, animationTime }}
            panning={{
              velocityDisabled: true,
              allowMiddleClickPan: false,
              allowRightClickPan: false,
            }}
            zoomAnimation={{ disabled: reducedMotion, size: 0, animationTime }}
            autoAlignment={{ sizeX: 0, sizeY: 0, animationTime }}
            velocityAnimation={{ disabled: true }}
          >
            <ZoomImage
              selectedProduct={selectedProduct}
              hintId={hintId}
              onLoad={() => setImageReady(true)}
              onError={() => setImageReady(false)}
            />

            {imageReady && (
              <p id={hintId} className="product-modal__hint">
                Rueda o doble clic para ampliar · Arrastra para mover
              </p>
            )}

            <ZoomControls ready={imageReady} animationTime={animationTime} />
          </TransformWrapper>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[#f3f4f6] sm:h-auto sm:w-auto sm:bg-transparent">
            <ProductImage
              src={selectedProduct.image}
              alt={`${selectedProduct.name}, color ${selectedProduct.colorLabel}`}
              className="block h-full w-full object-cover object-center sm:h-auto sm:w-auto sm:max-h-[94dvh] sm:max-w-[min(96vw,1100px)] sm:object-contain"
              loading="eager"
              draggable={false}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export function ProductModal({ selectedProduct, onClose }) {
  if (!selectedProduct) return null;

  return (
    <ProductModalViewer
      key={`${selectedProduct.id}:${selectedProduct.image}`}
      selectedProduct={selectedProduct}
      onClose={onClose}
    />
  );
}
