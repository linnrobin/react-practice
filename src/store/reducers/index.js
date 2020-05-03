import { SET_TODOS, SET_TODO } from "../actions";

const initialState = {
  todos: [],
  todo: {},
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_TODOS:
      return { ...state, todos: payload };
    case SET_TODO:
      return { ...state, todo: payload };
    default:
      break;
  }
  return state;
}
export default reducer;
