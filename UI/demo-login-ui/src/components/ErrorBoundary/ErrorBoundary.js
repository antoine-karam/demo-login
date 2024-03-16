import React, { Component } from "react";

import classes from './ErrorBoundary.module.css'
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    if (process.env.NODE_ENV === "development") {
      console.error("Uncaught error:", error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={classes.container}>
          <div className={classes.titleContainer}>
            {/* <Image
              alt="logo"
              className="img"
              src={`${process.env.PUBLIC_URL}/logo.png`}
            /> */}
            <span className={classes.title}>Demo-Login</span>
          </div>
          <div className={classes.innerContainer}>
            <div className={classes.flash}>Oops</div>
            <h2>An error occurred!</h2>
            <h5>Something went wrong!</h5>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
