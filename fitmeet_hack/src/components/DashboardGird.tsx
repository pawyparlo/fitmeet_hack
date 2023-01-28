import { Row, Col } from "antd";
import MobileProfile from "./dashboard/MobileProfile";

const DashboardGird = () => {
  return (
    <div className="bg-yellow-300">
      <Row style={{ padding: "1rem 1rem" }}>
        <Col xs={4} style={{ backgroundColor: "red" }}>
          Home
        </Col>
        <Col xs={20} style={{ display: "flex", justifyContent: "right" }}>
          <MobileProfile userName="Evgen Ledo" />
        </Col>
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
