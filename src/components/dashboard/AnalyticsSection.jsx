import React from "react";
import SectionHeader from "../headers/SectionHeader";
import AnalyticsBarChart from "../chart/AnalyticsBarChart";

const AnalyticsSection = ({ analytics }) => {
  return (
    <div className="box-style">
      {/* Title Area */}
      <div className="space-y-4">
        <SectionHeader>Project Analytics</SectionHeader>
        <AnalyticsBarChart analytics={analytics} />
      </div>
    </div>
  );
};

export default AnalyticsSection;
