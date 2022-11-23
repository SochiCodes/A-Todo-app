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
      return [todo, ...prevTodos];
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


const promise_timeout = (action, msg, ttl) => {
  return new Promise((res) => {
    setTimeout(() => res(Promise[action](msg)), 1000 * ttl);
  });
};

const timeout = () => {
  Promise.allSettled([
    promise_timeout("resolve", "success", 3),
    promise_timeout("resolve", "success", 5),
    promise_timeout("reject", "Error", 7),
  ])
    .then((res) => console.log(res))
    .catch((err) => console.log(`An error occurred: [${err}]`));
};

timeout();
