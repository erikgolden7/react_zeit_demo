import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Todos from "./Todos";
import EditTodos from "./EditTodos";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/todos" component={Todos} />
    <Route path="/edit_todos" component={EditTodos} />
  </Switch>
);
