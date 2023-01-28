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

const App: React.FC = () => {
  const [wasUserLogIn, setWasUserLogIn] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("wasLoggedBefore")) {
      navigate("/login");
    }
  }, []);

  console.log(wasUserLogIn);

  if (!wasUserLogIn) {
    return (
      <div>
        <HelloPage />
      </div>
    );
  }

  return (
    <div>
      <div className="max-w-[1600px] mx-4">
        <div className="relative min-h-screen">
          <Row className="py-4 flex items-center">
            <Col xs={4} lg={6}>
              <div className=" flex justify-center items-center bg-primaryBlack w-[32px] h-[32px] rounded-full">
                FT
              </div>
            </Col>
            <Col xs={0} lg={12}>
              <div className="hidden lg:flex justify-center items-center">
                <FeedMenu />
              </div>
            </Col>
            <Col
              xs={20}
              lg={6}
              style={{ display: "flex", justifyContent: "right" }}
            >
              <MobileProfile userName="Evgen Ledo" />
            </Col>
          </Row>
          <Row>
            <Col xs={0} lg={6}>
              <div>
                <FeedUserProfile user={{ name: "Evgen Ledo" }} />
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className="mt-4 lg:mt-0 bg-backgroundBlack w-full p-4 border-t-[0.5px] border-b-[0.5px] border-solid border-0 border-primaryBlack">
                <div className="flex items-center justify-center">
                  <Link
                    to={"/matches"}
                    className="text-white border-r-[0.2px] border-0 border-gray-700 px-4 border-solid"
                  >
                    Matches For You
                  </Link>
                  <Link
                    to={"/trainers"}
                    className="text-white border-r-[0.2px] border-0 border-gray-700 px-4 border-solid"
                  >
                    Newest Trainers
                  </Link>
                  <Link
                    to={"/newest"}
                    className="text-white border-r-[0.2px] border-0 border-gray-700 px-4 border-solid last-of-type:border-r-0"
                  >
                    Newest People
                  </Link>
                </div>
              </div>
              <div className="mt-8">
                <Outlet />
              </div>
            </Col>
            <Col xs={0} lg={6}>
              <div>
                <div></div>
              </div>
            </Col>
          </Row>
          <div className="lg:hidden bg-backgroundBlack fixed bottom-0 w-full p-4 border-t-[0.5px] border-solid border-0 border-primaryBlack">
            <FeedMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
