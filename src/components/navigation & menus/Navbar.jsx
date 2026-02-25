import React from "react";
import { Search, Mail, Bell, Command, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between p-4 bg-[#FAFBFC] border border-gray-100 rounded-2xl">
      {/* Left side - Toggle Button + Search */}
      <div className="flex items-center gap-4 flex-1">
        {/* Hamburger Toggle */}
        <label
          htmlFor="my-drawer-4"
          className="lg:hidden p-2 hover:bg-gray-100 rounded-full cursor-pointer transition-colors"
        >
          <Menu size={22} className="text-gray-600" />
        </label>
        {/* Search Bar */}
        <div className="relative flex items-center w-full max-w-100">
          <Search className="absolute left-5 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search Products"
            className="w-full bg-white border border-gray-100 rounded-2xl py-3.5 pl-14 pr-16 text-[14px] focus:outline-none focus:ring-1 focus:ring-[#006442] shadow-sm text-gray-600 placeholder:text-gray-400"
          />
          <div className="absolute right-4 flex items-center gap-1 bg-gray-50 border border-gray-100 px-2 py-1 rounded-lg text-gray-400 text-[11px] font-bold">
            <Command size={10} />
            <span>F</span>
          </div>
        </div>{" "}
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3">
          <button className="w-11 h-11 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:text-[#006442] transition-colors shadow-sm">
            <Mail size={20} />
          </button>
          <button className="w-11 h-11 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:text-[#006442] transition-colors shadow-sm relative">
            <Bell size={20} />
            <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></div>
          </button>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3 border-l border-gray-100">
          <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-md">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
              alt="User"
              className="w-full h-full object-cover bg-[#FFE4D6]"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[15px] font-bold text-[#1A1C1E]">
              Totok Michael
            </span>
            <span className="text-[12px] text-gray-400 font-medium tracking-tight overflow-hidden text-ellipsis whitespace-nowrap max-w-37.5">
              tmichael20@gmail.com
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
