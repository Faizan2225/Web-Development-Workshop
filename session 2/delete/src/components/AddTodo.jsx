import { useState } from "react";
import { useTodos } from "../context/TodoContext";

// AddTodo component - manages its own input state, uses context for adding todos
const AddTodo = () => {
  const [inputText, setInputText] = useState("");

  // Get addTodo function from context
  const { addTodo } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      addTodo(inputText.trim());
      setInputText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Add a new todo..."
        className="todo-input"
      />
      <button type="submit" className="add-btn">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
