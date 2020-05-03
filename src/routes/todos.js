import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import TodoList from "../views/TodoList";
import AddTodo from "../views/AddTodo";
import UpdateTodo from "../views/UpdateTodo";
import TodoDetail from "../views/TodoDetail";

function Todos() {
  let { path, url } = useRouteMatch();
  return (
    <>
      <Link to={`${url}/addTodo`}>Add To Do</Link>
      <Switch>
        <Route exact path={path}>
          <TodoList />
        </Route>
        <Route path={`${path}/addTodo`}>
          <AddTodo />
        </Route>
        <Route path={`${path}/:todoId/updateTodo`}>
          <UpdateTodo />
        </Route>
        <Route path={`${path}/:todoId`}>
          <TodoDetail />
        </Route>
      </Switch>
    </>
  );
}
export default Todos;
