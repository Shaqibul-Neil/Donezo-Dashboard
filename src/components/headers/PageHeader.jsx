import React from "react";
import { Plus } from "lucide-react";
import Button from "../button/Button";

const PageHeader = ({ title, subTitle }) => {
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
      <div className="flex items-center gap-3">
        <Button
          variant="primary"
          text="Add Product"
          icon={Plus}
          onClick={() => console.log("Add Project clicked")}
        />
        <Button
          variant="secondary"
          text="Import Data"
          onClick={() => console.log("Import Data clicked")}
        />
      </div>
    </div>
  );
};

export default PageHeader;
