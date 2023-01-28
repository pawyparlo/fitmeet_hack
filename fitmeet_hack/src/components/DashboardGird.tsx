import { Row, Col } from "antd";
import DashboardFeed from "./dashboard/Feed";
import MobileProfile from "./dashboard/MobileProfile";

const DashboardGird = () => {
  return (
    <div className="">
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
        <Col xs={0} lg={8}>
          left
        </Col>
        <Col xs={24} lg={16}>
          <DashboardFeed />
        </Col>
        <Col xs={0} lg={8}>
          right
        </Col>
      </Row>
    </div>
  );
};
export default DashboardGird;
