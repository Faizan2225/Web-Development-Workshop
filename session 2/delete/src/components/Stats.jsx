import { useTodos } from "../context/TodoContext";

// Stats component - displays todo statistics from context
const Stats = () => {
  // Get calculated stats from context
  const { totalTodos, completedTodos, remainingTodos } = useTodos();

  return (
    <div className="stats">
      <span>Total: {totalTodos}</span>
      <span>Completed: {completedTodos}</span>
      <span>Remaining: {remainingTodos}</span>
    </div>
  );
};

export default Stats;
