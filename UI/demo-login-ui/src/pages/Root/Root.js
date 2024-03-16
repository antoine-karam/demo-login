import React, { useEffect, useRef } from "react";
import { Outlet, useNavigate } from "react-router-dom";

// import Alert from "../../components/Alert/Alert";
import Toast from "../../components/Toast/Toast";
import TopBar from "../../components/TopBar/TopBar";

import { getAuthentication } from "../Authentication/actions/Authentication";

import classes from "./Root.module.css";

const RootLayout = () => {
  const initialized = useRef(false);

  const navigate = useNavigate();

  const { userName, email, position } = getAuthentication();

  useEffect(() => {
    console.log('userNAem',userName, email, position)
    if (!userName) {
      navigate("/sign-out", {
        replace: true,
        state: { status: "You are not authenticated!" },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;

      if (process.env.NODE_ENV === "development") {
        console.log("user: ", userName);
      }
    }
  }, [userName]);

  if (!userName) {
    return null;
  }

  const outletJSX = (
    <div id="root-outlet" className={classes.outlet}>
      <Outlet context={{ userName, email, position }} />
    </div>
  );

  return (
    <div>
      {/* {alert && (
        <Alert
          title={alert.title}
          status={alert.status}
          message={alert.message}
        />
      )} */}
      <div className={classes.container}>
        <main className={classes.main}>
          <TopBar
            userName={userName}
            userEmail={email}
            userPosition={position}
          />
          <Toast
            text={
              <div>
                Signed in with <strong>{userName}</strong>
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
