import React, { useCallback, useState } from "react";
import { Layout, Form, Input, Typography, Button } from "antd";
import "../styles/styles.scss";

const LoginPage = () => {
  const { Link, Text } = Typography;
  const [userCredentials, setUserCredentials] = useState<{
    userName: string;
    userPassword: string;
  }>({
    userName: "",
    userPassword: "",
  });

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onSubmitClick = useCallback(() => {
    localStorage.setItem("wasLoggedBefore", "true");
  }, []);

  return (
    <Layout className="h-screen flex justify-top items-center bg-transparent pt-[200px] overflow-hidden">
      <h1>Login</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Link className="text-white">Reset password ?</Link>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 18 }}
        ></Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Link href="./register">No acccount? Register</Link>
    </Layout>
  );
};

export default LoginPage;
