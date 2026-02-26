import React from "react";

const StatusBadge = ({ status }) => {
  const styles = {
    active: "bg-green-50 text-[#002B1B] border-green-100",
    inactive: "bg-red-50 text-red-600 border-red-100",
  };
  return (
    <span
      className={`px-2.5 py-0.5 rounded-2xl text-[11px] border capitalize tracking-wider ${styles[status] || styles.inactive}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
