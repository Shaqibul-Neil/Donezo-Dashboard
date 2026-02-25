import { HelpCircle, Mail, MessageSquare, Settings, User } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar w-full bg-card border-b border-border px-4 h-16 rounded-2xl">
      <div className="flex-1 flex items-center justify-between">
        {/* Left side - Hamburger (sm/md) + Navigation Links (lg only) */}
        <div className="flex items-center gap-2">
          {/* Hamburger button - visible only on sm/md screens */}
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="inline-block size-5"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
          <div>
            <input type="search" name="" id="" />
          </div>
        </div>

        {/* Right side - Action Icons + User Dropdown */}
        <div className="flex items-center gap-2">
          {/* Action Icons */}
          <div className="flex items-center gap-3">
            {/* Mail Icon */}
            <button className="cursor-pointer hover:-translate-y-0.5 hover:scale-105 duration-500 transition-all">
              <Mail className="size-5" />
            </button>
            {/* Bell Icon */}
            <button className="cursor-pointer hover:-translate-y-0.5 hover:scale-105 duration-500 transition-all">
              <Bell className="size-5" />
            </button>
          </div>

          {/* User Dropdown */}
          <div>
            <div className="w-9 border-2 border-gray-300 rounded-full">
              <img
                alt="User Avatar"
                referrerPolicy="no-referrer"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
            <div>
              <h4>User Name</h4>
              <p>User Email</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
