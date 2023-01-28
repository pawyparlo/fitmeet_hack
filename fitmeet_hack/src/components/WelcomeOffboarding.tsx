import React from "react";
import { Layout, Typography, List } from "antd";

const WelcomeOffboarding = () => {
  const { Text } = Typography;
  return (
    <Layout className="flex flex-col justify-center items-center bg-transparent">
      <div className="mt-10 ">
        <Text className="text-yellow font-bold text-2xl">
          Welcome in FitMeet!
        </Text>
      </div>
      <div>
        <Text className="text-gray-500 text-lg">Please follow our rules</Text>
      </div>
    </Layout>
  );
};

export default WelcomeOffboarding;
