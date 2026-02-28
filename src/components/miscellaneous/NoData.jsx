import React from "react";
import { motion } from "framer-motion";
import { Database, Search, FileX } from "lucide-react";

const NoData = ({
  message = "No records found",
  subMessage = "We couldn't find any data matching your current view.",
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 w-full">
      {/* Icon Stack: Consistent with WorkInProgress visual style */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mb-6 w-24 h-24"
      >
        {/* Subtle Ring */}
        <div className="absolute inset-0 rounded-full bg-[#FAFBFC] border border-[#008F5D]" />

        {/* Center Base Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Database size={32} className="text-[#008F5D]" strokeWidth={1.5} />
        </div>

        {/* Orbiting Subtle Icon (Slow Rotation like WIP) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 bg-white p-2 rounded-lg shadow-sm border border-slate-50">
            <Search size={12} className="text-[#008F5D]/40" />
          </div>
        </motion.div>

        {/* Static Float Icon */}
        <div className="absolute -bottom-1 right-2 bg-white p-2 rounded-lg shadow-sm border border-slate-50">
          <FileX size={12} className="text-slate-400" />
        </div>
      </motion.div>

      {/* Content Stack: Same spacing rhythm */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center space-y-2"
      >
        <h3 className="text-lg font-black text-gray-800 tracking-tight">
          {message}
        </h3>

        <p className="text-gray-400 font-medium text-[13px] leading-relaxed max-w-60 mx-auto">
          {subMessage}
        </p>
      </motion.div>

      {/* Bottom Decorative Element (Consistent with Donezo branding) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.4 }}
        className="mt-6 flex items-center gap-2"
      >
        <span className="h-px w-4 bg-[#008F5D]" />
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#008F5D]">
          Donezo
        </span>
        <span className="h-px w-4 bg-[#008F5D]" />
      </motion.div>
    </div>
  );
};

export default NoData;
