import { createBrowserRouter } from "react-router";
import DashboardLayout from "../layout/DashboardLayout";
import NotFound from "../components/miscellaneous/NotFound";
import Dashboard from "../pages/dashboard/Dashboard";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/auth/Login";
import Unauthorized from "../components/miscellaneous/Unauthorized";
import Analytics from "../pages/dashboard/Analytics";
import Products from "../pages/dashboard/Products";
import Users from "../pages/dashboard/Users";
import Settings from "../pages/dashboard/Settings";
import Help from "../pages/dashboard/Help";

const router = createBrowserRouter([
  //dashboard
  {
    path: "/",
    element: <DashboardLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/help",
        element: <Help />,
      },
    ],
  },
  //authentication route
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  // Unauthorized Route
  {
    path: "/unauthorized",
    element: <Unauthorized />,
  },
]);
export default router;
