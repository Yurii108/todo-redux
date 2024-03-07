import React from "react";
import { useSelector } from "react-redux";
import { ITodoState } from "../../redux/reducers"; // Replace with the actual path to your RootState type

import { TodoItem } from "../TodoItem";

export const TodoList: React.FC = () => {
  const filteredTodos = useSelector((state: ITodoState) => {
    const todos = state.todos;
    const filter = state.filter;
    const searchTerm = state.searchTerm;

    return todos.filter((todo) => {
      const matchesFilter =
        (filter === "COMPLETED" && todo.completed) ||
        (filter === "INCOMPLETE" && !todo.completed) ||
        filter === "ALL";

      const matchesSearch = todo.text.toLowerCase().includes(searchTerm);

      return matchesFilter && matchesSearch;
    });
  });

  console.log(filteredTodos);

  return (
    <ul className="todo-list">
      <li key="some-key">All Your Notes Here...</li>
      {filteredTodos?.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </ul>
  );
};
