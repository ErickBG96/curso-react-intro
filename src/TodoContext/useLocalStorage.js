import { useState, useEffect } from "react";

/**
 * Hook que permite guardar y obtener un valor en el localStorage.
 * @param {string} itemName - Nombre del item a guardar en el localStorage.
 * @param {any} initialValue - Valor inicial del item.
 * @returns {Array} - Retorna un array con el valor del item y una función para actualizarlo.
 */

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItems = localStorage.getItem(itemName);

        let parsedItems;
        if (!localStorageItems) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItems = initialValue;
        } else {
          parsedItems = JSON.parse(localStorageItems);
          setItem(parsedItems);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError("Error al obtener los datos del localStorage");
      }
    }, 2000);
  }, [itemName, initialValue]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };
