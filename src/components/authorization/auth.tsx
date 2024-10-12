import { Route, Routes } from "react-router-dom";
import SignIn from "./signin/signIn";
import SignUp from "./signup/signUp";

const Auth = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default Auth;
