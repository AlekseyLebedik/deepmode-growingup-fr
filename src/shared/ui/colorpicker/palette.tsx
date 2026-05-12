import type { HSVType, RGBType } from "./types";

function hsvToRgb({ hue, saturation, value }: HSVType): RGBType {
  const i = Math.floor(hue * 6);
  const f = hue * 6 - i;

  const p = value * (1 - saturation);
  const q = value * (1 - f * saturation);
  const t = value * (1 - (1 - f) * saturation);

  let r = 0,
    g = 0,
    b = 0;

  switch (i % 6) {
    case 0:
      [r, g, b] = [value, t, p];
      break;
    case 1:
      [r, g, b] = [q, value, p];
      break;
    case 2:
      [r, g, b] = [p, value, t];
      break;
    case 3:
      [r, g, b] = [p, q, value];
      break;
    case 4:
      [r, g, b] = [t, p, value];
      break;
    case 5:
      [r, g, b] = [value, p, q];
      break;
  }

  return {
    red: Math.round(r * 255),
    green: Math.round(g * 255),
    blue: Math.round(b * 255),
  };
}

function rgbToHsv({ red, green, blue }: RGBType): HSVType {
  let r = red / 255;
  let g = green / 255;
  let b = blue / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;

  let h = 0;
  const v = max;
  const s = max === 0 ? 0 : d / max;

  if (d !== 0) {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return { hue: h, saturation: s, value: v };
}

export { rgbToHsv, hsvToRgb };
