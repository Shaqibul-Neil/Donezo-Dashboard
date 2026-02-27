import Navbar from "../components/navigation & menus/Navbar";
import { Outlet } from "react-router";
import Sidebar from "../components/navigation & menus/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open min-h-screen bg-white">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col bg-white">
        {/* Navbar  */}
        <div className="md:mx-4 mx-2 mt-2">
          <Navbar />
        </div>
        {/* Page content */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden md:p-4 p-2 bg-[#FAFBFC] md:mx-4 mx-2 mt-4 rounded-2xl max-w-full">
          <Outlet />
        </main>
      </div>
      {/* Sidebar */}
      <div className="drawer-side z-50 xl:my-2 xl:ml-2 xl:rounded-2xl">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay bg-black/20 backdrop-blur-[6px] transition-all duration-300"
        ></label>
        <Sidebar />
      </div>
    </div>
  );
};

export default DashboardLayout;
