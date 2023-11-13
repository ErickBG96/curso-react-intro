import { TodoCounter } from "./TodoCounter.js";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButton } from "./CreateTodoButton.js";

import "./App.css";

const defaultTodos = [
  { text: "Curso React", completed: false },
  { text: "Curso Node.js", completed: false },
  { text: "Curso Next.js", completed: true },
  { text: "Curso Talwindcss", completed: true },
];

function App() {
  return (
    <>
      <TodoCounter completed={16} total={26} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo,index) => (
          <TodoItem key={index} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
