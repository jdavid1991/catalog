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
    <span
      className="product-color-palette"
      role="img"
      aria-label={`Paleta: blanco, negro, azul y rojo. Color de la camiseta: ${colorName || "No especificado"}.`}
    >
      {shirtColors.map(({ name, value, markerColor }) => {
        const isSelected = selectedColor === name.toLowerCase();

        return (
          <span
            key={name}
            className="product-color-palette__swatch"
            style={{ backgroundColor: value, color: markerColor }}
            title={isSelected ? `${name} (color de la camiseta)` : name}
            aria-hidden="true"
          >
            {isSelected ? "X" : null}
          </span>
        );
      })}
    </span>
  );
}
