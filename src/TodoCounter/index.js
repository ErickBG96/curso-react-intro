import { TodoContext } from "../TodoContext";
import { useContext } from "react";

function TodoCounter() {
  const { totalTodos, completedTodos } = useContext(TodoContext);

  return (
    <h2  className="text-gray-400 border-b pb-2">
      {completedTodos} completas de {totalTodos}
    </h2>
  );
}

export { TodoCounter };
