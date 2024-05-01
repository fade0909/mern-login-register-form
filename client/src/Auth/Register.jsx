import React from "react";
import { Alert, Button, Card, Flex, Form, Input, Spin, Typography } from "antd";
import { Link } from "react-router-dom";

import registerImage from "../assets/register.jpeg";
import useSignup from "../hooks/useSignup";

const Register = () => {
  const { loading, error, registerUser } = useSignup();
  const handleRegister = (values) => {
    registerUser(values);
  };

  return (
    <Card className="form-container">
      <Flex gap="large" align="center">
        {/* form */}
        <Flex vertical flex={1}>
          <Typography.Title level={3} strong className="title">
            Create an account
          </Typography.Title>
          <Typography.Text type="secondary" strong className="slogan">
            Join for exclusive access!
          </Typography.Text>
          <Form layout="vertical" onFinish={handleRegister} autoComplete="off">
            {/* Form Input Section */}
            <Form.Item
              label="Full Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your Full Name",
                },
              ]}
            >
              <Input size="large" placeholder="Enter your full name" />
            </Form.Item>

            {/* Email Input Section */}

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email",
                },
                {
                  type: "email",
                  message: "The input is not valid email!",
                },
              ]}
            >
              <Input size="large" placeholder="Enter your Email" />
            </Form.Item>

            {/* Password Input Section */}

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password",
                },
              ]}
            >
              <Input.Password size="large" placeholder="Enter your Password" />
            </Form.Item>

            {/* Confirm Password Input Section */}

            <Form.Item
              label="Confirm Password"
              name="passwordConfirm"
              rules={[
                {
                  required: true,
                  message: "Confirm your Password",
                },
              ]}
            >
              <Input.Password
                size="large"
                placeholder="Re-enter your Password"
              />
            </Form.Item>
            {error && (
              <Alert
                description={error}
                type="error"
                showIcon
                closable
                className="alert"
              />
            )}

            <Form.Item>
              <Button
                type={`${loading ? "" : "primary"}`}
                htmlType="submit"
                size="large"
                className="btn"
              >
                {loading ? <Spin /> : "Create An Account"}
              </Button>
            </Form.Item>
            <Form.Item>
              <Link to="/login">
                <Button size="large" className="btn">
                  Sign In
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </Flex>

        {/* image */}
        <Flex flex={1}>
          <img src={registerImage} className="auth-image" />
        </Flex>
      </Flex>
    </Card>
  );
};

export default Register;
