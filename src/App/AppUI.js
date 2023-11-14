import { TodoCounter } from "../TodoCounter/";
import { TodoSearch } from "../TodoSearch/";
import { TodoList } from "../TodoList/";
import { TodoItem } from "../TodoItem/";
import { CreateTodoButton } from "../CreateTodoButton/";

function AppUI({
    searchValue,
    setSearchValue,
    totalTodos,
    completedTodos,
    searchedTodo,
    completedTodo,
    deleteTodo
    
}) {
  return (
    <main className="bg-black  text-white  h-screen w-full">
      <div className="flex flex-col text-left">
        <div className="w-full pl-6 pr-2.5">
          <div className="h-[48px] flex items-center">
            <TodoSearch
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </div>
          <h1 className="text-[32px] font-bold text-green-500 h-[50px] ">
            TAREAS PENDIENTES
          </h1>
        </div>

        <div className="pl-3.5 m-2.5">
          <TodoCounter
            className=""
            total={totalTodos}
            completed={completedTodos}
          />

          <TodoList className="">
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
      </div>
    </main>
  );
}


export {AppUI}