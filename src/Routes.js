import  Dashboard  from "./pages/Dashboard";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Auth from '../src/auth/index'
import Register from '../src/auth/Register'

const Routes = () => {
    
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Auth} />
                <Route path="/dashboard"  component={Dashboard} />
                <Route path="/register" component={Register} />
            </Switch>
        </Router>
    )
}

export default Routes