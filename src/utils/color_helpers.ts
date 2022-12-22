type HexColor = string
type RGBColor = { r: number; g: number; b: number }

export function hexToRgb(hex: string): RGBColor {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : {
        r: 0,
        g: 0,
        b: 0,
      }
}

export function hexToRgbString(hex: string) {
  const rgb = hexToRgb(hex)
  return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
}

function componentToHex(c: number) {
  var hex = c.toString(16)
  return hex.length === 1 ? '0' + hex : hex
}

export function rgbToHex({ r, g, b }: RGBColor): HexColor {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b)
}

export function hexToRgbWithAlpha(hex: string, alpha: number): string {
  const rgb = hexToRgb(hex)
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`
}
