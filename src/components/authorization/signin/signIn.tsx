import { Button, Checkbox, Form, Input } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import QBLogoSite from "../../../assets/QB-LogoSite.png"
// import loginImage from "../../../assets/loginImage.jpg"

type user = {
  email: string;
  password: string;
}

const SignIn = () => {
  const [credentialWarn, setCredentialWarn] = useState(false);
  const navigate = useNavigate()


  const verfiyCredential = (values : user) => {
    if(values.email === localStorage.getItem("email") && values.password === localStorage.getItem("password")){
      localStorage.setItem("isLogin", "true");
      setCredentialWarn(false)
      navigate("/home")
    } else {
      setCredentialWarn(true)
    }
  }

  return (
    <div className="flex w-[900px] m-auto h-screen justify-center items-center">
      
      <div className="m-auto border-2 border-orange-100 rounded-md space-y-5 p-5 w-[600px] h-fit shadow-lg ">
        <div className="flex flex-col space-y-2 justify-center items-center">
          <img src={QBLogoSite} alt="Store logo" className="w-25 h-20 bg-black/70 rounded-lg p-2" />
          <h1 className="text-2xl font-bold w-fit">Welcome to QuickBuy</h1>
        </div>
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

          <Form.Item name="remember" valuePropName="checked" className="justify-center items-center flex">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item className="justify-center items-center flex">
            <Button type="primary" size="large" htmlType="submit" className="w-full bg-orange-500" >
              Sign In
            </Button>
          </Form.Item>
        </Form>
        <div className="justify-center flex items-center">
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
