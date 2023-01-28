import React from "react";
import { Layout, Row, Col, Button } from "antd";
import "../styles/styles.scss";
import "../styles/utils.scss";

const HelloPage = () => {
  return (
    <Layout className="hello-page-layout">
      <Row>
        <Col span={24} className="center-horizontaly padding-bottom-20">
          Get started
        </Col>
      </Row>
      <Row>
        <Col span={24} className="center-horizontaly">
          <Button type="primary">Get started</Button>
        </Col>
      </Row>
    </Layout>
  );
};

export default HelloPage;
