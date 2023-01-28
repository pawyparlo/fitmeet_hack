import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router";
import { UserRegisterCredentialProps } from "../types";
import { Layout, Form, Input, Typography, Button } from "antd";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { Text } = Typography;
  const [userCredentials, setUserCredentials] =
    useState<UserRegisterCredentialProps>({
      userName: "",
      userPassword: "",
      userConfirmPassword: "",
      email: "",
    });

  const setCredential = useCallback(
    (key: string, value: string) => {
      setUserCredentials((preVal: UserRegisterCredentialProps) => ({
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

  const onRegister = useCallback(() => {
    Object.values(userCredentials).every((val: string) => val !== "") &&
      navigate("/onboarding");
  }, []);

  return (
    <Layout className="h-screen flex justify-top items-center bg-transparent pt-[120px] overflow-hidden">
      <h1 className="mb-5 text-yellow">Register</h1>
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
        <Form.Item
          name="userConfirmPassword"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            onChange={(e) =>
              setCredential("userConfirmPassword", e.currentTarget.value)
            }
            placeholder="Confirm password"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input
            onChange={(e) => setCredential("email", e.currentTarget.value)}
            placeholder="E-mail address"
          />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            className="mt-5 bg-yellow text-black"
            type="primary"
            htmlType="submit"
            onClick={onRegister}
          >
            Register
          </Button>
        </Form.Item>
      </Form>
      <Text className="text-gray-500" onClick={() => navigate("/login")}>
        Have an account? <Text className="text-yellow">Sign In</Text>
      </Text>
    </Layout>
  );
};

export default RegisterPage;
