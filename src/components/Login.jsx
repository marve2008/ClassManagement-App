import React, { useState } from "react";
import myPix from "../assets/images/marv1.jpg";

import Fom from "./Form";

const Login = () => {
  return (
    <div className="loginForm">
      <Fom />
      <div className="logo">
        <img src={myPix} alt=""  className="logo1"/>
      </div>
    </div>
  );
};

export default Login;
