import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTodo, fetchTodos } from "../store/actions";

function TodoCard({ todo }) {
  const dispatch = useDispatch();

  function handleDeleteTodo(event) {
    event.preventDefault();
    dispatch(deleteTodo(todo.id));
    setTimeout(() => {
      dispatch(fetchTodos());
    }, 100);
  }
  return (
    <>
      <div className="border m-3 p-3">
        <h1>
          {todo.id}. {todo.title}
        </h1>

        <Link to={`/todos/${todo.id}`}>
          <button className="btn btn-primary">Detail</button>
        </Link>
        <Link to={`/todos/${todo.id}/updateTodo`}>
          <button className="btn btn-success">update</button>
        </Link>
        <button className="btn btn-danger" onClick={handleDeleteTodo}>
          Delete
        </button>
      </div>
    </>
  );
}
export default TodoCard;
