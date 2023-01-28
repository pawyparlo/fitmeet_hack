import React from "react";
import { Layout, Typography, List } from "antd";
import { CheckOutlined } from "@ant-design/icons";

const WelcomeOnboarding = () => {
  const { Text } = Typography;
  const data = [
    {
      title: "Be yourself",
      description:
        "Make sure your photos, age and description reflect the truth about you",
    },
    {
      title: "Be carefull",
      description: "Don't share personal information too hastily. Train safely",
    },
    {
      title: "Keep it up",
      description:
        "Respect others and treat them the same way others should treat you",
    },
    {
      title: "Show initiative",
      description: "Always report inappropriate behavior",
    },
  ];
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
      <div className="w-screen mt-10">
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<CheckOutlined className="text-yellow" />}
                title={<Text className="text-yellow">{item.title}</Text>}
                description={
                  <Text className="text-gray-500">{item.description}</Text>
                }
              />
            </List.Item>
          )}
        />
      </div>
    </Layout>
  );
};

export default WelcomeOnboarding;
