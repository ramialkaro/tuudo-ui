import Dashboard from "./pages/Dashboard";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Auth from "../src/auth/index";
import Register from "../src/auth/Register";
import { useCookies } from "react-cookie";

const SecureRoute = ({ component: Component, ...rest }) => {
  const [cookies, setCookie] = useCookies(["token"]);
  return cookies.token ? (
    <Route {...rest} component={Component} />
  ) : (
    <Redirect to="/" />
  );
};

const Routes = () => {
  const [cookies, setCookie] = useCookies(["token"]);

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Auth} />
        <SecureRoute path="/dashboard" component={Dashboard} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
};

export default Routes;
