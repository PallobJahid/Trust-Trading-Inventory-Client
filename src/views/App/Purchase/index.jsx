import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Importing Components

const PurchaseEntry = React.lazy(() => import("./purchaseEntry"));
const PurchaseHistory = React.lazy(() => import("./purchaseHistory"));
const PurchaseReturn = React.lazy(() => import("./purchaseReturn"));
const Error = React.lazy(() => import("../../error"));

const Purchase = () => {
  return (
    <div>
      <Suspense fallback={<div className="loading"></div>}>
        <Routes>
          <Route path="/purchase-entry" element={<PurchaseEntry />} />
          <Route path="/purchase-history" element={<PurchaseHistory />} />
          <Route path="/purchase-return" element={<PurchaseReturn />} />
          <Route path="/*/error" element={<Error />} />
          <Route
            path="/"
            element={<Navigate to={"purchase-entry"} replace />}
          />
          <Route path="*" element={<Navigate to={"/*/error"} />} replace />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Purchase;
