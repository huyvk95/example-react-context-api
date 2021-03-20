import {useCount} from './CouterContext';

const CounterComponent = () => {
  let {count, decreament, increament} = useCount();

  return (
    <div>
      <p>{count}</p>
      <button onClick={increament}>Increament</button>
      <button onClick={decreament}>Decreament</button>
    </div>
  );
};

export default CounterComponent;
