import React, { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";
import TopBar from "../components/TopBar";
import apiFetch from "../config/apiFetch";
import { useCookies } from "react-cookie";
import Items from "../components/Items";

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

const Dashboard = () => {
  const classes = useStyles();
  const [cookies, setCookie] = useCookies(["token"]);
  const [todos, setTodos] = useState([])

  apiFetch
    .get("/api/todos", {
      headers: { Authorization: cookies.token },
    })
    .then((res) => setTodos(res.data))
    .catch((err) => console.error(err));


  return (
    <div className={classes.root}>
        <TopBar/>   
        <Items todos={todos}/>   
    </div>
  );
};

export default Dashboard;
