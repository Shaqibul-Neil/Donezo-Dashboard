import React from "react";
import { easeOut, motion } from "framer-motion";
import StatCard from "./StatCard";

const OverviewCards = ({ overview }) => {
  const { totalUsers, activeUsers, revenue, growth } = overview || {};
  const statsData = [
    {
      title: "Total Users",
      value: totalUsers,
      isPrimary: true,
    },
    {
      title: "Active Users",
      value: activeUsers,
      isPrimary: false,
    },
    {
      title: "Revenue",
      value: revenue,
      isPrimary: false,
    },
    {
      title: "Growth",
      value: `${growth}%`,
      isPrimary: false,
    },
  ];

  //container variants for staggering
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, //time gap
      },
    },
  };
  //item variant for individual card entry
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
  };
  return (
    <motion.div
      variants={containerVariants}
      initial={"hidden"}
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4"
    >
      {statsData.map((stat, idx) => (
        <motion.div key={idx} variants={itemVariants}>
          <StatCard
            title={stat.title}
            value={stat.value}
            isPrimary={stat.isPrimary}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default OverviewCards;
