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
                <Route path="/register" component={Register} />
            </Switch>

        </Router>
    )
}

export default Routes