type Point = {
  x: number;
  y: number;
};

type CirclePoint = Point & {
  radians: number;
  degrees: number;
};

export function radiansToDegrees(radians: number): number {
  return (radians * 180) / Math.PI;
}

export function createCirclePoints(
  count: number,
  radius: number,
  centerX: number,
  centerY: number,
): CirclePoint[] {
  const points: CirclePoint[] = [];

  for (let index = 0; index < count; index++) {
    const radians = (Math.PI * 2 * index) / count;

    points.push({
      x: centerX + Math.cos(radians) * radius,
      y: centerY + Math.sin(radians) * radius,
      radians,
      degrees: radiansToDegrees(radians),
    });
  }

  return points;
}

export function degreesToRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

function createArcBezier(
  start: Point,
  end: Point,
  center: Point,
  strength: number,
): string {
  const midX = (start.x + end.x) / 2;
  const midY = (start.y + end.y) / 2;

  const dirX = midX - center.x;
  const dirY = midY - center.y;

  const length = Math.sqrt(dirX * dirX + dirY * dirY);

  const nx = dirX / length;
  const ny = dirY / length;

  const controlX = midX + nx * strength;
  const controlY = midY + ny * strength;

  return `
    Q ${controlX} ${controlY},
    ${end.x} ${end.y}
  `;
}
export function createColorSegmentPath(
  outerStart: Point,
  outerEnd: Point,

  innerStart: Point,
  innerEnd: Point,

  center: Point,
) {
  const outerCurve = createArcBezier(outerStart, outerEnd, center, 20);
  const innerCurve = createArcBezier(innerEnd, innerStart, center, -20);

  return `
    M ${outerStart.x} ${outerStart.y}

    ${outerCurve}

    L ${innerEnd.x} ${innerEnd.y}

    ${innerCurve}

    Z
  `;
}

type SegmentProps = {
  outerStart: Point;
  outerEnd: Point;
  innerStart: Point;
  innerEnd: Point;
  center: Point;
  fill: string;
};

export function ColorSegment({
  outerStart,
  outerEnd,
  innerStart,
  innerEnd,
  center,
  fill,
}: SegmentProps) {
  const path = createColorSegmentPath(
    outerStart,
    outerEnd,
    innerStart,
    innerEnd,
    center,
  );

  return <path d={path} fill={fill} stroke="white" strokeWidth={2} />;
}
