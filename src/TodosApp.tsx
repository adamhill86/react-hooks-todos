import React, { useEffect, useReducer } from 'react';
import { appReducer } from './app-reducer';
import { Action, Type } from './todos';
import TodosList from './TodosList';
import { useEffectOnce } from './use-effect-once';

export const Context = React.createContext<React.Dispatch<Action>>(() => {});

const TodosApp: React.FC = () => {
  const [state, dispatch] = useReducer(appReducer, []);

  useEffectOnce(() => {
    const raw = localStorage.getItem('data');
    dispatch({ type: Type.Reset, payload: JSON.parse(raw) });
  });

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(state));
  }, [state]);

  return (
    <Context.Provider value={dispatch}>
      <h1>Todos App</h1>
      <button onClick={() => dispatch({ type: Type.Add })}>New Todo</button>
      <TodosList items={state} />
    </Context.Provider>
  );
};

export default TodosApp;
