import React, { useState } from "react";
import Login from "../components/Auth/Login/Login";
import Register from "../components/Login/Register";
import ResetPassword from "../components/Login/ResetPassword";
import OtpPass from "../components/Login/OtpPass";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const Auth = () => {
  const [compLogin, setCompLogin] = useState("login");
  const changeToRegister = () => setCompLogin("register");
  const changeToLogin = () => setCompLogin("login");
  const changeToReset = () => setCompLogin("reset");
  const changeToOtp = () => setCompLogin("otp");
  const isLogin = useSelector((state) => state.auth.isLogin);
  console.log("KONTOL", isLogin);
  if (isLogin === true) return <Redirect to="/" />;

  return (
    <>
      {compLogin === "login" ? (
        <Login
          changeToRegister={changeToRegister}
          changeToReset={changeToReset}
        />
      ) : compLogin === "register" ? (
        <Register changeToLogin={changeToLogin} />
      ) : (
        <ResetPassword
          changeToRegister={changeToRegister}
          changeToOtp={changeToOtp}
        />
      )}
    </>
  );
};

export default Auth;
