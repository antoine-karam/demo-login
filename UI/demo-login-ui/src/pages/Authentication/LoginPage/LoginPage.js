/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import classes from "./LoginPage.module.css";
import Toast from "../../../components/Toast/Toast";
import TopBar from "../../../components/TopBar/TopBar";

function Login() {
  const location = useLocation();

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
          <form className={classes.loginForm}>
            <div className={classes.inputField}>
              <input type="email" placeholder="Email Address" required />
              <AiOutlineMail className={classes.inputIcon} />
            </div>
            <div className={classes.inputField}>
              <input type="password" placeholder="Password" required />
              <AiOutlineLock className={classes.inputIcon} />
            </div>
            <button type="submit" className={classes.loginButton}>
              Login
            </button>
            <p className={classes.signupLink}>
              Don't have an account? <a href="#">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
