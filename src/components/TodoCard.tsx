import React, { useEffect, useState } from "react";
import { setTimeout } from "timers";
import { useTodo } from "../context/todo";

const TodoCard: React.FC = () => {
  const { todos, doneTodo, removeTodo } = useTodo();

  // useEffect(() => {
  //   setAppendClass(Array(todos.length).fill(""));
  // }, [todos]);

  // const [appendClass, setAppendClass] = useState<Array<string>>([]);

  const handlerDelete = (idx: number) => {
    removeTodo(idx);
    // const tmp = [...appendClass];
    // tmp[idx] = "disappear";
    // setAppendClass(tmp);

    // setTimeout(() => {
    //   removeTodo(idx);
    // }, 1000);
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {todos.map((todo, idx) => (
        <div
          key={idx}
          // className={`border rounded p-3 bg-gradient-to-br from-gray-100 to-blue-200 appear ${appendClass[idx]}`}
          className={`border rounded p-3 bg-gradient-to-br from-gray-100 to-blue-200 appear`}
        >
          <div>
            <input
              type="checkbox"
              checked={todo.isDone}
              onChange={(e) => doneTodo(e, idx)}
            />
            <span className="pl-2">完了</span>
          </div>
          <div className={`${todo.isDone && "line-through"}`}>
            <div>{todo.content}</div>
            <div>{todo.note}</div>
          </div>

          <div className="flex justify-end ">
            <button className="btn-red" onClick={() => handlerDelete(idx)}>
              削除
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoCard;
