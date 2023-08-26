import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Profile = React.lazy(() => import("./profile"));
const Settings = React.lazy(() => import("./settings"));
const Logout = React.lazy(() => import("./logout"));

const UserProfiles = () => {
  return (
    <div>
      <Suspense fallback={<div className="loading"></div>}>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/*/error" element={<Error />} />
          <Route path="/" element={<Navigate to={"profile"} />} replace />
          <Route path="*" element={<Navigate to={"/*/error"} />} replace />
        </Routes>
      </Suspense>
    </div>
  );
};

export default UserProfiles;
