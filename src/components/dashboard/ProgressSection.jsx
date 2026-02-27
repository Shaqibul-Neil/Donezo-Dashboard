import React from "react";
import { easeOut, motion } from "framer-motion";
import SectionHeader from "../headers/SectionHeader";
import { sumOfItems } from "../../lib/utils";
import ConversionPieChart from "../chart/ConversionPieChart";

const ProgressSection = ({ analytics }) => {
  const totalViews = sumOfItems(analytics, "views");
  const totalClicks = sumOfItems(analytics, "clicks");

  //calculating the conversion rate
  //thinking conversion as percentage so need to find every day conversion based on total views : (1234*23) /100
  const totalConversions = analytics?.reduce((accu, curr) => {
    //converting the percent into values
    const actualValue = (curr.views * curr.conversions) / 100;
    //console.log("actualValue", actualValue);
    return Math.round(accu + actualValue);
  }, 0);

  const conversionRate = Math.round(
    sumOfItems(analytics, "conversions") / (analytics?.length || 1),
  );
  //console.log({ conversionRate });

  //data manipulation
  const data = [
    { name: "Total Views", value: totalViews, fill: "url(#chartStripes)" },
    { name: "Total Clicks", value: totalClicks, fill: "#74C29B" },
    { name: "Total Conversions", value: totalConversions, fill: "#002B1B" },
  ];

  return (
    <motion.div
      className="box-style"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      {/* Title Area */}
      <SectionHeader className="pt-1">Product Progress</SectionHeader>
      {/* User chart */}
      <ConversionPieChart data={data} conversionRate={conversionRate} />
      {/* Details */}
      <div className="w-full flex items-center gap-3 md:gap-8 px-2 justify-center">
        <div className="flex gap-1 items-center">
          <div className="w-4 h-4 rounded-full bg-[#002B1B]"></div>
          <p className="text-sm text-[#002B1B]">Conversion</p>
        </div>
        <div className="flex gap-1 items-center">
          <div className="w-4 h-4 rounded-full bg-[#227D53]"></div>
          <p className="text-sm text-[#227D53]">Clicks</p>
        </div>
        <div className="flex gap-1 items-center">
          <div className="w-4 h-4 rounded-full chart-striped-bg"></div>
          <p className="text-sm text-[#002B1B]">Views</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProgressSection;
