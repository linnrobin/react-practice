import axios from "axios";

export const SET_TODOS = "SET_TODOS";
export const SET_TODO = "SET_TODO";

export const setTodos = (data) => {
  return { type: SET_TODOS, payload: data };
};
export const setTodo = (data) => {
  return { type: SET_TODO, payload: data };
};

export const fetchTodos = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3000/todos")
      .then(({ data }) => dispatch(setTodos(data)))
      .catch((err) => console.log(err));
  };
};

export const fetchTodo = (todoId) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3000/todos/${todoId}`)
      .then(({ data }) => dispatch(setTodo(data)))
      .catch((err) => console.log(err));
  };
};

export const addTodo = (newTodo) => {
  return () => {
    axios
      .post("http://localhost:3000/todos", {
        userId: +newTodo.userId,
        title: newTodo.title,
        completed: newTodo.completed,
      })
      .then(({ data }) => console.log("sukses added", data))
      .catch((err) => console.log(err));
  };
};

export const deleteTodo = (todoId) => {
  return () => {
    axios
      .delete(`http://localhost:3000/todos/${todoId}`)
      .then(({ data }) => console.log("sukses deleted", data))
      .catch((err) => console.log(err));
  };
};

export const updateTodo = (todoId, newUpdated) => {
  return () => {
    axios
      .put(`http://localhost:3000/todos/${todoId}`, {
        userId: +newUpdated.userId,
        title: newUpdated.title,
        completed: newUpdated.completed,
      })
      .then(({ data }) => console.log("sukses updated", data))
      .catch((err) => console.log(err));
  };
};
