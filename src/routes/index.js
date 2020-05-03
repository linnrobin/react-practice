import React from "react";
import { Switch, Route } from "react-router-dom";
import Todos from "./todos";

function Routes() {
  return (
    <Switch>
      <Route path="/todos">
        <Todos />
      </Route>
      <Route exact path="/">
        This is Home
      </Route>
    </Switch>
  );
}

export default Routes;
