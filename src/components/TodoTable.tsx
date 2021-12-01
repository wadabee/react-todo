import React from "react";
import { useTodo } from "../context/todo";

const TodoTable: React.FC = () => {
  const { todos, doneTodo, removeTodo } = useTodo();

  return (
    <table className="table-fixed">
      <thead>
        <tr>
          <th className="w-1/6"></th>
          <th className="w-2/6">ToDo</th>
          <th className="w-2/6">備考</th>
          <th className="w-1/6"></th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, idx) => (
          <tr
            key={idx}
            className={todo.isDone ? "line-through appear" : "appear"}
          >
            <td>
              <input
                type="checkbox"
                checked={todo.isDone}
                onChange={(e) => doneTodo(e, idx)}
              />
            </td>
            <td>{todo.content}</td>
            <td>{todo.note}</td>
            <td>
              <button className="btn-red" onClick={() => removeTodo(idx)}>
                削除
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TodoTable;
