import { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";


const TodoForm = () => {
  const { addTodo, setOpenModal } = useContext(TodoContext);

	const [newTodoValue, setNewTodoValue] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
		addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = (e) => {
    setOpenModal(false);
  };

	const onChange = (e) => {
		setNewTodoValue(e.target.value)
	}

  return (
    <form
      onSubmit={onSubmit}
      className="w-96 flex flex-col items-center justify-center rounded-md bg-gray-800 p-4"
    >
      <div className="flex text-white items-center justify-between w-full pb-4 px-4">
        <button
          onClick={onCancel}
          type="button"
          className=" text-gray-500 hover:text-red-500"
        >
          Cancelar
        </button>
        <label htmlFor="todo" className="font-bold">
          Nueva Tarea
        </label>
        <button type="submit" className=" text-blue-500 hover:text-green-400">
          Agregar
        </button>
      </div>
      <input
        type="text-area"
				value={newTodoValue}
				onChange={onChange}
        id="todo"
        name="todo"
        placeholder="Escribe la nueva tarea..."
        className="w-full text-white rounded-md bg-gray-700 pl-5 pr-2 focus:outline-none focus:ring focus:border-blue-500 h-32"
      />
    </form>
  );
};

export { TodoForm };
