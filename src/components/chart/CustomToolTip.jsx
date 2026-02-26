import React from "react";

export const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-[#002B1B] p-3 rounded-xl shadow-xl border border-white/10">
        <p className="text-white/60 text-[11px] font-bold mb-1 uppercase tracking-wider">
          {data.fullDay} {data.date !== "No Data" ? `• ${data.date}` : ""}
        </p>

        <p className="text-white text-[14px] font-extrabold">
          Conversion: <span className="text-[#74C29B]">{data.value}</span>
        </p>
      </div>
    );
  }
  return null;
};
