import "./ProductColorPalette.css";

function getMarkerColor(hex) {
  const digits = hex.slice(1);
  const expanded =
    digits.length === 3
      ? [...digits].map((digit) => digit.repeat(2)).join("")
      : digits;
  const channels = [0, 2, 4].map((offset) => {
    const channel = parseInt(expanded.slice(offset, offset + 2), 16) / 255;
    return channel <= 0.04045
      ? channel / 12.92
      : ((channel + 0.055) / 1.055) ** 2.4;
  });
  const luminance =
    channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;

  return luminance > 0.179 ? "#0f172a" : "#ffffff";
}

export function ProductColorPalette({
  className = "",
  variants = [],
  color,
  productName,
  onColorChange,
}) {
  if (variants.length === 0) return null;

  return (
    <div
      className={`product-color-palette ${className}`}
      role="group"
      aria-label={`Colores de ${productName}`}
    >
      <span className="product-color-palette__label">Color:</span>

      {variants.map((variant) => {
        const isSelected = color === variant.color;

        return (
          <button
            key={variant.color}
            type="button"
            className="product-color-palette__swatch"
            aria-label={`Color ${variant.label}`}
            aria-pressed={isSelected}
            title={variant.label}
            onClick={() => onColorChange(variant.color)}
          >
            <span
              className="product-color-palette__color"
              style={{
                backgroundColor: variant.hex,
                color: getMarkerColor(variant.hex),
              }}
              aria-hidden="true"
            >
              {isSelected && (
                <svg
                  className="product-color-palette__marker"
                  viewBox="0 0 12 12"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path
                    d="M2 2 10 10 M10 2 2 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
}
