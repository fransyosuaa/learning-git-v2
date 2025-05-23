export const generateClamp = (min: number, max: number) => {
  const minFontSize = min / 16; // Convert to rem
  const maxFontSize = max / 16; // Convert to rem
  const minWidth = min * 10; // Convert to px
  const maxWidth = max * 10; // Convert to px

  return `clamp(${minFontSize}rem, ${minWidth}px, ${maxFontSize}rem)`;
}