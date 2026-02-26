import React from "react";

export const CustomBar = (props) => {
  const { x, y, width, height, payload, maxValue, minValue } = props;

  let fill;
  if (payload.isEmpty) {
    fill = "url(#chartStripes)";
  } else if (payload.value === maxValue && maxValue > 0) {
    fill = "#002B1B";
  } else if (payload.value === minValue && minValue >= 0) {
    fill = "#74C29B";
  } else {
    fill = "#227D53";
  }
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      rx={22}
      ry={22}
      fill={fill}
      stroke={payload.isEmpty ? "#F3F4F6" : "none"}
    />
  );
};

export const CustomPie = (props) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } =
    props;

  // arc of pie calculation- mid radius and thickness calculation
  const midRadius = (innerRadius + outerRadius) / 2;
  const strokeWidth = outerRadius - innerRadius;
  const RADIAN = Math.PI / 180;

  //get the coords of start and bottom
  const getCoords = (angle) => ({
    x: cx + midRadius * Math.cos(-angle * RADIAN),
    y: cy + midRadius * Math.sin(-angle * RADIAN),
  });
  const start = getCoords(startAngle);
  const end = getCoords(endAngle);

  // is the arc full or not
  const largeArcFlag = Math.abs(endAngle - startAngle) > 180 ? 1 : 0;
  const sweepFlag = startAngle > endAngle ? 1 : 0;

  return (
    <path
      d={`M ${start.x} ${start.y} A ${midRadius} ${midRadius} 0 ${largeArcFlag} ${sweepFlag} ${end.x} ${end.y}`}
      stroke={fill}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      fill="none"
    />
  );
};
