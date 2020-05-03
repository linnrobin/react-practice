import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo, fetchTodo } from "../store/actions";
import { useHistory, useParams } from "react-router-dom";

function UpdateTodo() {
  const { todoId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const newUpdated = {};
  const todo = useSelector((state) => state.todo);

  let [updateTitle, setUpdateTitle] = useState(todo.id);
  const [updateUserId, setUpdateUserId] = useState(todo.userId);
  const [updateCompleted, setUpdateCompleted] = useState(todo.completed);

  useEffect(() => {
    dispatch(fetchTodo(todoId));
  }, [dispatch, todoId]);

  function handleUpdateTodo(event) {
    event.preventDefault();

    newUpdated.title = updateTitle;
    newUpdated.userId = updateUserId;
    newUpdated.completed = updateCompleted;

    dispatch(updateTodo(todoId, newUpdated));
    history.push("/todos");
  }

  const handleUpdateTitle = (event) => {
    setUpdateTitle(event.target.value);
  };

  const handleUpdateUserId = (event) => {
    setUpdateUserId(event.target.value);
  };

  const handleUpdateCompleted = (event) => {
    setUpdateCompleted(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleUpdateTodo}>
        <input type="text" value={updateTitle} onChange={handleUpdateTitle} />
        <input
          type="number"
          value={updateUserId}
          onChange={handleUpdateUserId}
        />
        <select value={updateCompleted} onChange={handleUpdateCompleted}>
          <option value="false">False</option>
          <option value="true">True</option>
        </select>
        <button type="submit">Update</button>
      </form>
    </>
  );
}

export default UpdateTodo;
