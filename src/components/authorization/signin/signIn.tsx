import { Button, Checkbox, Form, Input } from "antd";
import { useState } from "react";
import { Link, redirect } from "react-router-dom";

type user = {
  email: string;
  password: string;
}

const SignIn = () => {
  const [credentialWarn, setCredentialWarn] = useState(false);


  const verfiyCredential = (values : user) => {
    if(values.email === localStorage.getItem("email") && values.password === localStorage.getItem("password")){
      alert("Login Success")
      setCredentialWarn(false)
      redirect('/home')
    } else {
      setCredentialWarn(true)
    }
  }
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="m-auto border-2 border-orange-100 rounded-md p-5 w-[400px] h-fit shadow-lg ">
        {credentialWarn && (
          <div className="w-full h-fit p-4 bg-orange-200  text-center rounded-md mb-5">
          <h1 className="font-bold text-red-600 ">Wrong Credentials</h1>
          <p className="font-sm text-red-600">Invalid username or password</p>
        </div>
        )}
        
        <Form layout="vertical" onFinish={verfiyCredential}>
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
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" size="large" htmlType="submit">
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
