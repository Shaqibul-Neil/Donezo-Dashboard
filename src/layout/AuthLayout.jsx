import React from "react";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div>
      AuthLayout
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
