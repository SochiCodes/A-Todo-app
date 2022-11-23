import TodoDate from "./TodoDate";
import "./TodoItem.css"

const TodoItem = (props) => {
  return (
    <div className="todo-item">
      <TodoDate date={props.date}></TodoDate>
      <div>
        <h2 className="todo-item__description">{props.title}</h2>
      </div>
    </div>
  );
};
export default TodoItem;
