import React from "react";
import { Action, ActionType, Todos } from "../reducers/todo";

type Props = {
  todos: Todos;
  dispatch: React.Dispatch<Action>;
};

const TodoCard: React.FC<Props> = ({ todos, dispatch }) => {
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
    <div className="grid grid-cols-4 gap-4">
      {todos.map((todo, idx) => (
        <div
          key={idx}
          className="border rounded p-3 bg-gradient-to-br from-gray-100 to-blue-200 "
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
            <button className="btn-red" onClick={() => removeTodo(idx)}>
              削除
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoCard;
