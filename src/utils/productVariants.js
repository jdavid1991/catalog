const colorHexes = {
  blanco: "#ffffff",
  negro: "#000000",
  azul: "#2563eb",
  rojo: "#dc2626",
  gris: "#6b7280",
  coral: "#fb7185",
};

function normalizeColor(color) {
  return typeof color === "string" ? color.trim().toLowerCase() : "";
}

function normalizeVariants(candidates) {
  const variants = [];
  const seenColors = new Set();

  for (const candidate of candidates) {
    const color = normalizeColor(candidate?.color);
    const image =
      typeof candidate?.image === "string" ? candidate.image.trim() : "";

    if (!color || !image || seenColors.has(color)) continue;

    const label =
      typeof candidate.label === "string" ? candidate.label.trim() : "";
    const hex = typeof candidate.hex === "string" ? candidate.hex.trim() : "";

    variants.push({
      color,
      label: label || color.charAt(0).toUpperCase() + color.slice(1),
      hex: /^#(?:[\da-f]{3}|[\da-f]{6})$/i.test(hex)
        ? hex
        : colorHexes[color] || "#94a3b8",
      image,
    });
    seenColors.add(color);
  }

  return variants;
}

export function getProductVariants(product) {
  const variants = Array.isArray(product?.variants)
    ? normalizeVariants(product.variants)
    : [];

  if (variants.length > 0) return variants;

  return normalizeVariants([{ color: product?.color, image: product?.image }]);
}

export function resolveProductVariant(product, selectedColor) {
  const variants = getProductVariants(product);
  const selectedVariant =
    variants.find(({ color }) => color === normalizeColor(selectedColor)) ||
    variants.find(({ color }) => color === normalizeColor(product.color)) ||
    variants[0];

  return {
    ...product,
    variants,
    color: selectedVariant?.color || product.color,
    colorLabel: selectedVariant?.label || product.color || "No especificado",
    image: selectedVariant?.image || product.image,
  };
}
