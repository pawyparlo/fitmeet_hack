import { Row, Col } from "antd";
import MobileProfile from "./dashboard/MobileProfile";

const DashboardGird = () => {
  return (
    <div>
      <Row>
        <MobileProfile />
      </Row>
      <Row>
        <Col xs={0} lg={8}>
          left
        </Col>
        <Col xs={24} lg={16} style={{ backgroundColor: "red" }}>
          mid
        </Col>
        <Col xs={0} lg={8}>
          right
        </Col>
      </Row>
    </div>
  );
};
export default DashboardGird;
