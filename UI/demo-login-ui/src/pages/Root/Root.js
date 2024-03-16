import React, { useEffect, useRef } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Alert from "../../components/Alert/Alert";
import Toast from "../../components/Toast/Toast";
import TopBar from "../../components/TopBar/TopBar";
import classes from "./Root.module.css";
const RootLayout = () => {
  const initialized = useRef(false);

  const navigate = useNavigate();

  const { userId, userName, userImage, userPosition } = {}; //getAuthentication();

  useEffect(() => {
    if (!userId || !userName) {
      navigate("/sign-out", {
        replace: true,
        state: { status: "You are not authenticated!" },
      });
    }
  }, [navigate, userId, userName]);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;

      if (process.env.NODE_ENV === "development") {
        console.log("user: ", userId);
      }
    }
  }, [userId]);

  if (!userId) {
    return null;
  }

  const outletJSX = (
    <div id="root-outlet" className={classes.outlet}>
      <Outlet context={{ userId, userName, userImage, userPosition }} />
    </div>
  );

  return (
    <div>
      {alert && (
        <Alert
          title={alert.title}
          status={alert.status}
          message={alert.message}
        />
      )}
      <div className={classes.container}>
        <main className={classes.main}>
          <TopBar
            userName={userName}
            userImage={userImage}
            userPosition={userPosition}
          />
          <Toast
            text={
              <div>
                Signed in with <strong>{userId}</strong>
              </div>
            }
            className={classes.toast}
          />
          {outletJSX}
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
