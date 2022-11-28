import React, { useState } from "react";

import "./TodoForm.css";

const TodoForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const todoData = {
      title: enteredTitle,
      date: new Date(enteredDate),
    };
    props.onSaveTodoData(todoData);
    setEnteredTitle("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className=".new-todo__controls">
        <div className="new-todo__control">
          <label>The things I need to do</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-todo__control">
          <label> Date </label>
          <input
            type="date"
            min="2020-01-01"
            max="2027-01-01"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-todo-action">
          <button type="submit">Add Todo</button>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
