import { useTodos } from "../context/TodoContext";

// TodoItem component - receives todo as prop, uses context for actions
const TodoItem = ({ todo }) => {
  // Get functions from context instead of props
  const { toggleTodo, deleteTodo } = useTodos();

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="todo-checkbox"
      />
      <span className="todo-text">{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
