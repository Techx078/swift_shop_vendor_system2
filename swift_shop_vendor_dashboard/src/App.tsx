import './App.css'
import Product from './Product'
import Navbar from './Navbar'
import CartContextProvider from './Context/CartContext'
import ShowCart from './ShowCart'
import {BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <CartContextProvider >
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Product />} />
       </Routes>
       </BrowserRouter>
     </CartContextProvider>
    </>
  )
}

export default App
