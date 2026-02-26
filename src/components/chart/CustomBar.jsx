import React from "react";

const CustomBar = (props) => {
  const { x, y, width, height, payload, maxValue, minValue } = props;

  let fill;
  if (payload.isEmpty) {
    fill = "url(#barStripes)";
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
export default CustomBar;
