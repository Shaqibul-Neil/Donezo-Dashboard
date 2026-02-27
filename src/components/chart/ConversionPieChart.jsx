import React from "react";
import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import StripedBg from "../miscellaneous/StripedBg";
import { CustomPie } from "./CustomShapes";
import { useMobile } from "../../hooks/useMobile";

const ConversionPieChart = ({ data, conversionRate }) => {
  const { isMobile } = useMobile();
  return (
    <div className="md:w-full w-[90%] h-52 relative mx-auto">
      <ResponsiveContainer width="100%" height={208}>
        <PieChart>
          {/* Stripe Pattern */}
          <StripedBg />
          <Pie
            data={data}
            cx="50%"
            cy="85%"
            startAngle={0}
            endAngle={180}
            innerRadius={isMobile ? 60 : 75}
            outerRadius={isMobile ? 105 : 120}
            cornerRadius="50%"
            paddingAngle={5}
            dataKey="value"
            stroke="none"
            animationDuration={1500}
            shape={<CustomPie />}
          ></Pie>
          <Tooltip
            wrapperStyle={{ zIndex: 100 }}
            contentStyle={{
              backgroundColor: "#002B1B",
              border: "none",
              borderRadius: "12px",
              padding: "8px 14px",
            }}
            itemStyle={{
              color: "#fff",
              fontSize: "12px",
              fontWeight: "bold",
            }}
            labelStyle={{
              color: "#74C29B",
              fontSize: "10px",
              fontWeight: "bold",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center">
        <span className="text-3xl font-extrabold text-[#002B1B] tracking-tighter leading-none">
          {conversionRate}%
        </span>
        <p className="text-[#002B1B]">Conversion</p>
      </div>
    </div>
  );
};

export default ConversionPieChart;
