import React, { memo } from "react";
import { motion } from "framer-motion";
import { Video } from "lucide-react";
import Button from "../button/Button";
import SectionHeader from "../headers/SectionHeader";

const Reminders = memo(({ setIsMeetingOpen }) => {
  return (
    <motion.div
      className="box-style space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      {/* Title Area */}

      <SectionHeader className="pt-1">Reminders</SectionHeader>

      {/* Meeting Information */}
      <div className="space-y-1">
        <h4 className="text-xl font-semibold text-[#0D442A] leading-tight">
          Meeting with Arc Company
        </h4>
        <p className="text-sm text-gray-400 tracking-tight">
          Time : 02.00 pm - 04.00 pm
        </p>
      </div>

      {/* Start Meeting Button */}
      <div className="mt-2">
        <Button
          text="Start Meeting"
          variant="primary"
          icon={Video}
          className="w-full"
          onClick={() => setIsMeetingOpen(true)}
        />
      </div>
    </motion.div>
  );
});

export default Reminders;
