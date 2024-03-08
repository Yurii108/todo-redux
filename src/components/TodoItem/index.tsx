import React from "react";

import "./style.scss";
import { useDispatch } from "react-redux";
import { markCompleted, markIncomplete, removeTodo, toggleTodo } from "../../redux/actions";
import { ITodoState } from "../../redux/reducers";
import { Button } from "antd";

interface TodoItemProps {
  todo: ITodoState["todos"][0];
  index: number;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, index }) => {
  const dispatch = useDispatch();

  return (
    <li className="todo-item">
      <div className="title">
        <span>{index + 1}.</span>
        <p
          className={`${todo.completed ? "completed" : ""}`}
          onClick={() => dispatch(toggleTodo(todo.id))}
        >
          {todo.text}
        </p>
      </div>
      <div className="buttons">
        <Button danger type="link" size="small" onClick={() => dispatch(removeTodo(todo.id))}>
          Remove
        </Button>
        &nbsp;
        {!todo.completed && (
          <Button
            ghost
            type="primary"
            size="small"
            onClick={() => {
              dispatch(markCompleted(todo.id));
            }}
          >
            Completed
          </Button>
        )}
        {todo.completed && (
          <Button
            ghost
            type="primary"
            size="small"
            onClick={() => dispatch(markIncomplete(todo.id))}
          >
            Incomplete
          </Button>
        )}
      </div>
    </li>
  );
};
