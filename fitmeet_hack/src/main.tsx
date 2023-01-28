import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/Dashboard";
import FeedMatches from "./components/dashboard/FeedMatches";
import FeedTrainers from "./components/dashboard/FeetTrainers";
import FeedNewest from "./components/dashboard/FeedNewest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    children: [
      {
        path: "/dashboard/matches",
        element: <FeedMatches />,
      },
      {
        path: "/dashboard/trainers",
        element: <FeedTrainers />,
      },
      {
        path: "/dashboard/newest",
        element: <FeedNewest />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
