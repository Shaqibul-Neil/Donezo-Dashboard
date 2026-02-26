import React from "react";
import {
  LayoutGrid,
  ClipboardCheck,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  Bot,
} from "lucide-react";
import SidebarLinks from "./SidebarLinks";

const Sidebar = () => {
  const menuItems = [
    { icon: <LayoutGrid size={20} />, label: "Dashboard", path: "/" },
    {
      icon: <Users size={20} />,
      label: "Users",
      path: "/users",
    },
    {
      icon: <Bot size={20} />,
      label: "Products",
      path: "/products",
    },
    {
      icon: <ClipboardCheck size={20} />,
      label: "Analytics",
      path: "/analytics",
    },
  ];

  const generalItems = [
    { icon: <Settings size={20} />, label: "Settings", path: "/settings" },
    { icon: <HelpCircle size={20} />, label: "Help", path: "/help" },
    { icon: <LogOut size={20} />, label: "Logout", path: "/logout" },
  ];

  return (
    <aside className="w-64 bg-[#FAFBFC] h-full flex flex-col border-r border-gray-100 py-4 relative">
      {/* Logo Section */}
      <div className="flex items-center gap-3 mb-10 px-8">
        <div className="w-10 h-10 bg-[#E8F5E9] rounded-full flex items-center justify-center">
          <div className="w-6 h-6 border-[3px] border-[#006442] rounded-full flex items-center justify-center relative">
            <div className="w-2.5 h-2.5 bg-[#006442] rounded-full"></div>
            <div className="absolute top-0.5 right-1 w-1.5 h-1.5 bg-white rounded-xl"></div>
          </div>
        </div>
        <span className="text-2xl font-bold text-gray-800 tracking-tight">
          Donezo
        </span>
      </div>

      {/* Main Menu Section */}
      <div className="mb-4">
        <p className="text-[11px] font-extrabold text-[#BCC1C8] tracking-[1.5px] mb-3 px-8 uppercase">
          Menu
        </p>
        <nav className="space-y-0.5 px-4">
          {menuItems.map((item, index) => (
            <SidebarLinks
              key={index}
              to={item.path}
              label={item.label}
              icon={item.icon}
              badge={item.badge}
            />
          ))}
        </nav>
      </div>

      {/* General Options Section */}
      <div className="mb-4">
        <p className="text-[11px] font-extrabold text-[#BCC1C8] tracking-[1.5px] mb-3 px-8 uppercase">
          General
        </p>
        <nav className="space-y-0.5 px-4">
          {generalItems.map((item, index) => (
            <SidebarLinks
              key={index}
              to={item.path}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </nav>
      </div>

      {/* Download App Card */}
      <div className="mx-6 p-6 bg-[#0A0D0B] rounded-4xl relative overflow-hidden group mt-4">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#1B2B1F] rounded-full blur-3xl -mr-16 -mt-16 opacity-50" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#0D442A] rounded-full blur-2xl -ml-12 -mb-12 opacity-30" />
        <div className="relative z-10 flex flex-col items-start">
          <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mb-4 border border-white/10">
            <Users size={16} className="text-white" />
          </div>
          <h4 className="text-white font-bold text-[17px] mb-1 leading-tight text-pretty">
            Download our Mobile App
          </h4>
          <p className="text-gray-400 text-[12px] mb-6">
            Get easy in another way
          </p>
          <button className="w-full py-3.5 bg-[#006442] hover:bg-[#007A50] text-white rounded-2xl text-[14px] font-bold transition-all duration-300">
            Download
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
