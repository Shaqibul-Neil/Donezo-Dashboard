import React from "react";
import SectionHeader from "../headers/SectionHeader";
import AnalyticsBarChart from "../chart/AnalyticsBarChart";

const AnalyticsSection = ({ analytics }) => {
  return (
    <div className="box-style space-y-4">
      {/* Title Area */}
      <SectionHeader className="pt-1">Project Analytics</SectionHeader>
      {/* Chart Area */}
      <AnalyticsBarChart analytics={analytics} />
    </div>
  );
};

export default AnalyticsSection;
