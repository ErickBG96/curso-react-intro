import { TodoCounter } from "../TodoCounter/";
import { TodoSearch } from "../TodoSearch/";
import { TodoList } from "../TodoList/";
import { TodoItem } from "../TodoItem/";
import { CreateTodoButton } from "../CreateTodoButton/";
import { EmptyTodos } from "../EmptyTodos/";
import { TodosError } from "../TodosError/";
import { TodosLoading } from "../TodosLoading/";
import { TodoContext } from "../TodoContext/";
import {useContext} from 'react';
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
function AppUI() {
  const {
    error,
    loading,
    searchedTodo,
    completedTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  return (
    <main className="bg-black  text-white  h-screen w-full">
      <div className="flex flex-col text-left">
        <div className="w-full pl-6 pr-2.5">
          <div className="h-[48px] flex items-center">
            <TodoSearch />
          </div>
          <h1 className="text-[32px] font-bold text-green-500 h-[50px] ">
            TAREAS PENDIENTES
          </h1>
        </div>

        <div className="pl-3.5 m-2.5">
          <TodoCounter />

          <TodoList className="">
            {loading && <TodosLoading />}
            {error && <TodosError />}
            {!loading && searchedTodo.length === 0 && <EmptyTodos />}
            {searchedTodo.map((todo, index) => (
              <TodoItem
                key={index}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completedTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
        </div>

        <CreateTodoButton />

        {openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}
      </div>
    </main>
  );
}

export { AppUI };
