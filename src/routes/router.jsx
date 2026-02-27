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
import Calender from "../pages/dashboard/Calender";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  //authentication route
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
  //dashboard
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "calender",
        element: <Calender />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "help",
        element: <Help />,
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
