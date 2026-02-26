import React from "react";

const StripedBg = () => {
  return (
    <>
      {" "}
      <defs>
        <pattern
          id="chartStripes"
          patternUnits="userSpaceOnUse"
          width="8"
          height="8"
          patternTransform="rotate(45)"
        >
          <line x1="0" y1="0" x2="0" y2="8" stroke="#002B1B" strokeWidth="2" />
        </pattern>
      </defs>
    </>
  );
};

export default StripedBg;
