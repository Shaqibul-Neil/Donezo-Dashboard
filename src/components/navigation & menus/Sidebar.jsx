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
import downloadImg from "../../assets/download.webp";

const Sidebar = () => {
  const menuItems = [
    { icon: <LayoutGrid size={20} />, label: "Dashboard", path: "/dashboard" },
    {
      icon: <ClipboardCheck size={20} />,
      label: "Analytics",
      path: "/dashboard/analytics",
    },
    {
      icon: <Calendar size={20} />,
      label: "Calender",
      path: "/dashboard/calender",
    },
    {
      icon: <Users size={20} />,
      label: "Users",
      path: "/dashboard/users",
    },
    {
      icon: <Bot size={20} />,
      label: "Products",
      path: "/dashboard/products",
    },
  ];

  const generalItems = [
    {
      icon: <Settings size={20} />,
      label: "Settings",
      path: "/dashboard/settings",
    },
    { icon: <HelpCircle size={20} />, label: "Help", path: "/dashboard/help" },
    { icon: <LogOut size={20} />, label: "Logout" },
  ];

  return (
    <aside className="w-64 bg-[#FAFBFC] min-h-screen flex flex-col border-r border-gray-100 py-4 relative xl:rounded-2xl">
      {/* Logo Section */}
      <div className="mb-8 px-8">
        <img src="/src/assets/logo.png" />
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
      <div
        className="mx-6 p-4 relative rounded-2xl group mt-auto"
        style={{
          backgroundImage: `url(${downloadImg})`,
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="relative z-10 flex flex-col items-start">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mb-4 mt-2 border border-white/10">
            <Medal size={16} className="text-[#008F5D]" />
          </div>
          <h4 className="text-white font-bold text-lg mb-1 leading-tight text-pretty">
            Download our Mobile App
          </h4>
          <p className="text-gray-300 text-[12px] mb-6">
            Get easy in another way
          </p>
          <Button variant="primary" text="Download" className="w-full px-2" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
