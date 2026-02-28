import React, { memo } from "react";
import { motion } from "framer-motion";
import SectionHeader from "../headers/SectionHeader";
import AnalyticsBarChart from "../chart/AnalyticsBarChart";

const AnalyticsSection = memo(({ analytics = [] }) => {
  return (
    <motion.div
      className="box-style space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.5 }}
    >
      {/* Title Area */}
      <SectionHeader className="pt-1">Project Analytics</SectionHeader>
      {/* Chart Area */}
      <AnalyticsBarChart analytics={analytics} />
    </motion.div>
  );
});

export default AnalyticsSection;
