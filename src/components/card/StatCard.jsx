import React from "react";
import { ArrowUpRight, ChevronUp } from "lucide-react";

const StatCard = ({ title, value, isPrimary = false }) => {
  return (
    <div
      className={`relative p-6 rounded-2xl flex flex-col justify-between transform transition-all group cursor-pointer shadow-sm border border-gray-100 duration-700 hover:scale-101 hover:-translate-y-3 ${
        isPrimary
          ? "bg-linear-to-br from-[#97C05C] via-[#006442] to-[#023523] text-white shadow-lg shadow-emerald-900/10"
          : "bg-white text-gray-800"
      }`}
    >
      {isPrimary && (
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          {/* Main Gradient */}
          <div className="absolute inset-0 bg-linear-to-br from-[#023523] via-[#006442] to-[#005236]" />

          {/* Left side Yellowish Glow */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#A2D149] blur-[50px] opacity-40 rounded-full" />

          {/* Right Side Glow */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#008F5D] blur-2xl opacity-30 rounded-full" />
        </div>
      )}
      <div className="relative z-10 flex flex-col h-full justify-between">
        {/* Top Section: Title & Icon */}
        <div className="flex justify-between items-start">
          <h3
            className={`text-xl font-bold leading-none tracking-tighter ${isPrimary ? "text-white/90" : "text-gray-800"}`}
          >
            {title}
          </h3>
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center border 
            border-gray-100 bg-white shadow-sm transition-transform group-hover:rotate-360 duration-1000 pointer-events-none"
          >
            <ArrowUpRight size={20} className="text-gray-600" />
          </div>
        </div>
        {/* Middle Section: Value */}
        <div className="mt-auto">
          <h2 className="text-[44px] font-bold leading-none mb-3">
            {value.toLocaleString()}
          </h2>

          {/* Bottom Section: Comparison Label */}
          <div className="flex items-center gap-2">
            <div
              className={`border ${isPrimary ? "border-[#A2D149]" : "border-[#6C997F]"} w-6 h-4 rounded-md flex items-center justify-center ${isPrimary ? "text-[#A2D149]" : "text-[#6C997F]"}`}
            >
              <span className="text-[10px]">5</span> <ChevronUp size={10} />
            </div>

            <p
              className={`text-[11px] font-medium tracking-wide ${isPrimary ? "text-[#A2D149]" : "text-[#6C997F]"}`}
            >
              Increased from last month
            </p>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default StatCard;
