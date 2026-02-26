import React from "react";
import { cn } from "../../lib/utils";

const ListHeader = ({ children, className }) => {
  return (
    <h3
      className={cn(
        "text-gray-800 leading-tight mb-0.5 truncate group-hover:text-[#002B1B] transition-colors",
        className,
      )}
    >
      {children}
    </h3>
  );
};

export default ListHeader;
