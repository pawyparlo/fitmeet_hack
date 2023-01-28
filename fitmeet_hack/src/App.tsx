import React, { useState, useEffect } from "react";
import HelloPage from "./pages/HelloPage";
import "./styles/styles.scss";
import { Outlet, useNavigate } from "react-router";
import "./styles/index.css";
import { Col, Row } from "antd";
import MobileProfile from "./components/dashboard/MobileProfile";
import { Link } from "react-router-dom";
import FeedMenu from "./components/dashboard/FeedMenu";
import FeedUserProfile from "./components/dashboard/FeedUserProfile";
import FeedCategories from "./components/dashboard/FeedCategories";
import FeedMap from "./components/dashboard/FeedMap";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import IndexPage from ".";

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <IndexPage />
    </QueryClientProvider>
  );
};

export default App;
