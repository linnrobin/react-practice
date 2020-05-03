import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodo } from "../store/actions";

function TodoDetail() {
  const { todoId } = useParams();
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(fetchTodo(todoId));
  }, [dispatch, todoId]);

  return (
    <>
      <div className="border m-3">
        <h3>ID: {todo.id}</h3>
        <h1>{todo.title}</h1>
        <h6>STATUS: {JSON.stringify(todo.completed)}</h6>
        <h6>UserId: {todo.userId}</h6>
        <Link to="/todos">
          <button className="btn btn-primary">Back</button>
        </Link>
      </div>
    </>
  );
}
export default TodoDetail;
