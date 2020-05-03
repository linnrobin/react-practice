import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../store/actions";
import TodoCard from "../components/TodoCard";

function TodoList() {
  const dispatch = useDispatch();
  let todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      {todos.map((todo) => (
        <TodoCard todo={todo} key={todo.id} />
      ))}
    </>
  );
}

export default TodoList;
