export type RGBType = {
  red: number;
  green: number;
  blue: number;
};

export type HSVType = {
  hue: number;
  saturation: number;
  value: number;
};

export interface ISaturationProps {
  rgb: RGBType;
  steps?: number;
  minValue?: number;
  maxValue?: number;
}
