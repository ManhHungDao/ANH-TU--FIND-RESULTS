import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("../layouts/App"));
// const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("../layouts/NotFound"));

const withLoader = (el) => (
  <Suspense fallback={<div>Đang tải…</div>}>{el}</Suspense>
);

export const router = createBrowserRouter([
  { path: "/", element: withLoader(<Home />) },
  { path: "*", element: withLoader(<NotFound />) },
]);
