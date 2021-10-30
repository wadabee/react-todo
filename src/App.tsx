import React, { useReducer } from "react";
import InputForm from "./components/InputForm";
import TodoTable from "./components/TodoTable";
import { reducer } from "./reducers/todo";

const App: React.FC = () => {
  const [todos, dispatch] = useReducer(reducer, []);

  const isEmpty = (): boolean => todos.length === 0;

  return (
    <div className="m-6 mx-12">
      <p className="text-7xl text-center">ToDo List</p>
      <div className="my-3 text-3xl">タスク件数：{todos.length}件</div>

      <InputForm dispatch={dispatch} />

      {isEmpty() ? (
        <div className="pt-3 text-xl text-center">
          タスクが登録されていません。
        </div>
      ) : (
        <TodoTable todos={todos} dispatch={dispatch} />
      )}
    </div>
  );
};

export default App;
