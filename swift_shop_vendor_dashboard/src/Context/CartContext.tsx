import { createContext, useContext, useState } from "react";

export const cartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <cartContext.Provider value={{ cartProducts, setCartProducts }}>
      { children} 
    </cartContext.Provider>
  );
}

export const usecartContext = () => useContext(cartContext);