import TodoDate from "./TodoDate";

const TodoItem = (props) => {
  return (
    <div className="todo-item">
      <TodoDate date={props.date}></TodoDate>
      <div>
        <h2 className="todo-item__description">{title}</h2>z@
      </div>
    </div>
  );
};
export default TodoItem;
