import React, { useState } from "react";
import { Form, Input, Typography, Layout, Slider } from "antd";

const ActivityForm = () => {
  const { Text } = Typography;
  const [activity, setActivity] = useState({
    sportName: "",
  });

  return (
    <Layout className="flex justify-top items-center bg-transparent pt-5">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="w-80"
      >
        <Form.Item
          name="sportName"
          rules={[{ required: true, message: "Enter sport name" }]}
          label={<Text className="text-gray-500 text-lg">Sport name:</Text>}
        >
          <Input
          // onChange={(e) => setBaseInformation("name", e.currentTarget.value)}
          // value={baseInformations.name}
          />
        </Form.Item>
        <Form.Item
          name="experienceLevel"
          rules={[{ required: true, message: "Enter experience level" }]}
          label={
            <Text className="text-gray-500 text-lg">Experience level:</Text>
          }
        >
          <Slider min={0} max={100} step={10} />
        </Form.Item>
        <Form.Item
          name="Pro"
          rules={[{ required: true, message: "Enter experience level" }]}
          label={
            <Text className="text-gray-500 text-lg">Experience level:</Text>
          }
        >
          <Slider min={0} max={100} step={10} />
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default ActivityForm;
