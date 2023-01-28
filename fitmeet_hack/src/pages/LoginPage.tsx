import React, { useCallback, useState } from "react";
import { Layout, Form, Input, Typography, Button } from "antd";
import { useNavigate } from "react-router";
import { UserCredentialProps } from "../types";
import "../styles/styles.scss";

const LoginPage = () => {
  const { Link, Text } = Typography;
  const navigate = useNavigate();
  const [userCredentials, setUserCredentials] = useState<UserCredentialProps>({
    userName: "",
    userPassword: "",
  });

  const setCredential = useCallback(
    (key: string, value: string) => {
      setUserCredentials((preVal: UserCredentialProps) => ({
        ...preVal,
        [key]: value,
      }));
    },
    [setUserCredentials]
  );

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onLogin = useCallback(() => {
    Object.values(userCredentials).every((val: string) => val !== "") &&
      localStorage.setItem("wasLoggedBefore", "true");
  }, []);

  return (
    <Layout className="h-screen flex justify-top items-center bg-transparent pt-[200px] overflow-hidden">
      <h1 className="mb-5 text-yellow">Login</h1>
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
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            onChange={(e) => setCredential("userName", e.currentTarget.value)}
            placeholder="Username"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            onChange={(e) =>
              setCredential("userPassword", e.currentTarget.value)
            }
            placeholder="Password"
          />
        </Form.Item>
        <Text className="text-gray-500">Reset password ?</Text>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            className="mt-5 bg-yellow text-black"
            type="primary"
            htmlType="submit"
            onClick={onLogin}
          >
            Login
          </Button>
        </Form.Item>
      </Form>
      <Text className="text-gray-500" onClick={() => navigate("/register")}>
        No acccount? Register
      </Text>
    </Layout>
  );
};

export default LoginPage;
