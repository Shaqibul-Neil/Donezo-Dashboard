import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import DashboardLayout from "../layout/DashboardLayout";
import NotFound from "../components/miscellaneous/NotFound";
import AuthLayout from "../layout/AuthLayout";
import Unauthorized from "../components/miscellaneous/Unauthorized";
import PrivateRoute from "./PrivateRoute";
import Loading from "../components/miscellaneous/Loading";

// Lazy loading components
const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const Analytics = lazy(() => import("../pages/dashboard/Analytics"));
const Products = lazy(() => import("../pages/dashboard/Products"));
const Users = lazy(() => import("../pages/dashboard/Users"));
const Settings = lazy(() => import("../pages/dashboard/Settings"));
const Help = lazy(() => import("../pages/dashboard/Help"));
const Calender = lazy(() => import("../pages/dashboard/Calender"));
const Login = lazy(() => import("../pages/auth/Login"));

const router = createBrowserRouter([
  //authentication route
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        ),
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
    // errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "analytics",
        element: (
          <Suspense fallback={<Loading />}>
            <Analytics />
          </Suspense>
        ),
      },
      {
        path: "calender",
        element: (
          <Suspense fallback={<Loading />}>
            <Calender />
          </Suspense>
        ),
      },
      {
        path: "products",
        element: (
          <Suspense fallback={<Loading />}>
            <Products />
          </Suspense>
        ),
      },
      {
        path: "users",
        element: (
          <Suspense fallback={<Loading />}>
            <Users />
          </Suspense>
        ),
      },
      {
        path: "settings",
        element: (
          <Suspense fallback={<Loading />}>
            <Settings />
          </Suspense>
        ),
      },
      {
        path: "help",
        element: (
          <Suspense fallback={<Loading />}>
            <Help />
          </Suspense>
        ),
      },
    ],
  },

  // Unauthorized Route
  {
    path: "/unauthorized",
    element: <Unauthorized />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
