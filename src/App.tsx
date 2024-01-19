import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./action";
import { RootState } from "./store";

const App = () => {
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default App;
