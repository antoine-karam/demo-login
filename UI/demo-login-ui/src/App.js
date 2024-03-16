import React, { useRef } from "react";
import { Link, createBrowserRouter, RouterProvider } from "react-router-dom";
import { FaHouse } from "react-icons/fa6";

import RootLayout from "./pages/Root/Root";
import ErrorPage from "./pages/Error/Error";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import LoginPage from "./pages/Authentication/LoginPage/LoginPage";
import LogoutPage from "./pages/Authentication/LogoutPage/LogoutPage";

import { populateTheme } from "./theme";

import classes from "./App.module.css";

function App() {
  const router = useRef(
    createBrowserRouter([
      {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        handle: {
          crumb: (pathName) => {
            return (
              <Link to={pathName}>
                <FaHouse
                  className={classes["bread-crumb-home"]}
                  size="1.1rem"
                />
              </Link>
            );
          },
        },
        children: [
          {
            path: "profile",
            element: (
              <ProfilePage
                title="General Information"
                description="Login user general information"
              />
            ),
          },
        ],
      },
      {
        path: "/sign-in",
        element: <LoginPage />,
      },
      {
        path: "/error",
        element: <ErrorPage />,
      },
      {
        path: "/sign-out",
        element: <LogoutPage />,
      },
    ])
  );
  populateTheme("light");
  return <RouterProvider router={router.current} />;
}

export default App;
