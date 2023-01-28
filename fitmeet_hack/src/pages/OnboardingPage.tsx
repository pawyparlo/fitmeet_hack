import React, { useState, useCallback } from "react";
import { Button, message, Steps, theme, Layout } from "antd";
import UploadImage from "../components/UploadImage";
import WelcomeOffboarding from "../components/WelcomeOffboarding";
import "../styles/styles.scss";

const OnboardingPage = () => {
  const [current, setCurrent] = useState<number>(0);
  const steps = [
    {
      title: "",
      content: <WelcomeOffboarding />,
    },
    {
      title: "",
      content: <UploadImage />,
    },
    {
      title: "",
      content: "Last-content",
    },
  ];

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const next = useCallback(() => {
    setCurrent((preVal) => preVal + 1);
  }, [setCurrent]);

  const prev = useCallback(() => {
    setCurrent((preVal) => preVal - 1);
  }, [setCurrent]);

  return (
    <Layout className="h-screen flex justify-top items-center bg-transparent p-[20px] overflow-hidden">
      <Steps
        responsive={false}
        direction="horizontal"
        current={current}
        items={items}
      />
      <div className="h-screen flex justify-top items-start">
        {steps[current].content}
      </div>
      <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </Layout>
  );
};

export default OnboardingPage;
