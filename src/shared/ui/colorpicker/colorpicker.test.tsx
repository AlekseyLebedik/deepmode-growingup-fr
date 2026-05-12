import { render, fireEvent, screen } from "@testing-library/react";
import { rgbToHsv, hsvToRgb } from "./palette";

import ColorPicker from "./presentation";

test("Check palette diaposon", () => {
  expect(rgbToHsv({ red: 255, green: 255, blue: 0 })).toEqual({
    hue: 0.16666666666666666,
    saturation: 1,
    value: 1,
  });

  expect(rgbToHsv({ red: 100, green: 200, blue: 0 })).toEqual({
    hue: 0.25,
    saturation: 1,
    value: 0.7843137254901961,
  });

  expect(rgbToHsv({ red: 100, green: 200, blue: 50 })).toEqual({
    hue: 0.2777777777777778,
    saturation: 0.75,
    value: 0.7843137254901961,
  });
});

test("Check rgb from hsv", () => {
  expect(
    hsvToRgb({
      hue: 0.2777777777777778,
      saturation: 0.75,
      value: 0.7843137254901961,
    }),
  ).toEqual({ red: 100, blue: 50, green: 200 });
  expect(
    hsvToRgb({
      hue: 0.25,
      saturation: 1,
      value: 0.7843137254901961,
    }),
  ).toEqual({ red: 100, blue: 0, green: 200 });
});

test("Check display container with picker", () => {
  const { rerender } = render(<ColorPicker />);

  expect(screen.getByTestId("colorpicker")).toBeInTheDocument();
});
