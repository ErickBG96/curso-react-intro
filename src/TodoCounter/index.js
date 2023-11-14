function TodoCounter({ total, completed }) {
  return (
    <h2  className="text-gray-400 border-b pb-2">
      {completed} completas de {total}
    </h2>
  );
}

export { TodoCounter };
