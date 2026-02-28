import React, { lazy, Suspense, useCallback, useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
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
import Button from "../../components/button/Button";
import SidePanel from "../../components/dashboard/SidePanel";

// Component Level Lazy Loading (For Optimization)
const AddProductsForm = lazy(
  () => import("../../components/forms/AddProductsForm"),
);
const MeetingForm = lazy(() => import("../../components/forms/MeetingForm"));

const Dashboard = () => {
  const [panel, setPanel] = useState({
    isOpen: false,
    title: "",
    content: null,
  });
  const [isMeetingOpen, setIsMeetingOpen] = useState(false);

  const { overview, analytics, users, products, oLoading, oError } =
    useDashboard();
  //open close panel
  const openPanel = useCallback((title, content) => {
    setPanel({ isOpen: true, title, content });
  }, []);

  const closePanel = useCallback(() => {
    setPanel((prev) => ({ ...prev, isOpen: false }));
  }, []);

  if (oError) return <Error />;

  return (
    <>
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
              >
                <Button
                  variant="primary"
                  text="Add Product"
                  icon={Plus}
                  onClick={() =>
                    openPanel(
                      "Add New Product",
                      <Suspense
                        fallback={<div className="p-4">Loading Form...</div>}
                      >
                        <AddProductsForm onClose={closePanel} />
                      </Suspense>,
                    )
                  }
                />
                <Button
                  variant="secondary"
                  text="Import Data"
                  onClick={() => console.log("Import Data clicked")}
                />
              </PageHeader>
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
                    <Reminders setIsMeetingOpen={setIsMeetingOpen} />
                  </div>
                </div>

                {/* User and Progress */}
                <div className="flex gap-4 flex-col md:flex-row">
                  {/* products */}
                  <div className="md:w-1/2">
                    <ProductSection
                      products={products}
                      openPanel={openPanel}
                      closePanel={closePanel}
                    />
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
                  <UserSection
                    openPanel={openPanel}
                    closePanel={closePanel}
                    users={users}
                  />
                </div>
                <div className="md:w-1/2 xl:w-full w-full">
                  <TimeTracker />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Modal for meeting */}
      <Suspense fallback={null}>
        <MeetingForm
          isOpen={isMeetingOpen}
          onClose={() => setIsMeetingOpen(false)}
        />
        {/* Side Panel for form data*/}
        <SidePanel
          isOpen={panel.isOpen}
          onClose={closePanel}
          title={panel.title}
        >
          {panel.content}
        </SidePanel>
      </Suspense>
    </>
  );
};

export default Dashboard;
