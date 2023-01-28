import { Layout, Row, Col, Button } from "antd";
import { useNavigate } from "react-router";
import "../styles/styles.scss";
import "../styles/utils.scss";

const HelloPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Layout className="page-layout" style={{ background: "transparent" }}>
      <Row>
        <Col span={24} className="center-horizontaly padding-bottom-20">
          Discover new opportunities in the world of sports, find the perfect
          partner training.
        </Col>
      </Row>
      <Row>
        <Col span={24} className="center-horizontaly">
          <Button
            type="primary"
            className="hello-page-button"
            onClick={() => navigate("/login")}
          >
            Get started
          </Button>
        </Col>
      </Row>
    </Layout>
  );
};

export default HelloPage;
