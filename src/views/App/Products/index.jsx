import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Importing Components

const ProductsEntry = React.lazy(() => import("./productsEntry"));
const ProductsToBuy = React.lazy(() => import("./productsToBuy"));
const ProductsHistory = React.lazy(() => import("./returnHistory"));
const Stocks = React.lazy(() => import("./stocks"));
const Error = React.lazy(() => import("../../error"));

const Products = () => {
  return (
    <div>
      <Suspense fallback={<div className="loading"></div>}>
        <Routes>
          <Route path="/products-entry" element={<ProductsEntry />} />
          <Route path="/products-to-buy" element={<ProductsToBuy />} />
          <Route path="/products-history" element={<ProductsHistory />} />
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/*/error" element={<Error />} />
          <Route
            path="/"
            element={<Navigate to={"products-entry"} replace />}
          />
          <Route path="*" element={<Navigate to={"/*/error"} />} replace />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Products;
