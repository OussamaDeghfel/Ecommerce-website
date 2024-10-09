import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="m-auto border-2 border-orange-100 rounded-md p-5 w-[400px] h-fit shadow-lg ">
        <Form layout="vertical">
          <Form.Item
            label="FirstName"
            name="firstname"
            rules={[
              { required: true, message: "Please input your firstname!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="LastName"
            name="lastname"
            rules={[{ required: true, message: "Please input your lastname!" }]}
          >
            <Input />
          </Form.Item>
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
          <Form.Item>
            <Button type="primary" size="large">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
        <div>
          <h1>
            Already have an account?{" "}
            <Link to="/">
              {" "}
              <span className="font-bold text-orange-500">SignIn</span>{" "}
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
