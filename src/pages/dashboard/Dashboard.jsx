import React from "react";
import PageHeader from "../../components/headers/PageHeader";
import { useDashboard } from "../../hooks/dashboard/useDashboard";
import Loading from "../../components/miscellaneous/Loading";
import Error from "../../components/miscellaneous/Error";
import OverviewCards from "../../components/card/OverviewCards";
import Reminders from "../../components/dashboard/Reminders";
import AnalyticsSection from "../../components/dashboard/AnalyticsSection";
import ProductSection from "../../components/dashboard/ProductSection";
import UserSection from "../../components/dashboard/UserSection";
import ProgressSection from "../../components/dashboard/ProgressSection";

const Dashboard = () => {
  const { dashboard, oLoading, oError } = useDashboard();

  if (oLoading) return <Loading />;
  if (oError) return <Error />;
  const overview = dashboard?.overview || {};
  const analytics = dashboard?.analytics || [];
  const users = dashboard?.users || [];
  const products = dashboard?.products || [];

  return (
    <div className="space-y-4">
      {/* Header */}
      <PageHeader
        title="Dashboard"
        subTitle="Plan, prioritize, and accomplish your tasks with ease."
      />
      {/* Stat Card */}
      <OverviewCards overview={overview} />

      {/* Grid */}
      <div className=" grid lg:grid-cols-4 gap-4 text-black">
        <div className="lg:col-span-3 space-y-4">
          {/* Analytics and Reminder */}
          <div className="grid lg:grid-cols-3 gap-4">
            {/* analytics */}
            <div className="col-span-2">
              <AnalyticsSection analytics={analytics} />
            </div>
            {/* reminder */}
            <div className="col-span-1">
              <Reminders />
            </div>
          </div>
          {/* User  and Progress */}
          <div className="flex gap-4">
            {/* user */}
            <div className="w-1/2">
              <UserSection users={users} />
            </div>
            {/* progress */}
            <div className="w-1/2">
              <ProgressSection />
            </div>
          </div>
        </div>
        {/* Project and Time tracker */}
        <div className="space-y-4">
          <div className="">
            <ProductSection products={products} />
          </div>
          <div className="border">Tracker</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
