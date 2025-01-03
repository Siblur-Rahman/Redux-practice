import { Button } from "./components/ui/button";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  return (
    <div>
      <h1>Counter With Redux</h1>

      <Button onClick={() => dispatch(increment(5))}>Increment by 5</Button>
      <Button onClick={() => dispatch(increment(1))}>Increment</Button>
      <div>{count}</div>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
    </div>
  );
}

export default App;
