import React from "react";
import classes from "./ProfilePage.module.css";
import { getAuthentication } from "../Authentication/actions/Authentication";

const ProfilePage = ({ title, description }) => {
  const { userName, email, position } = getAuthentication();

  return (
    <div className={classes.profileContainer}>
      <header className={classes.profileHeader}>
        <h1>{title || "Profile Page"}</h1>
        <p>{description || "Welcome to your profile page!"}</p>
      </header>
      <div className={classes.profileDetails}>
        <div className={classes.profileDetail}>
          <label>Username:</label>
          <span>{userName || "N/A"}</span>
        </div>
        <div className={classes.profileDetail}>
          <label>Email:</label>
          <span>{email || "N/A"}</span>
        </div>
        <div className={classes.profileDetail}>
          <label>Position:</label>
          <span>{position || "N/A"}</span>
        </div>
      </div>
      <footer className={classes.profileFooter}>
        <div className={classes.copyRightPowered}>
          Powered by &copy;&nbsp;2024 Demo login
        </div>
      </footer>
    </div>
  );
};

export default ProfilePage;
