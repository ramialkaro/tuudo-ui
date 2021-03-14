import React, { useState, useEffect } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Typography, Button, Toolbar } from "@material-ui/core";
import { Redirect, Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import apiFetch from "../config/apiFetch";
import { useCookies } from "react-cookie";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const TopBar = () => {
  const classes = useStyles();
  const [isLoggedout, setLoggedout] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const handleLogout = () => {
    setLoggedout(true);
    removeCookie("token");
  };
  useEffect(() => {
    if (isLoggedout) {
      <Redirect to="/" exact/>;
    }
  }, [isLoggedout]);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button
            color="inherit"
            endIcon={<ExitToAppIcon fontSize="inherit" />}
            onClick={handleLogout}
            component={Link}
            to="/"
          >
            Log out
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default TopBar;
