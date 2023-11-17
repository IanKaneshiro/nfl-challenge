import {
  // increment,
  decrement,
  incrementAsync,
  multiplyByTwo,
} from "../store/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>This is the count! {count}</h2>
      <div>
        <button onClick={() => dispatch(incrementAsync(10))}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(multiplyByTwo())}>
          Multiply by two
        </button>
      </div>
    </div>
  );
};

export default Counter;
