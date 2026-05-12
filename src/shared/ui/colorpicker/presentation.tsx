import { bem, cn } from "@/shared/lib/cls";
import { RGBType, ValueType, HSVType } from "./types";
import { createCirclePoints, ColorSegment } from "./figure";

import React from "react";

const colors = ["#ff4d4d", "#ff944d", "#ffd24d", "#4dff88", "#4dc3ff"];

export function SemiCirclePicker() {
  const size = 200;
  const strokeWidth = 26;

  const radius = (size - strokeWidth) / 2;
  const center = size / 2;

  // полукруг = 180°
  const totalAngle = 360;

  // gap между сегментами в градусах
  const gap = 20;

  const segmentAngle = (totalAngle - gap * (colors.length - 1)) / colors.length;

  function polarToCartesian(cx, cy, r, angle) {
    const rad = ((angle - 180) * Math.PI) / 180;

    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad),
    };
  }

  function describeArc(x, y, r, startAngle, endAngle) {
    const start = polarToCartesian(x, y, r, endAngle);
    const end = polarToCartesian(x, y, r, startAngle);

    const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

    return [
      "M",
      start.x,
      start.y,
      "A",
      r,
      r,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
      "V",
      50,
      4,
      "M",
      50,
      5,
      "Z",
    ].join(" ");
  }

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg width={size} height={size / 2 + strokeWidth}>
        {colors.map((color, i) => {
          const startAngle = i * (segmentAngle + gap);
          const endAngle = startAngle + segmentAngle;

          return (
            <path
              key={i}
              d={describeArc(center, center, radius, startAngle, endAngle)}
              stroke={color}
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
            />
          );
        })}
      </svg>
    </div>
  );
}

type PresentationPropsType = {
  current_palette?: RGBType;
  min_value?: ValueType;
  max_value?: ValueType;
};

type ColorPresentationType = {
  color: HSVType;
};

const ColorPresentation = ({ color }: ColorPresentationType) => {
  return <div>COLOR</div>;
};

const ColorPicker = ({
  current_palette,
  min_value = 0.3,
  max_value = 1,
}: PresentationPropsType) => {
  const center = {
    x: 200,
    y: 200,
  };

  const outer = createCirclePoints(24, 100, center.x, center.y);

  const inner = createCirclePoints(24, 60, center.x, center.y);
  const b = bem("colorpicker-cnt");

  return (
    <div className={cn(b.block)} data-testid="colorpicker">
      <svg width={"100vw"} height={"100vh"}>
        {outer.map((point, index) => {
          const next = (index + 1) % outer.length;

          return (
            <ColorSegment
              key={index}
              center={center}
              fill={`hsl(${point.degrees}, 100%, 50%)`}
              outerStart={outer[index]}
              outerEnd={outer[next]}
              innerStart={inner[index]}
              innerEnd={inner[next]}
            />
          );
        })}
      </svg>
      {/* {get_circule_coordinate(12, 100, 200, 200).map((el, i) => {
        return (
          <div
            key={i}
            style={{
              width: "5px",
              height: "5px",
              background: "red",
              position: "absolute",
              right: `${el.x}px`,
              top: `${el.y}px`,
            }}
          />
        );
      })}
      {get_circule_coordinate(12, 40, 200, 200).map((el, i) => {
        return (
          <div
            key={i}
            style={{
              width: "5px",
              height: "5px",
              background: "red",
              position: "absolute",
              right: `${el.x}px`,
              top: `${el.y}px`,
            }}
          />
        );
      })} */}
    </div>
  );
};

export default ColorPicker;
