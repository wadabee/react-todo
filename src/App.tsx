import React, { useReducer, useState } from "react";
import { ActionType, reducer } from "./reducers/todo";

function App() {
  const [content, setContent] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [todos, dispatch] = useReducer(reducer, []);

  const inputContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const inputNote = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const addTask = () => {
    dispatch({
      type: ActionType.ADD_TODO,
      payload: {
        content: content,
        note: note,
      },
    });
    setContent("");
    setNote("");
  };
  const removeTodo = (idx: number) => {
    dispatch({
      type: ActionType.REMOVE_TODO,
      removeIndex: idx,
    });
  };
  const removeAll = () => {
    dispatch({
      type: ActionType.REMOVE_ALL,
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
    <div className="m-6 mx-12">
      <p className="text-7xl text-center">ToDo List</p>
      <div className="my-3 text-3xl">タスク件数：{todos.length}件</div>

      <div>
        <span className="px-3">
          <label htmlFor="todo" className="mr-2">
            ToDo
          </label>
          <input
            id="todo"
            className="text-input"
            value={content}
            onChange={(e) => inputContent(e)}
          />
        </span>

        <span className="px-3">
          <label htmlFor="note" className="mr-2">
            備考
          </label>
          <input
            id="note"
            className="text-input"
            value={note}
            onChange={(e) => inputNote(e)}
          />
        </span>

        <button className="btn-blue" onClick={addTask}>
          タスク追加
        </button>
        <button className="btn-red" onClick={removeAll}>
          全削除
        </button>
      </div>

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
    </div>
  );
}

export default App;
