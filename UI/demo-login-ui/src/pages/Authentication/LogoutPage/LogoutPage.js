import React, { useEffect } from "react";
import { Card, Image, Spinner } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";


import classes from "./LogoutPage.module.css";

const SignOutPage = () => {
  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (location.state) {
        navigate("/sign-in", { replace: true });
      } else {
        navigate("/sign-in", { replace: true, state: { from: "sign-out" } });
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [location.state, navigate]);

  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <Card.Body>
          <div className={classes.body}>
            <Image
              alt="logo"
              className={classes.img}
              src={`${process.env.PUBLIC_URL}/logo.png`}
            />
            <div>
              <div className="text-center">
                <div className={classes.infoText}>
                  {location.state?.status || "You have signed out!"}
                </div>
                {location.state?.status && (
                  <div className={classes["mt-0_7"]}>
                    <Spinner animation="grow" size="sm" />
                    &nbsp;&nbsp;&nbsp;
                    <Spinner animation="grow" size="sm" />
                    &nbsp;&nbsp;&nbsp;
                    <Spinner animation="grow" size="sm" />
                  </div>
                )}
              </div>
              {!location.state && (
                <div className={classes.subInfo}>
                  <div className={`text-muted ${classes.subInfoText}`}>
                    S I G N I N G&nbsp;&nbsp;&nbsp;O U T ...
                  </div>
                  &nbsp; &nbsp;
                  <Spinner animation="grow" size="sm" />
                  &nbsp;
                  <Spinner animation="grow" size="sm" />
                  &nbsp;
                  <Spinner animation="grow" size="sm" />
                </div>
              )}
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SignOutPage;
