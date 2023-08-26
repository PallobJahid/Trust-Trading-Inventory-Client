import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoutes from "./utils/protectedRoute";

const Dashboard = React.lazy(() => import("./views/App/dashboard"));
const Auth = React.lazy(() => import("./views/Authentication"));
const UserProfiles = React.lazy(() => import("./views/UserProfiles"));
const Sales = React.lazy(() => import("./views/App/Sales"));
const Purchase = React.lazy(() => import("./views/App/Purchase"));
const Products = React.lazy(() => import("./views/App/Products"));
const Error = React.lazy(() => import("./views/error"));

const App = () => {
  return (
    <div className="overflow-hidden">
      <Suspense fallback={<div className="Loading"></div>}>
        <Routes>
          <Route path="/auth/*" element={<Auth />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/userprofile/*" element={<UserProfiles />} />
            <Route path="/sales/*" element={<Sales />} />
            <Route path="/purchase/*" element={<Purchase />} />
            <Route path="/products/*" element={<Products />} />
          </Route>
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<Navigate to="/error" replace={true} />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
