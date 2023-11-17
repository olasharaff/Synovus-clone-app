import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hook/useAuthStatus";
import Spinner from "../Spinner/Spinner";

export default function PrivateRoute() {
  const { loggedIn, checkingStatus } = useAuthStatus();
  if (checkingStatus) {
    return <Spinner />;
  }
  return loggedIn ? <Outlet /> : <Navigate to="/register" />;
}
