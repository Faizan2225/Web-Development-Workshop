import { createContext, useContext, useState } from "react";

// 1. Create the Context
const TodoContext = createContext();

// 2. Create a custom hook to use the context
export const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodos must be used within a TodoProvider");
  }
  return context;
};

// 3. Create the Provider component
export const TodoProvider = ({ children }) => {
  // State to store all todos
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React basics", completed: false },
    { id: 2, text: "Build a todo app", completed: false },
    { id: 3, text: "Practice useState hook", completed: true },
    { id: 4, text: "Learn Context API", completed: false },
  ]);

  // Function to add a new todo
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(), // Simple ID generation
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // Function to toggle todo completion
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Calculate stats
  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const remainingTodos = totalTodos - completedTodos;

  // Context value object
  const value = {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    totalTodos,
    completedTodos,
    remainingTodos,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
