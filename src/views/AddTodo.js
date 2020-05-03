import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/actions";
import { useHistory } from "react-router-dom";

function AddTodo() {
  const dispatch = useDispatch();
  const history = useHistory();
  const newTodo = {};
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newTodoUserId, setNewTodoUserId] = useState("");
  const [newTodoCompleted, setNewTodoCompleted] = useState(false);

  function handleAddTodo(event) {
    event.preventDefault();

    newTodo.title = newTodoTitle;
    newTodo.userId = newTodoUserId;
    newTodo.completed = newTodoCompleted;

    dispatch(addTodo(newTodo));

    setNewTodoTitle("");
    setNewTodoUserId("");
    setNewTodoCompleted(false);
    history.push("/todos");
  }
  const handleNewTodoTitle = (event) => {
    setNewTodoTitle(event.target.value);
  };

  const handleNewTodoUserId = (event) => {
    setNewTodoUserId(event.target.value);
  };

  const handleNewTodoCompleted = (event) => {
    setNewTodoCompleted(event.target.value);
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        value={newTodoTitle}
        onChange={handleNewTodoTitle}
        placeholder="New Todo here..."
      />
      <input
        type="number"
        value={newTodoUserId}
        onChange={handleNewTodoUserId}
        placholder="1"
      />
      <select value={newTodoCompleted} onChange={handleNewTodoCompleted}>
        <option value="false">False</option>
        <option value="true">True</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;
