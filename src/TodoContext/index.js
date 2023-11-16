import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const {
    item: todos,
    saveItem: setTodos,
    loading,
    error,
  } = useLocalStorage("DB_TODO_V1", []);
  const [searchValue, setSearchValue] = useState("");

  const [openModal, setOpenModal] = useState(false);

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

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    setTodos(newTodos);
  }

  return (
    <TodoContext.Provider
      value={{
        searchValue,
        setSearchValue,
        totalTodos,
        completedTodos,
        searchedTodo,
        completedTodo,
        deleteTodo,
        loading,
        error,
        openModal,
        setOpenModal,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
