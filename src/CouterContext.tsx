import React, {
  createContext,
  useContext,
  PropsWithChildren,
  useState,
} from 'react';

const CounterContext = createContext({});

export type ICounterContext = {
  count: number;
  increament: () => void;
  decreament: () => void;
};

export const useCount: () => ICounterContext = () =>
  useContext(CounterContext as any);

export const CounterProvide = (props: PropsWithChildren<{}>) => {
  let [count, setCount] = useState(0);

  return (
    <CounterContext.Provider
      value={
        {
          count: count,
          increament: () => setCount(count + 1),
          decreament: () => setCount(count - 1),
        } as ICounterContext
      }>
      {props.children}
    </CounterContext.Provider>
  );
};
