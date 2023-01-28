import React, { useState, useEffect } from "react";
import HelloPage from "./pages/HelloPage";
import { useNavigate } from "react-router";
import "./styles/styles.scss";

const App: React.FC = () => {
  const [wasUserLogIn, setWasUserLogIn] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("wasLoggedBefore")) {
      navigate("/login");
    }
  }, []);

  return <HelloPage />;
};

export default App;
