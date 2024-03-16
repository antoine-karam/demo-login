/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState } from "react";
import secureLocalStorage from "react-secure-storage";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineMail, AiOutlineLock, AiOutlineUserAdd } from "react-icons/ai";

import classes from "./LoginPage.module.css";
import Toast from "../../../components/Toast/Toast";
import TopBar from "../../../components/TopBar/TopBar";

function Login() {
  const location = useLocation();

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(""); // Reset error message

    try {
      const response = await fetch(
        "https://localhost:7139/api/Auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      secureLocalStorage.setItem("userName", data.user.fullName);
      secureLocalStorage.setItem("userEmail", data.user.email);
      secureLocalStorage.setItem("userPosition", data.user.position);

      navigate("/", { replace: true });
      console.log(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Fragment>
      <TopBar />
      {location.state?.from === "sign-out" && (
        <Toast
          text="Signed out successfully"
          className={classes.toastContainer}
        />
      )}
      <div className={classes.container}>
        <div className={classes.loginBox}>
          <div className={classes.avatar}>
            <AiOutlineUserAdd />
          </div>
          <h2 className={classes.title}>Login</h2>
          <p className={classes.subtitle}>Enter your details to login...</p>
          <form className={classes.loginForm} onSubmit={handleSubmit}>
            <div className={classes.inputField}>
              <input
                type="email"
                placeholder="Email Address"
                required
                value={email}
                onChange={handleEmailChange}
              />
              <AiOutlineMail className={classes.inputIcon} />
            </div>
            <div className={classes.inputField}>
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={handlePasswordChange}
              />
              <AiOutlineLock className={classes.inputIcon} />
            </div>
            {error && <p className={classes.error}>{error}</p>}
            <button type="submit" className={classes.loginButton}>
              Login
            </button>
            <p className={classes.signupLink}>
              Don't have an account? <a href="#">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
      <footer class="copy-right-footer">
          <div class="copy-right-powered">
            Powered by &copy;&nbsp;2024 Demo login
          </div>
        </footer>
    </Fragment>
  );
}

export default Login;
