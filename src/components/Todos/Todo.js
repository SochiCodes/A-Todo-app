import TodoItem from "./TodoItem";
import "./Todo.css";

const Todo = (props) => {
  return (
    <div className="todo">
      {props.items.map((todo) => (
        <TodoItem key={todo.id} title={todo.title} date={todo.date} />
      ))}
    </div>
  );
};
export default Todo;
