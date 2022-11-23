import React from "react";
import "./NewTodo.css";
import TodoForm from "./TodoForm";

const NewTodo = (props) => {
  const saveTodoDataHandler = (enteredTodoData) => {
    const TodoData = {
      ...enteredTodoData,
      id: Math.random.toString(),
    };
    props.onAddTodo(TodoData);
  };

  return (
    <div className="new-todo">
      <TodoForm onSaveTodoData={saveTodoDataHandler} />
    </div>
  );
};

export default NewTodo;
