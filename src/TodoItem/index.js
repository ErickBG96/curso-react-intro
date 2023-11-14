import { BsTrash3 } from "react-icons/bs";
import { GoCheckCircle, GoCircle } from "react-icons/go";

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className="flex py-3 justify-between border-b items-center">
      <div className="flex items-center gap-2 " onClick={onComplete}>
        {completed === false ? (
          <span className="text-blue-500 text-xl">
            <GoCircle />
          </span>
        ) : (
          <span className="text-green-500 text-xl">
            <GoCheckCircle />
          </span>
        )}

        <p className="">{text}</p>
      </div>
      <span className="px-2" onClick={onDelete}>
        <BsTrash3 className="hover:text-red-500 text-xl" />
      </span>
    </li>
  );
}

export { TodoItem };
