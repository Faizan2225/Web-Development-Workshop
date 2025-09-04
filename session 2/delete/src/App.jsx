import "./App.css";
import { TodoProvider } from "./context/TodoContext";
import Header from "./components/Header";
import Stats from "./components/Stats";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { About } from "./About";

// Main App component - now uses modular components and Context API
function App() {
  return (
    // Wrap the entire app with TodoProvider to provide context to all children
    <TodoProvider>
      <div className="app">
        <div className="todo-container">
          {/* Header component with props */}
          <Header
            title="Modular Todo App"
            subtitle="Built with React Context API & Components"
          />

          {/* Stats component - gets data from context */}
          <Stats />

          {/* AddTodo component - manages its own state, uses context for actions */}
          <AddTodo />

          {/* TodoList component - gets todos from context, renders TodoItems */}
          <TodoList />
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
