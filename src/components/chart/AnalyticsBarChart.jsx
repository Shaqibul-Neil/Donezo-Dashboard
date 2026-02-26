import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { dayFormat } from "../../lib/utils";
import { CustomTooltip } from "./CustomToolTip";

const AnalyticsBarChart = ({ analytics }) => {
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

  //getting the max value
  const maxValue = Math.max(...chartData.map((data) => data.value));

  return (
    <div className="w-full h-40">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
          barGap={1}
        >
          {/* Stripe Pattern */}
          <defs>
            <pattern
              id="barStripes"
              patternUnits="userSpaceOnUse"
              width="8"
              height="8"
              patternTransform="rotate(45)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="8"
                stroke="#002B1B"
                strokeWidth="2"
              />
            </pattern>
          </defs>

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
          >
            {chartData.map((entry, index) => {
              let fill;
              if (entry.isEmpty) {
                fill = "url(#barStripes)";
              } else if (entry.value === maxValue && maxValue > 0) {
                fill = "#002B1B";
              } else {
                fill = "#74C29B";
              }
              return (
                <Cell
                  key={`cell-${index}`}
                  fill={fill}
                  stroke={entry.isEmpty ? "#F3F4F6" : "none"}
                />
              );
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsBarChart;
