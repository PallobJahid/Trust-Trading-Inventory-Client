import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const User = React.lazy(() => import("./user"));
const Register = React.lazy(() => import("./register"));
const AdminLogin = React.lazy(() => import("./adminLogin"));
const EmplyeeLogin = React.lazy(() => import("./employeeLogin"));
const Error = React.lazy(() => import("../error"));

const Auth = () => {
  return (
    <div>
      <Suspense fallback={<div className="loading"></div>}>
        <Routes>
          <Route path="/user" element={<User />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/employee-login" element={<EmplyeeLogin />} />
          <Route path="/*/error" element={<Error />} />
          <Route path="/" element={<Navigate to={"user"} />} replace />
          <Route path="*" element={<Navigate to={"/*/error"} />} replace />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Auth;
