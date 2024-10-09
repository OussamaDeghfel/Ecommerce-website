import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="m-auto border-2 border-orange-100 rounded-md p-5 w-[400px] h-fit shadow-lg ">
        <Form layout="vertical">
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" size="large">
              Sign In
            </Button>
          </Form.Item>
        </Form>
        <div>
          <h1>
            Don't have an account?{" "}
            <Link to="signup">
              {" "}
              <span className="font-bold text-orange-500">Create Acccount</span>{" "}
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
