import React from "react";
import PageHeader from "../../components/headers/PageHeader";
import { useDashboard } from "../../hooks/dashboard/useDashboard";
import Loading from "../../components/miscellaneous/Loading";
import Error from "../../components/miscellaneous/Error";
import OverviewCards from "../../components/card/OverviewCards";

const Dashboard = () => {
  const { dashboard, oLoading, oError } = useDashboard();
  console.log(dashboard);
  if (oLoading) return <Loading />;
  if (oError) return <Error />;
  const overview = dashboard?.overview || {};
  const analytics = dashboard?.analytics || {};
  const users = dashboard?.users || {};
  const products = dashboard?.products || {};

  return (
    <div>
      {/* Header */}
      <PageHeader
        title="Dashboard"
        subTitle="Plan, prioritize, and accomplish your tasks with ease."
      />
      {/* Stat Card */}
      <OverviewCards overview={overview} />
    </div>
  );
};

export default Dashboard;
