import React from "react";
import { Video } from "lucide-react";
import Button from "../button/Button";
import SectionHeader from "../headers/SectionHeader";

const Reminders = () => {
  return (
    <div className="box-style">
      {/* Title Area */}
      <div className="space-y-4">
        <SectionHeader>Reminders</SectionHeader>

        {/* Meeting Information */}
        <div className="space-y-1">
          <h4 className="text-xl font-semibold text-[#0D442A] leading-tight">
            Meeting with Arc Company
          </h4>
          <p className="text-sm text-gray-400 tracking-tight">
            Time : 02.00 pm - 04.00 pm
          </p>
        </div>
      </div>

      {/* Start Meeting Button */}
      <div className="mt-6">
        <Button
          text="Start Meeting"
          variant="primary"
          icon={Video}
          className="w-full"
          onClick={() => console.log("Meeting Started")}
        />
      </div>
    </div>
  );
};

export default Reminders;
