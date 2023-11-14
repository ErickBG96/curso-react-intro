import { useState } from "react";
import { AppUI } from "./AppUI";
import { useLocalStorage } from "./useLocalStorage";

function App() {
  const [todos, setTodos] = useLocalStorage("DB_TODO_V1", []);
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo) => todo.completed === true).length;
  const totalTodos = todos.length;

  const searchedTodo = todos.filter((todo) => {
    const removeAccents = (text) => {
      return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };

    const todoText = removeAccents(todo.text.toLocaleLowerCase());
    const searchText = removeAccents(searchValue.toLocaleLowerCase());

    return todoText.includes(searchText);
  });

  const completedTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <AppUI
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchedTodo={searchedTodo}
      completedTodo={completedTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
