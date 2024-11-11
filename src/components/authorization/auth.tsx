import { Button, Checkbox, Form, Input } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QBLogoSite from "../../assets/QB-LogoSite.png";
import loginImage from "../../assets/loginImage.webp";

type user = {
  email: string;
  password: string;
};

const SignIn = ({ togglePage }: { togglePage: () => void }) => {
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
    // <div className="flex w-full h-full justify-center items-center">
    <div className="m-auto border-y-2 border-r-2 border-white bg-white rounded-md space-y-5 p-5 w-[400px] h-full shadow-lg ">
      <div className="flex flex-col space-y-2 justify-center items-center">
        <img
          src={QBLogoSite}
          alt="Store logo"
          className="w-25 h-20 bg-black/70 rounded-lg p-2"
        />
        <h1 className="text-xl md:text-2xl text-center font-bold w-fit">Welcome to QuickBuy</h1>
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
      <div className="justify-center flex flex-col md:flex-row items-center w-full text-sm">
        Don't have an account ?{" "}
        <button
          onClick={togglePage}
          className="text-orange-500 font-medium pl-2"
        >
          Create Account
        </button>
      </div>
      {/* </div> */}
    </div>
  );
};

export type userSignUP = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

const SignUp = ({ togglePage }: { togglePage: () => void }) => {
  const saveCredential = (values: userSignUP) => {
    localStorage.setItem("firstname", values.firstname);
    localStorage.setItem("lastname", values.lastname);
    localStorage.setItem("email", values.email);
    localStorage.setItem("password", values.password);
    localStorage.setItem("isLogin", "true");
    togglePage();
  };

  return (
    <div className="m-auto border-y-2 border-r-2 space-y-4 border-white bg-white rounded-md p-5 w-full h-fit shadow-lg ">
      <div className="flex flex-col space-y-2 justify-center items-center">
        <img
          src={QBLogoSite}
          alt="Store logo"
          className="w-25 h-20 bg-black/70 rounded-lg p-2"
        />
        <h1 className="text-xl md:text-2xl text-center font-bold w-fit">Create your account</h1>
      </div>
      <Form layout="vertical" onFinish={saveCredential}>
        <Form.Item
          label="FirstName"
          name="firstname"
          rules={[{ required: true, message: "Please input your firstname!" }]}
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
        <Form.Item className="justify-center items-center flex">
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            className="w-full bg-orange-500"
          >
            Sign Up
          </Button>
        </Form.Item>
      </Form>
      <div className="justify-center flex flex-col md:flex-row items-center">
        
          Already have an account?{" "}
          <button
            onClick={togglePage}
            className="text-orange-500 font-medium pl-2"
          >
            SignIn
          </button>
        
      </div>
      {/* </div> */}
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
      <div
        className=" w-full min-h-screen flex md:flex-row justify-center items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${loginImage})` }}
      >
        <div className="w-full min-h-screen md:space-x-10 space-y-6 bg-black/60  flex flex-col md:flex-row p-8 justify-center items-center mx-auto">
          <div className="md:w-[50vh] h-fit flex flex-col justify-center md:space-y-4 md:items-start items-center md:text-start text-center">
            <h1 className="text-white text-2xl md:text-5xl font-medium">
              Get Everything You Want
            </h1>
            <p className="text-gray-300 text-sm md:text-md">
              "Find everything you're looking for in our store items you won't
              even find on Amazon."
            </p>
          </div>
          <div className="flex w-[40vh] h-[20vh] md:w-[50vh] md:h-full">
            {isSignIn ? (
              <SignIn togglePage={togglePage} />
            ) : (
              <SignUp togglePage={togglePage} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
