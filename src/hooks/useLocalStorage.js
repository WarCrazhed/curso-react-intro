import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
        
          let parsedItem;
    
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
          }
    
          setLoading(false);
        } catch (error) {
          setLoading(false);
          setError(true);
        } 
      }, 2000)
    }, [])
  
    const saveItem = (newItem) => {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
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