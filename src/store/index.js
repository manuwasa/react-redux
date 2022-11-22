import { createStore } from "redux";

const reducerFn = (state = { counter: 0 }, action) => {
  // Always Synchronous Function
  // We should not mutate the original state

  if (action.type === "INC") {
    return { counter: state.counter + 1 };
  }

  if (action.type === "DEC") {
    return { counter: Math.max(0, state.counter - 1) };
  }
  if (action.type === "ADD") {
    return { counter: state.counter + action.payload };
  }
  if (action.type === "RES") {
    return { counter: (state.counter = 0) };
  }

  return state;
};

const store = createStore(reducerFn);

export default store;
