import { FaCirclePlus } from "react-icons/fa6";
import { useContext } from "react";
import { TodoContext } from "../TodoContext";

function CreateTodoButton() {
  const { setOpenModal } = useContext(TodoContext);

  return (
    <button
      onClick={() => setOpenModal((state) => !state)}
      className="fixed right-5 bottom-5 text-5xl text-green-500 hover:scale-110 duration-500 z-10"
    >
      <FaCirclePlus />
    </button>
  );
}

export { CreateTodoButton };
