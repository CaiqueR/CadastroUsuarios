import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import UserCrud from "../components/user/UserCrud";
import Home from "../components/Home/Home";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/users" component={UserCrud} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default Routes;
