import React, { useState } from "react";
import { useTodo } from "../context/todo";
import { ActionType } from "../reducers/todo";

const InputForm: React.FC = () => {
  const { dispatch } = useTodo();

  const [content, setContent] = useState<string>("");
  const [note, setNote] = useState<string>("");

  const inputContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const inputNote = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const addTodo = () => {
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

  const removeAll = () => {
    dispatch({
      type: ActionType.REMOVE_ALL,
    });
  };

  return (
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

      <button className="btn-blue" onClick={addTodo}>
        タスク追加
      </button>
      <button className="btn-red" onClick={removeAll}>
        全削除
      </button>
    </div>
  );
};

export default InputForm;
