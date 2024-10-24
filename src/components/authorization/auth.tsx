// import { Route, Routes } from "react-router-dom";
// import SignIn from "./signin/signIn";
// import SignUp from "./signup/signUp";
// import loginImage from "../../assets/loginImage.jpg";

import { Button, Checkbox, Form, Input } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import QBLogoSite from "../../assets/QB-LogoSite.png";
import loginImage from "../../assets/loginImage.jpg";

type user = {
  email: string;
  password: string;
};

const SignIn = ({ togglePage }) => {
  const [credentialWarn, setCredentialWarn] = useState(false);
  const navigate = useNavigate();

  const verfiyCredential = (values: user) => {
    if (
      values.email === localStorage.getItem("email") &&
      values.password === localStorage.getItem("password")
    ) {
      localStorage.setItem("isLogin", "true");
      setCredentialWarn(false);
      navigate("/home");
    } else {
      setCredentialWarn(true);
    }
  };

  return (
    <div className="flex w-full m-auto h-screen justify-center items-center">
      <div className="m-auto border-y-2 border-r-2 -translate-x-2 border-gray-300 rounded-md space-y-5 p-5 w-[400px] h-fit shadow-lg ">
        <div className="flex flex-col space-y-2 justify-center items-center">
          <img
            src={QBLogoSite}
            alt="Store logo"
            className="w-25 h-20 bg-black/70 rounded-lg p-2"
          />
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

          <Form.Item
            name="remember"
            valuePropName="checked"
            className="justify-center items-center flex"
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item className="justify-center items-center flex">
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              className="w-full bg-orange-500"
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>
        <div className="justify-center flex items-center">
          <h1>
            Don't have an account?{" "}
            {/* <Link to="signup">
              {" "}
              <span className="font-bold text-orange-500">Create Acccount</span>{" "}
            </Link> */}
            <Button onClick={togglePage} className="font-bold text-orange-500">
              Create Account
            </Button>
          </h1>
        </div>
      </div>
    </div>
  );
};

export type userSignUP = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

const SignUp = ({ togglePage }) => {
  const saveCredential = (values: userSignUP) => {
    localStorage.setItem("firstname", values.firstname);
    localStorage.setItem("lastname", values.lastname);
    localStorage.setItem("email", values.email);
    localStorage.setItem("password", values.password);
    localStorage.setItem("isLogin", "true");
  };
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="m-auto border-2 border-orange-100 rounded-md p-5 w-[400px] h-fit shadow-lg ">
        <Form layout="vertical" onFinish={saveCredential}>
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
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" size="large" htmlType="submit">
              <Link to="/">Sign Up</Link>
            </Button>
          </Form.Item>
        </Form>
        <div>
          <h1>
            Already have an account?{" "}
            {/* <Link to="/">
              {" "}
              <span className="font-bold text-orange-500">SignIn</span>{" "}
            </Link> */}
            <Button onClick={togglePage} className="font-bold text-orange-500">
              SignIn
            </Button>
          </h1>
        </div>
      </div>
    </div>
  );
};

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const togglePage = () => {
    setIsSignIn((prevIsSignIn) => !prevIsSignIn);
  };
  return (
    <>
      {/* routing between sign in and sign up
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes> */}

      <div className="flex justify-center items-center m-auto w-[60%]">
        <div
          className="m-auto flex border-2 border-gray-300 rounded-md space-y-5 w-full h-[80vh] shadow-right bg-cover bg-center bg-no-repeat z-10"
          style={{ backgroundImage: `url(${loginImage})` }}
        >
          <div className="w-full h-full flex flex-col p-5 bg-black/60 justify-end items-start space-y-3">
            <h1 className="text-white text-5xl font-bold font-mono">Get <br /> Everything <br/> You Want</h1>
            <p className="text-gray-300 ">"Find everything you're looking for in our store items you won't even find on Amazon."</p>
          </div>
        </div>

        <div>
          {isSignIn ? (
            <SignIn togglePage={togglePage} />
          ) : (
            <SignUp togglePage={togglePage} />
          )}
        </div>
      </div>
    </>
  );
};

export default Auth;
