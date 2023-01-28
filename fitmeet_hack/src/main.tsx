import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import OnboardingPage from "./pages/OnboardingPage";
import FeedMatches from "./components/dashboard/FeedMatches";
import FeedTrainers from "./components/dashboard/FeedTrainers";
import FeedNewest from "./components/dashboard/FeedNewest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/matches",
        element: <FeedMatches />,
      },
      {
        path: "/trainers",
        element: <FeedTrainers />,
      },
      {
        path: "/newest",
        element: <FeedNewest />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/onboarding",
    element: <OnboardingPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
