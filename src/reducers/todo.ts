import React from "react";

export type Todo = {
  content: string;
  note?: string;
  isDone?: boolean;
};

export type Todos = Array<Todo>;

export type State = Todos;
export enum ActionType {
  ADD_TODO,
  REMOVE_TODO,
  REMOVE_ALL,
  SET_DONE,
}
export type Action =
  | {
      type: ActionType.ADD_TODO;
      payload: Todo;
    }
  | {
      type: ActionType.REMOVE_TODO;
      removeIndex: number;
    }
  | {
      type: ActionType.REMOVE_ALL;
    }
  | {
      type: ActionType.SET_DONE;
      payload: {
        doneIndex: number;
        isDone: boolean;
      };
    };

export const reducer: React.Reducer<State, Action> = (
  state: State,
  action: Action
) => {
  switch (action.type) {
    case ActionType.ADD_TODO:
      return [
        ...state,
        {
          content: action.payload.content,
          note: action.payload.note,
        },
      ];
    case ActionType.REMOVE_TODO:
      const tmp = [...state];
      tmp.splice(action.removeIndex, 1);
      return tmp;
    case ActionType.REMOVE_ALL:
      return [];
    case ActionType.SET_DONE:
      let tmp1 = [...state];
      tmp1[action.payload.doneIndex].isDone = action.payload.isDone;
      return tmp1;
  }
};
