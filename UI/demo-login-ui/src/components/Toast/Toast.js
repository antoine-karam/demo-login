import React, { useCallback, useEffect, useRef, useState } from "react";
import { IoClose, IoCloseCircleSharp } from "react-icons/io5";
import { Toast as BSToast, ToastContainer } from "react-bootstrap";
import { Button } from "react-bootstrap";

import classes from "./Toast.module.css";

const Toast = ({ bg, text, position, noCloseButton, callBackFn }) => {
  const autohide = useRef(undefined);
  const autofade = useRef(undefined);

  const [fadeOut, setFadeOut] = useState(false);
  const [showToast, setShowToast] = useState(true);

  const handleToast = useCallback(() => {
    clearTimeout(autohide.current);
    clearTimeout(autofade.current);
    setShowToast(false);
  }, []);

  useEffect(() => {
    if (fadeOut) {
      autohide.current = setTimeout(() => {
        setShowToast(false);
        if (callBackFn) {
          callBackFn();
        }
      }, 2000);
      return () => clearTimeout(autohide.current);
    }
  }, [callBackFn, fadeOut]);

  useEffect(() => {
    autofade.current = setTimeout(() => {
      setFadeOut(true);
    }, 2000);
    return () => clearTimeout(autofade.current);
  }, []);

  return (
    <ToastContainer
      position={position || "top-center"}
      className={`${classes.container}`}
    >
      <BSToast
        autohide
        show={showToast}
        bg={bg || "dark"}
        onClose={handleToast}
        className={`${classes.toast} ${fadeOut ? classes.out : classes.in}`}
      >
        <BSToast.Body className="text-white">
          <div className={classes.body}>
            <div className="me-auto">{text}</div>
            {!noCloseButton && (
              <Button onClick={handleToast} className={classes.close}>
                <IoClose size="1.3rem" />
              </Button>
            )}
            {bg === "danger" && noCloseButton && (
              <IoCloseCircleSharp size="1.3rem" className={classes.close} />
            )}
          </div>
        </BSToast.Body>
      </BSToast>
    </ToastContainer>
  );
};

export default Toast;
