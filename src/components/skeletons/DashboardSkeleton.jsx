import React from "react";

const DashboardSkeleton = () => {
  const Card = ({ className, h }) => (
    <div
      className={`bg-white p-6 rounded-2xl border border-gray-50 flex flex-col gap-4 animate-pulse ${className}`}
      style={{ height: h }}
    >
      <div className="h-5 w-32 bg-gray-100 rounded-lg"></div>
      <div className="flex-1 w-full bg-gray-50/50 rounded-xl"></div>
    </div>
  );

  return (
    <div className="space-y-4 max-w-full overflow-hidden">
      {/* Page Header Area */}
      <div className="p-4 space-y-3">
        <div className="h-9 w-48 bg-gray-100 rounded-lg animate-pulse"></div>
        <div className="h-4 w-80 bg-gray-50 rounded-lg animate-pulse"></div>
      </div>

      {/* 4 Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-30 bg-white rounded-2xl border border-gray-50 p-6 animate-pulse"
          >
            <div className="h-4 w-20 bg-gray-100 rounded mb-4"></div>
            <div className="h-8 w-16 bg-gray-50 rounded"></div>
          </div>
        ))}
      </div>

      {/* Main Grid Section */}
      <div className="grid xl:grid-cols-4 gap-4">
        <div className="xl:col-span-3 space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="md:col-span-2" h="260px" /> {/* Analytics */}
            <Card h="260px" /> {/* Reminders */}
          </div>
          <div className="flex gap-4 flex-col md:flex-row">
            <Card className="md:w-1/2" h="300px" /> {/* Products */}
            <Card className="md:w-1/2" h="300px" /> {/* Progress */}
          </div>
        </div>
        <div className="space-y-4 flex xl:flex-col flex-col md:flex-row md:gap-4 xl:gap-0">
          <Card className="md:w-1/2 xl:w-full" h="380px" /> {/* User Section */}
          <div className="md:w-1/2 xl:w-full h-55 bg-[#002B1B]/5 rounded-2xl animate-pulse"></div>{" "}
          {/* Tracker */}
        </div>
      </div>
    </div>
  );
};

export default DashboardSkeleton;
