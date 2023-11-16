import { PiMagnifyingGlass } from "react-icons/pi";
import { TodoContext } from "../TodoContext";
import { useContext } from "react";

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  return (
    <div className="relative w-full">
      <PiMagnifyingGlass className="absolute top-1" />
      <input
        type="text"
        placeholder="Buscar..."
        className="bg-transparent w-full rounded-md bg-gray-700 pl-5 focus:outline-none focus:ring focus:border-blue-500"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
    </div>
  );
}

export { TodoSearch };
