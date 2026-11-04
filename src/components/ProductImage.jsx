import { useState } from "react";

export function ProductImage({ src, alt, className, loading = "lazy" }) {
  const [failedSrc, setFailedSrc] = useState(null);

  if (!src || failedSrc === src) {
    return (
      <div
        role="img"
        aria-label={`${alt}. Imagen no disponible para este color.`}
        className="flex h-full w-full items-center justify-center bg-slate-100 p-6 text-center text-sm text-slate-500"
      >
        <span aria-hidden="true">Imagen no disponible para este color</span>
      </div>
    );
  }

  return (
    <img
      key={src}
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      onLoad={() => setFailedSrc(null)}
      onError={() => setFailedSrc(src)}
    />
  );
}
