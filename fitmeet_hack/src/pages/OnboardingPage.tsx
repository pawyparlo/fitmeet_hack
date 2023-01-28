import React, { useState, useCallback } from "react";
import { Steps, Layout } from "antd";
import UploadImage from "../components/UploadImage";
import WelcomeOnboarding from "../components/WelcomeOnboarding";
import "../styles/styles.scss";
import OnboardingButtons from "../components/OnboardingButtons";

const OnboardingPage = () => {
  const [current, setCurrent] = useState<number>(0);
  const steps = [
    {
      title: "",
      content: <WelcomeOnboarding />,
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
      <OnboardingButtons
        current={current}
        steps={steps}
        next={next}
        prev={prev}
      />
    </Layout>
  );
};

export default OnboardingPage;
