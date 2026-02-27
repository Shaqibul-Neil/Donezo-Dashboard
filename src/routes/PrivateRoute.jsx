import React from "react";
import useAuth from "../hooks/auth/useAuth";
import { Navigate, useLocation } from "react-router";
import Loading from "../components/miscellaneous/Loading";

const PrivateRoute = ({ children }) => {
  const { loading, userToken } = useAuth();
  const location = useLocation();
  if (loading) return <Loading />;
  if (!userToken) {
    return <Navigate to={"/"} state={{ from: location }} replace />;
  }
  //if token available
  return children;
};

export default PrivateRoute;
