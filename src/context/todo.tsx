import React, { createContext, useContext, useReducer } from "react";
import { ActionType, reducer, TodoAction, TodoState } from "../reducers/todo";

export type TodoContextType = {
  todos: TodoState;
  dispatch: React.Dispatch<TodoAction>;
};
const initialState: TodoState = [];

export const TodoContext = createContext({} as TodoContextType);

export const TodoProvider = (props: React.PropsWithChildren<{}>) => {
  const [todos, dispatch] = useReducer(reducer, initialState);

  return <TodoContext.Provider value={{ todos, dispatch }} {...props} />;
};

export const useTodo = () => {
  const { todos, dispatch } = useContext(TodoContext);

  const removeTodo = (idx: number) => {
    dispatch({
      type: ActionType.REMOVE_TODO,
      removeIndex: idx,
    });
  };

  const doneTodo = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    dispatch({
      type: ActionType.SET_DONE,
      payload: {
        doneIndex: idx,
        isDone: e.target.checked,
      },
    });
  };
  return { todos, dispatch, removeTodo, doneTodo };
};
