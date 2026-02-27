import React from "react";

const PageHeader = ({ title, subTitle, children }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      {/* Text Section */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight leading-tight mb-1">
          {title || "Dashboard"}
        </h1>
        <p className="text-[15px] text-gray-400 font-medium">
          {subTitle || "Plan, prioritize, and accomplish your tasks with ease."}
        </p>
      </div>

      {/* Button Actions */}
      <div className="flex items-center gap-3">{children}</div>
    </div>
  );
};

export default PageHeader;
