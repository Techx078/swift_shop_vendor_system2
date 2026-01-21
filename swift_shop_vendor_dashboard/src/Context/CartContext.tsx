import { createContext, useContext, useState } from "react";

export const cartContext = createContext();

export default function CartContext({ children }) {
  const [cartProducts, setCartProducts] = useState(null);

  return (
    <cartContext.Provider value={{ cartProducts, setCartProducts }}>
      { children} 
    </cartContext.Provider>
  );
}

export const usecartContext = () => useContext(cartContext);