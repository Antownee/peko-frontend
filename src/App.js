import React from "react";
import { Router, Route } from "react-router-dom";
import { PrivateRoute } from "./views/PrivateRoute";
import { history } from './redux/helpers/history'
import LoginPage from './views/LoginPage';
import RegisterPage from "./views/RegisterPage";

import routes from "./routes";
import withTracker from "./withTracker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";

export default () => (
  <Router basename={process.env.REACT_APP_BASENAME || ""} history={history}>
    <div>
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      {routes.map((route, index) => {
        return (
          <PrivateRoute
            key={index}
            path={route.path}
            exact={route.exact}
            component={withTracker(props => {
              return (
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              );
            })}
          />
        );
      })}
    </div>
  </Router>
);
