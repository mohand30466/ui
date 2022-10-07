import "./header.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import image from "./images/Yashirlogo.png";

import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Container } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  links: {
    margin: 20,
    background: "#e63946",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

export const Header = () => {
  const [active, setActive] = useState(false);
  const rememberMe = JSON.parse(localStorage.getItem("data"));
  const navigate = useNavigate();
  const url = "http://127.0.0.1:8000";
  const classes = useStyles();

  return (
    <>
      <div className="header_container">
        <div className="header">
          <div className="logo" onClick={(e) => {navigate("/")
          setActive(false)}}></div>
          <div onClick={(e) => setActive(!active)} className="burgerContainer">
            <span className="icon"></span>
          </div>

          <div className={active ? "link-containerActive" : "links_container"}>
            <ul className="links">
              {rememberMe ? (
                <li className="home" onClick={(e) => setActive(false)}>
                  <Link to="/home">Home </Link>
                </li>
              ) : null}
              <li onClick={(e) => setActive(false)}>
                <Link to="/about">About us</Link>
              </li>
              <li onClick={(e) => setActive(false)}>
                <Link to="/contact">Contact</Link>
              </li>
              <li onClick={(e) => setActive(false)}>
                <Link to="/Pricing">Pricing</Link>
              </li>
              <li onClick={(e) => setActive(false)}>
                <Link to="/Plog">Plog</Link>
              </li>
              <li onClick={(e) => setActive(false)}>
                <Link to="/Agreements">Agreements</Link>
              </li>
            </ul>

            {rememberMe ? (
              <div className="rightsideheader" onClick={(e) => setActive(false)}>
                {" "}
                <button
                  className="logout"
                  onClick={(e) => {
                    localStorage.removeItem("data");
                    navigate("./");
                  }}
                >
                  SignOut
                </button>
                <Link to="/account" onClick={(e) => setActive(false)}>
                  {rememberMe.user ? (
                    <img
                      className="account"
                      src={url + rememberMe.user.profile.image}
                      alt={rememberMe.id}
                    />
                  ) : (
                    <img className="account" src={image} alt="1" />
                  )}
                </Link>
              </div>
            ) : (
              <div className="auth" onClick={(e) => setActive(false)}>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.links}
                  onClick={(e) => {navigate("/signin")
                  setActive(false)}}
                >
                  signIn
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.links}
                  onClick={(e) => {navigate("/signup")
                setActive(false)}}
                >
                  Register
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
