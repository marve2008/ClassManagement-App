import React, { useState, useEffect, useContext } from "react";
// import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router";
import { AuthContext } from "../helpers/AuthContext";
import { toast } from "react-toastify";

const Fom = () => {
  const { handleLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (email && password) {
      try {
        const { user, error } = await handleLogin(email, password);
        if (!user) {
          console.log("Something went wrong");
          toast.error('An error occurred', {
            position: 'top-left',
          });
        } else {
          navigate("/data-table");
          toast.success("Login Successful", {
            position: "top-left",
          });
        }
      } catch (error) {
        console.error("An error occurred:", error);
        toast.error('An error occurred', {
          position: 'top-left',
        });
      }
    } else {
      console.log("Email and password are required");
    }
  };

  return (
    <form method="post" id="loginForm" onSubmit={handleSubmit}>
      <h1>Welcome!</h1>
      <div className="form-group">
        <input
          type="text"
          placeholder="Enter Your Email"
          name="email"
          id="loginEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          id="loginPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button type="submit" id="submit_btn">
          submit
        </button>
      </div>
    </form>
  );
};

export default Fom;
