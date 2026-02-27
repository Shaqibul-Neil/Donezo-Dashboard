import React from "react";
import { NavLink } from "react-router";

const SidebarLinks = ({ to, label, icon, badge, onClick }) => {
  // Common style class
  const commonStyles =
    "flex items-center justify-between w-full px-4 py-2 rounded-2xl cursor-pointer transition-all duration-400 group relative text-[#868988] hover:bg-gray-50 hover:text-[#006442]";

  if (onClick) {
    return (
      <button onClick={onClick} className={commonStyles}>
        <div className="flex items-center gap-4">
          <span className="text-[#BCC1C8] group-hover:text-[#006442]">
            {icon}
          </span>
          <span className="text-base font-semibold">{label}</span>
        </div>
      </button>
    );
  }
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `${commonStyles} ${isActive ? "text-gray-800 bg-gray-50" : ""}`
      }
    >
      {({ isActive }) => (
        <>
          <div className="flex items-center gap-4">
            {/* Icon Color Logic */}
            <span
              className={`${isActive ? "text-[#006442]" : "text-[#BCC1C8] group-hover:text-[#006442]"}`}
            >
              {icon}
            </span>
            {/* Label */}
            <span className="text-base">{label}</span>
          </div>

          {/* Badge (Optional) */}
          {badge && (
            <span className="bg-[#006442] text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
              {badge}
            </span>
          )}

          {/* Active Indicator Bar */}
          {isActive && (
            <div className="absolute -left-4 w-2.5 h-8 bg-[#006442] rounded-r-full" />
          )}
        </>
      )}
    </NavLink>
  );
};

export default SidebarLinks;
