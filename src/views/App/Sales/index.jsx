import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//Importing Components

const SalesEntry = React.lazy(() => import("./salesEntry"));
const SalesHistory = React.lazy(() => import("./salesHistory"));
const SalesReturn = React.lazy(() => import("./salesReturn"));
const Error = React.lazy(() => import("../../error"));

const Sales = () => {
  return (
    <div>
      <Suspense fallback={<div className="loading"></div>}>
        <Routes>
          <Route path="/sales-entry" element={<SalesEntry />} />
          <Route path="/sales-history" element={<SalesHistory />} />
          <Route path="/sales-return" element={<SalesReturn />} />
          <Route path="/*/error" element={<Error />} />
          <Route path="/" element={<Navigate to={"sales-entry"} replace />} />
          <Route path="*" element={<Navigate to={"/*/error"} />} replace />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Sales;
