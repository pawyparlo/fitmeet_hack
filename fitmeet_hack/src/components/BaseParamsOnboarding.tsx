import React, { useState, useCallback } from "react";
import type { MenuProps } from "antd";
import { Layout, Typography, Button, Form, Input, Dropdown } from "antd";

const BaseParamsOnboarding = () => {
  const { Text } = Typography;
  const [baseInformations, setBaseInformations] = useState({
    name: "",
    age: 0,
    gender: "",
    location: "",
  });

  const setBaseInformation = useCallback(
    (key: string, value: string) => {
      setBaseInformations((preVal) => ({ ...preVal, [key]: value }));
    },
    [setBaseInformations]
  );

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Text className="text-lg text-gray-500">Male</Text>,
      onClick: () => setBaseInformation("gender", "Male"),
    },
    {
      key: "2",
      label: <Text className="text-lg text-gray-500">Female</Text>,
      onClick: () => setBaseInformation("gender", "Female"),
    },
    {
      key: "3",
      label: <Text className="text-lg text-gray-500">Other</Text>,
      onClick: () => setBaseInformation("gender", "Other"),
    },
  ];

  return (
    <Layout className="flex justify-top items-center bg-transparent pt-[120px] overflow-hidden">
      <Text className="mb-5 text-yellow text-xl">Base informations</Text>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="w-80"
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please input your username!" }]}
          label={<Text className="text-gray-500 text-lg">Your first name</Text>}
        >
          <Input
            onChange={(e) => setBaseInformation("name", e.currentTarget.value)}
            value={baseInformations.name}
          />
        </Form.Item>
        <Form.Item
          name="age"
          rules={[{ required: true, message: "Please input your age!" }]}
          label={<Text className="text-gray-500 text-lg">Your age</Text>}
        >
          <Input
            onChange={(e) => setBaseInformation("age", e.currentTarget.value)}
            value={baseInformations.age}
          />
        </Form.Item>
        <Form.Item
          name="gender"
          rules={[{ required: true, message: "Please select your gender!" }]}
          label={<Text className="text-gray-500 text-lg">Your gender</Text>}
        >
          <Dropdown menu={{ items }}>
            <Input value={baseInformations.gender} />
          </Dropdown>
        </Form.Item>
        <Form.Item
          name="location"
          rules={[{ required: true, message: "Please input your Location!" }]}
          label={<Text className="text-gray-500 text-lg">Location</Text>}
        >
          <Input
            onChange={(e) =>
              setBaseInformation("location", e.currentTarget.value)
            }
            value={baseInformations.location}
          />
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default BaseParamsOnboarding;
