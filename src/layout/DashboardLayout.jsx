import Navbar from "../components/navigation & menus/Navbar";
import { Outlet } from "react-router";
import Sidebar from "../components/navigation & menus/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open min-h-screen">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col bg-white">
        {/* Navbar  */}
        <div className="mx-4 mt-2">
          <Navbar />
        </div>
        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 bg-[#FAFBFC] mx-4 mt-4 rounded-2xl">
          <Outlet />
        </main>
      </div>
      {/* Sidebar */}
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <Sidebar />
      </div>
    </div>
  );
};

export default DashboardLayout;
