import React from "react";
import DashboardSkeleton from "../skeletons/DashboardSkeleton";
import AnalyticsSection from "../dashboard/AnalyticsSection";
import { useLocation } from "react-router";

const Loading = () => {
  const location = useLocation();

  // 1. Dashboard Route Check
  if (location.pathname === "/") {
    return <DashboardSkeleton />;
  }

  // 2. Analytics Route Check
  if (location.pathname === "/analytics") {
    return <AnalyticsSection />;
  }
  // 3. General Global Loader (Login, Settings, or initial boot)
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-white/80 backdrop-blur-md">
      <div className="flex flex-col items-center">
        {/* Modern Logo Spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-[#006442]/10 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-t-[#006442] rounded-full animate-spin"></div>
        </div>
        <span className="mt-4 text-sm font-semibold text-[#006442] tracking-widest uppercase animate-pulse">
          Donezo
        </span>
      </div>
    </div>
  );
};

export default Loading;
