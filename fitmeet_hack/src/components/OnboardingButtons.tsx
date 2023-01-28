import React from "react";
import { Button, message } from "antd";

interface OnboardingButtonsProps {
  current: number;
  steps: any;
  next: () => void;
  prev: () => void;
}

const OnboardingButtons: React.FC<OnboardingButtonsProps> = ({
  current,
  steps,
  next,
  prev,
}) => {
  return (
    <div style={{ marginTop: 24 }} className="flex flex-row">
      {current === 0 && (
        <Button
          type="primary"
          className="flex justify-center items-center bg-yellow text-black pb-5 pt-5 pl-10 pr-10 text-lg mb-10"
          onClick={() => next()}
        >
          Accept
        </Button>
      )}
      {current <= steps.length - 1 && current !== 0 && (
        <Button
          style={{ margin: "0 8px" }}
          onClick={() => prev()}
          className="w-24 flex justify-center items-center bg-yellow text-black text-lg mb-10"
        >
          Previous
        </Button>
      )}
      {current === steps.length - 1 && current !== 0 && (
        <Button
          type="primary"
          onClick={() => message.success("Processing complete!")}
          className="w-24 flex justify-center items-center bg-yellow text-black text-lg mb-10"
        >
          Done
        </Button>
      )}
      {current > 0 && current !== steps.length - 1 && (
        <Button
          type="primary"
          className="w-24 flex justify-center items-center bg-yellow text-black text-lg mb-10"
          onClick={() => next()}
        >
          Next
        </Button>
      )}
    </div>
  );
};

export default OnboardingButtons;
