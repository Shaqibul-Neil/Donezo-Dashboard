import React, { memo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { dayFormat } from "../../lib/utils";
import { CustomTooltip } from "./CustomToolTip";
import StripedBg from "../miscellaneous/StripedBg";
import { CustomBar } from "./CustomShapes";

const AnalyticsBarChart = memo(({ analytics }) => {
  const conversionData = analytics.map((data) => data.conversions).sort();

  const daysOfTheWeek = ["S", "M", "T", "W", "T", "F", "S"];
  const fullDayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  //matching the data with days
  const chartData = daysOfTheWeek.map((day, idx) => {
    //matching the analytics data's day index with day index
    const dateMatch = analytics.find((item) => dayFormat(item.date) === idx);
    //get the date
    const date = dateMatch ? dateMatch.date : "No Data";
    return {
      dayLabel: day,
      fullDay: fullDayNames[idx],
      date: date,
      value: dateMatch ? dateMatch.conversions : 0,
      displayValue: dateMatch ? dateMatch.conversions : 25,
      isEmpty: !dateMatch, //for empty bars
    };
  });

  //getting the max-min value
  const maxValue = conversionData[conversionData.length - 1];
  const minValue = conversionData[0];

  return (
    <div className="md:w-full w-[90%] h-40">
      <ResponsiveContainer width="100%" height={160}>
        <BarChart
          data={chartData}
          margin={{ top: 10, right: 0, left: 10, bottom: 0 }}
          barGap={1}
        >
          {/* Stripe Pattern */}
          <StripedBg />

          <XAxis
            dataKey="dayLabel"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9CA3AF", fontSize: 12, fontWeight: 600 }}
            dy={10}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            hide={true}
            domain={[0, "dataMax"]}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "#f9fafb", radius: 10 }}
          />

          <Bar
            dataKey="displayValue"
            name="Projects"
            barSize={45}
            radius={[25, 25, 25, 25]}
            shape={<CustomBar maxValue={maxValue} minValue={minValue} />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
});

export default AnalyticsBarChart;
