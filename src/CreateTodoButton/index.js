import { FaCirclePlus } from "react-icons/fa6";

export default function CreateTodoButton() {
  return (
    <button
      className="fixed right-5 bottom-5 text-5xl text-green-500 hover:scale-110 duration-500"
    >
      <FaCirclePlus />
    </button>
  );
}

export { CreateTodoButton };
