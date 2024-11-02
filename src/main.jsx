import * as React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./componants/Layout/Layout";
import Error from "./componants/ErrorPage/Error";
import Home from "./componants/Home/Home";
import FeaturedJobs from "./componants/FeaturedJobs/FeaturedJobs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch(`/categories.json`),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
