import './App.css'
import Product from './Product'
import Navbar from './Navbar'
import CartContextProvider from './Context/CartContext'
import ShowCart from './ShowCart'
function App() {
  return (
    <>
    <CartContextProvider >
      <Navbar  />
      <Product />
      <ShowCart />
     </CartContextProvider>
    </>
  )
}

export default App
