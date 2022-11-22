import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const increment = () => {
    dispatch({ type: "INC" });
  };
  const decrement = () => {
    dispatch({ type: "DEC" });
  };
  const addBy = (value) => {
    dispatch({ type: "ADD", payload: value });
  };
  const reset = () => {
    dispatch({ type: "RES", payload: 0 });
  };

  const handleInput = (e) => {
    e.preventDefault();
    if (!inputValue) {
      return alert("Please input your number first");
    }
    addBy(parseInt(inputValue));
    setInputValue("");
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <form onSubmit={handleInput}>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button>Add Manual</button>
      </form>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
