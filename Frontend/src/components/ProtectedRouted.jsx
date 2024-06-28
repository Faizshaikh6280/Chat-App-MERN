import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import toast from "react-hot-toast";

function ProtectedRouted({ children, isAuthenticated, redirectTo }) {
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} />;
  }
  return children || <Outlet />;
}

export default ProtectedRouted;
