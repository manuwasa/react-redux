// import { createStore } from "redux";

// const reducerFn = (state = { counter: 0 }, action) => {
//   // Always Synchronous Function
//   // We should not mutate the original state

//   if (action.type === "INC") {
//     return { counter: state.counter + 1 };
//   }

//   if (action.type === "DEC") {
//     return { counter: Math.max(0, state.counter - 1) };
//   }
//   if (action.type === "ADD") {
//     return { counter: state.counter + action.payload };
//   }
//   if (action.type === "RES") {
//     return { counter: (state.counter = 0) };
//   }

//   return state;
// };

// const store = createStore(reducerFn);

// export default store;

import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
      state.counter++;
    },
    decrement(state, action) {
      if (state.counter > 0) {
        state.counter--;
      }
    },
    addBy(state, action) {
      state.counter += action.payload;
    },
    reset(state, action) {
      state.counter *= 0;
    },
  },
});

export const actions = counterSlice.actions;
const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
