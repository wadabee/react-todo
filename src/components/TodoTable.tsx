import React, { useContext } from "react";
import { TodoContext } from "../App";
import { Action, ActionType, Todos } from "../reducers/todo";

type Props = {
  todos: Todos;
  dispatch: React.Dispatch<Action>;
};

const TodoTable: React.FC = () => {
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
          <tr key={idx} className={todo.isDone ? "line-through" : ""}>
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
