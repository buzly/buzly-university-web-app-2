import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function RequireAuth() {
  const location = useLocation();
  const email = useSelector((state) => state.profile.email);
  console.warn("oiujkla", email)
  console.warn(email === "")

  return email !== "" ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace/>
  );
}

export default RequireAuth;
