import React, { useCallback } from "react";
import { useNavigate, useLocation, useRouteError } from "react-router-dom";
import { Button, Image } from "react-bootstrap";
import { IoArrowBackOutline } from "react-icons/io5";

import classes from "./Error.module.css";

const ErrorPage = () => {
  const { state } = useLocation();

  const navigate = useNavigate();

  const error = useRouteError();

  const handleClick = useCallback(() => {
    navigate("..");
  }, [navigate]);

  const status = state?.status ?? error?.status;

  let title = state?.title ?? "An error occurred!";
  let description = state?.description ?? "Something went wrong!";

  if (status === 500) {
    description = error.data.message;
  }

  if (status === 404) {
    title = "Not found!";
    description = "Could not find resource or page.";
  }

  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <Image
          alt="logo"
          className={classes.img}
          src={`${process.env.PUBLIC_URL}/logo.png`}
        />
        <span className={classes.title}>DEMO-LOGIN</span>
      </div>
      <div className={classes.innerContainer}>
        <div className={classes.flash}>Oops</div>
        <h2>{title}</h2>
        <h5>{description}</h5>
        <p
          className={`${classes.goBackContainer} elem-bounce-vertical-2-times`}
        >
          <Button
            variant="link"
            onClick={handleClick}
            className={classes.goBack}
          >
            <IoArrowBackOutline />
            Go Back
          </Button>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
