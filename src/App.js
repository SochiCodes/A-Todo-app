import { useState } from "react";
import NewTodo from "./components/NewTodo/NewTodo";
import Todo from "./components/Todos/Todo";

const Dummy_Todo = [
  {
    id: "e1",
    title: "Take a walk",
    date: new Date(2021, 7, 18),
  },
  {
    id: "e2",
    title: "Attend a conference",
    date: new Date(2022, 12, 18),
  },
  {
    id: "e3",
    title: "Grant an interview",
    date: new Date(2022, 11, 18),
  },
  {
    id: "e4",
    title: "Upgrade my system",
    date: new Date(2023, 4, 18),
  },
];

const App = () => {
  const [todos, setTodos] = useState(Dummy_Todo);

  const addTodoHandler = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, todo];
    });
  };
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todo items={todos} />
    </div>
  );
};

export default App;
