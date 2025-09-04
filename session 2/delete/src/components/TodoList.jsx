import { useTodos } from "../context/TodoContext";
import TodoItem from "./TodoItem";

// TodoList component - gets todos from context, renders list of TodoItems
const TodoList = () => {
  // Get todos from context
  const { todos } = useTodos();

  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p className="empty-message">No todos yet! Add one above.</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo} // Pass todo as prop to child component
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
