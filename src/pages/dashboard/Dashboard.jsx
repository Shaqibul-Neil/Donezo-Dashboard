import React from "react";
import { AnimatePresence, easeOut, motion } from "framer-motion";
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
import TimeTracker from "../../components/dashboard/TimeTracker";

const Dashboard = () => {
  const { dashboard, oLoading, oError } = useDashboard();

  if (oError) return <Error />;
  const overview = dashboard?.overview || {};
  const analytics = dashboard?.analytics || [];
  const users = dashboard?.users || [];
  const products = dashboard?.products || [];

  return (
    <AnimatePresence mode="popLayout">
      {oLoading ? (
        <motion.div
          key="skeleton"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Loading />
        </motion.div>
      ) : (
        <motion.div
          key="dashboard"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="will-change-transform"
          >
            <PageHeader
              title="Dashboard"
              subTitle="Plan, prioritize, and accomplish your tasks with ease."
            />
          </motion.div>

          {/* Stat Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="will-change-transform"
          >
            <OverviewCards overview={overview} />
          </motion.div>

          {/* Grid */}
          <div className=" grid xl:grid-cols-4 gap-4 min-w-0">
            <div className="xl:col-span-3 space-y-4">
              {/* Analytics and Reminder */}
              <div className="grid md:grid-cols-3 gap-4">
                {/* analytics */}
                <div className="md:col-span-2 w-full">
                  <AnalyticsSection analytics={analytics} />
                </div>
                {/* reminder */}
                <div className="col-span-1">
                  <Reminders />
                </div>
              </div>

              {/* User and Progress */}
              <div className="flex gap-4 flex-col md:flex-row">
                {/* products */}
                <div className="md:w-1/2">
                  <ProductSection products={products} />
                </div>
                {/* progress */}
                <div className="md:w-1/2">
                  <ProgressSection analytics={analytics} />
                </div>
              </div>
            </div>

            {/* Project and Time tracker */}
            <div className="space-y-4 flex xl:flex-col flex-col  md:flex-row md:gap-4 xl:gap-0 items-start">
              {/* user */}
              <div className="md:w-1/2 xl:w-full w-full">
                <UserSection users={users} />
              </div>
              <div className="md:w-1/2 xl:w-full w-full">
                <TimeTracker />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Dashboard;
