import { useState } from 'react';
 
const useLocalStorage = (key, initialValue) => {
  
   const [storedValue, seStoredValue] = useState(() => {
       const item = window.localStorage.getItem(key);
       return item ? JSON.parse(item) : initialValue;
   });
 
   const setValue = value => {
       seStoredValue(value);
       window.localStorage.setItem(key, JSON.stringify(value));
   };
 
   return [storedValue, setValue];
}
 
export default useLocalStorage;
