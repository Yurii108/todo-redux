import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, markAllCompleted, updateSearchTerm } from "../../redux/actions";
import { Input, Button, Flex } from "antd";

import "./style.scss";
import { FilterByRadio } from "../FilterByRadio";
import { TodoList } from "../TodoList";
import { ITodoState } from "../../redux/reducers";

export const Todo: React.FC = () => {
  const dispatch = useDispatch();
  const store = useSelector((state: ITodoState) => state?.todos);

  const [newTodoText, setNewTodoText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddToDo = (text: string) => {
    dispatch(addTodo(text, Date.now()));
  };

  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== "" && newTodoText.length > 4) {
      handleAddToDo(newTodoText.trim());
      setNewTodoText("");
    } else {
      alert("Please, add at least 5 characters.");
    }
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };

  const countCompleted = store.filter((item) => item.completed).length;
  const countUncompleted = store.filter((item) => !item.completed).length;

  return (
    <section className="todo">
      <h1>ToDo List</h1>

      <div className="todo__container">
        <Flex gap={"small"}>
          <Input
            placeholder="Add new record"
            value={newTodoText}
            status={`${newTodoText.length === 0 ? "" : newTodoText.length > 4 ? "" : "error"}`}
            onChange={(e) => setNewTodoText(e.target.value)}
          />
          <Button type="primary" onClick={handleAddTodoClick}>
            Add
          </Button>
        </Flex>
        <br />
        <Flex gap={"small"} align="center" justify="space-between" wrap="wrap">
          <Flex gap={"small"} wrap="wrap">
            <FilterByRadio />
            <Button onClick={() => dispatch(markAllCompleted())}>Make All Completed</Button>
          </Flex>

          <Input
            style={{ width: "150px" }}
            placeholder="Search record"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
        </Flex>

        <div className="count-tasks">
          <div>
            Uncompleted: <span>{countUncompleted}</span>
          </div>
          <div>
            Completed: <span>{countCompleted}</span>
          </div>
        </div>

        <TodoList />
      </div>
    </section>
  );
};
