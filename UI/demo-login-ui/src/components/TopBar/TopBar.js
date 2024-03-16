import React, { useCallback, useState } from "react";
import {
  Nav,
  Card,
//   Image,
  Navbar,
  Container,
  NavDropdown,
  Button,
} from "react-bootstrap";
import { AiOutlineLogout, AiOutlineProfile } from "react-icons/ai";
import { BsSunFill, BsMoon } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { populateTheme, getCurrentTheme } from "../../theme";

import classes from "./TopBar.module.css";

const TopBar = ({ userName, userEmail, userPosition }) => {
  const navigate = useNavigate();

  const currentTheme = getCurrentTheme();
  const [isLight, setIsLight] = useState(currentTheme === "light");
  const handleTheme = useCallback(() => {
    populateTheme(isLight ? "dark" : "light");
    setIsLight(!isLight);
  }, [isLight]);

  const handleProfile = useCallback(() => {
    navigate("/profile");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogOut = useCallback(() => {
    navigate("/sign-out", {
      replace: true,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Navbar
        expand="lg"
        sticky="top"
        className={`shadow p-2 ${classes.container}`}
      >
        <Container fluid>
          <Navbar.Brand className={classes.brand}>
            <div className={classes.brandContent}>
              <Card className={`border-0 ${classes.titleContainer}`}>
                <div className={classes.title}>Demo - Login Website</div>
              </Card>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            className={classes.navbarToggle}
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav className={classes.navCollapse} navbarScroll>
              <Nav.Link
                as="div"
                onClick={handleTheme}
                className={`${classes.navLink} ${classes.asDiv}`}
              >
                <span className={classes.btnIcon}>
                  <span className={`d-lg-none me-2 ${classes.text}`}>
                    {!isLight ? "Move to light theme" : "Move to dark theme"}
                  </span>
                  {!isLight ? (
                    <BsSunFill size="1.6rem" />
                  ) : (
                    <BsMoon size="1.3rem" />
                  )}
                </span>
              </Nav.Link>
              <div className={classes.divider} />

              <span className={`${classes.help}`}>Need help ?</span>
              <Nav.Link
                as="div"
                className={`${classes.navLink} ${classes.asDiv} ${classes.contactUs} `}
              >
                <Button className={classes.contactUsBtn}>Contact Us</Button>
              </Nav.Link>
              {userName && (
                <NavDropdown
                  // drop="start"
                  id="navbarDropdown"
                  className={classes.navbarDropdown}
                  title={
                    <div className={classes.accountCountainer}>
                      <div className={classes.userContainer}>
                        <div className={classes.user}>&nbsp;{userName}</div>
                        {userPosition && (
                          <div className={classes.profession}>
                            {userPosition}
                          </div>
                        )}
                      </div>
                      {/* <div className={classes.imgContainer}>
                        <Image
                          alt="User Profile"
                          roundedCircle
                          className={classes.img}
                          src={
                            `${process.env.PUBLIC_URL}/no-profile-picture.png`
                          }
                          // src={require('../../assets/images/jpeg/user.jpeg')}
                          onError={(event) => {
                            event.target.onerror = null;
                            event.target.src = `${process.env.PUBLIC_URL}/no-profile-picture.png`;
                          }}
                        />
                      </div> */}
                    </div>
                  }
                >
                  <div className={classes.navbarDropdownContainer}>
                    <NavDropdown.Item
                      as="div"
                      onClick={handleProfile}
                      className={`${classes.asDiv} ${classes.menuitem}`}
                    >
                      <AiOutlineProfile size="1.2rem" />
                      &nbsp;&nbsp;<span>Profile</span>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      as="div"
                      onClick={handleLogOut}
                      className={`${classes.asDiv} ${classes.menuitem}`}
                    >
                      <AiOutlineLogout size="1.2rem" />
                      &nbsp;&nbsp;<span>Logout</span>
                    </NavDropdown.Item>
                  </div>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopBar;
