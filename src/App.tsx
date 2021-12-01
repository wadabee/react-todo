import React, { useState } from "react";
import InputForm from "./components/InputForm";
import TodoCard from "./components/TodoCard";
import TodoTable from "./components/TodoTable";
import ViewButton from "./components/ViewButton";
import { useTodo } from "./context/todo";

const App: React.FC = () => {
  const { todos } = useTodo();
  const [isListView, setIsListView] = useState(true);

  const isEmpty = (): boolean => todos.length === 0;

  return (
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
  );
};

export default App;
