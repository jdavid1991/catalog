import "./ProductColorPalette.css";

const shirtColors = [
  { name: "Blanco", value: "#ffffff", markerColor: "#0f172a" },
  { name: "Negro", value: "#000000", markerColor: "#ffffff" },
  { name: "Azul", value: "#2563eb", markerColor: "#ffffff" },
  { name: "Rojo", value: "#dc2626", markerColor: "#ffffff" },
];

export function ProductColorPalette({ color }) {
  const colorName = typeof color === "string" ? color.trim() : "";
  const selectedColor = colorName.toLowerCase();

  return (
    <svg
      className="product-color-palette"
      width="76"
      height="16"
      viewBox="0 0 76 16"
      role="img"
      focusable="false"
      aria-label={`Paleta: blanco, negro, azul y rojo. Color de la camiseta: ${colorName || "No especificado"}.`}
    >
      {shirtColors.map(({ name, value, markerColor }, index) => {
        const isSelected = selectedColor === name.toLowerCase();

        return (
          <g
            key={name}
            transform={`translate(${8 + index * 20} 8)`}
            aria-hidden="true"
          >
            <title>
              {isSelected ? `${name} (color de la camiseta)` : name}
            </title>
            <circle r="7.5" fill={value} stroke="#64748b" strokeOpacity="0.6" />
            {isSelected && (
              <path
                d="M-2.5 -2.5 2.5 2.5 M-2.5 2.5 2.5 -2.5"
                fill="none"
                stroke={markerColor}
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            )}
          </g>
        );
      })}
    </svg>
  );
}
