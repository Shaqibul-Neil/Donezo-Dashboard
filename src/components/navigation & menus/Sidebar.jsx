import React from "react";
import {
  LayoutGrid,
  ClipboardCheck,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  Bot,
  Medal,
  Calendar,
} from "lucide-react";
import SidebarLinks from "./SidebarLinks";
import Button from "../button/Button";

const Sidebar = () => {
  const menuItems = [
    { icon: <LayoutGrid size={20} />, label: "Dashboard", path: "/" },
    {
      icon: <ClipboardCheck size={20} />,
      label: "Analytics",
      path: "/analytics",
    },
    {
      icon: <Calendar size={20} />,
      label: "Calender",
      path: "/calender",
    },
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
  ];

  const generalItems = [
    { icon: <Settings size={20} />, label: "Settings", path: "/settings" },
    { icon: <HelpCircle size={20} />, label: "Help", path: "/help" },
    { icon: <LogOut size={20} />, label: "Logout", path: "/logout" },
  ];

  return (
    <aside className="w-64 bg-[#FAFBFC] min-h-screen flex flex-col border-r border-gray-100 py-4 relative rounded-2xl">
      {/* Logo Section */}
      <div className="flex items-center gap-3 mb-8 px-8">
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
      <div className="mx-6 p-6 bg-[#0A0D0B] rounded-2xl relative group">
        <div className="relative z-10 flex flex-col items-start">
          <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mb-4 border border-white/10">
            <Medal size={16} className="text-white" />
          </div>
          <h4 className="text-white font-bold text-[17px] mb-1 leading-tight text-pretty">
            Download our Mobile App
          </h4>
          <p className="text-gray-400 text-[12px] mb-6">
            Get easy in another way
          </p>
          <Button variant="primary" text="Download" className="w-full px-2" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
