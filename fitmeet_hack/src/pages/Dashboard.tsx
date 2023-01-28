import { Row, Col } from "antd";
import {
  HomeOutlined,
  MessageOutlined,
  BellOutlined,
  HeatMapOutlined,
} from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import MobileProfile from "../components/dashboard/MobileProfile";

export type FeedType = "matches" | "trainers" | "newest";

const DashboardPage = () => {
  const [feedType, setFeedType] = useState<FeedType>("matches");

  return (
    <div>
      <div className="relative min-h-screen">
        <Row style={{ padding: "1rem 1rem" }}>
          <Col xs={4}>
            <div className="lg:hidden flex justify-center items-center bg-primaryBlack w-[32px] h-[32px] rounded-full">
              FT
            </div>
          </Col>
          <Col xs={20} style={{ display: "flex", justifyContent: "right" }}>
            <div className="lg:hidden">
              <MobileProfile userName="Evgen Ledo" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={0} lg={6}>
            left
          </Col>
          <Col xs={24} lg={12}>
            <div className="mt-4 bg-backgroundBlack w-full p-4 border-t-[0.5px] border-b-[0.5px] border-solid border-0 border-primaryBlack">
              <div className="flex items-center justify-center">
                <Link
                  to={"/dashboard/matches"}
                  className="text-white border-r-[0.2px] border-0 border-gray-700 px-4 border-solid"
                >
                  Matches For You
                </Link>
                <Link
                  to={"/dashboard/trainers"}
                  className="text-white border-r-[0.2px] border-0 border-gray-700 px-4 border-solid"
                >
                  Newest Trainers
                </Link>
                <Link
                  to={"/dashboard/newest"}
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
            right
          </Col>
        </Row>
        <div className="lg:hidden bg-backgroundBlack fixed bottom-0 w-full p-4 border-t-[0.5px] border-solid border-0 border-primaryBlack">
          <div className="flex items-center justify-center">
            <Link
              to={"/"}
              className="text-white border-r-[0.2px] border-0 border-gray-700 px-4 border-solid"
            >
              <HomeOutlined />
            </Link>
            <Link
              to={"/"}
              className="text-white border-r-[0.2px] border-0 border-gray-700 px-4 border-solid"
            >
              <MessageOutlined />
            </Link>
            <Link
              to={"/"}
              className="text-white border-r-[0.2px] border-0 border-gray-700 px-4 border-solid"
            >
              <BellOutlined />
            </Link>
            <Link
              to={"/"}
              className="text-white border-r-[0.2px] border-0 border-gray-700 px-4 border-solid last-of-type:border-r-0"
            >
              <HeatMapOutlined />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
