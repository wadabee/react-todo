import React, { createContext, useReducer, useState } from "react";
import InputForm from "./components/InputForm";
import TodoCard from "./components/TodoCard";
import TodoTable from "./components/TodoTable";
import ViewButton from "./components/ViewButton";
import { Action, reducer, State } from "./reducers/todo";

type ContextType = {
  todos: State;
  dispatch: React.Dispatch<Action>;
};

const initialState: State = [];

export const TodoContext = createContext({} as ContextType);

const App: React.FC = () => {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [isListView, setIsListView] = useState(true);

  const isEmpty = (): boolean => todos.length === 0;

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <div className="m-6 mx-12">
        <p className="text-7xl text-center">ToDo List</p>
        <div className="my-3 text-3xl">タスク件数：{todos.length}件</div>

        <InputForm />

        <div className="flex justify-end mb-3">
          <ViewButton isListView={isListView} setIsListView={setIsListView} />
        </div>

        {isEmpty() ? (
          <div className="pt-3 text-xl text-center">
            タスクが登録されていません。
          </div>
        ) : isListView ? (
          <TodoTable />
        ) : (
          <TodoCard />
        )}
      </div>
    </TodoContext.Provider>
  );
};

export default App;
