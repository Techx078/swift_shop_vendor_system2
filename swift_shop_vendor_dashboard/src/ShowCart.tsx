import { usecartContext } from "./Context/CartContext"

function ShowCart() {
    const { cartProducts, setCartProducts } = usecartContext([]);
    
  return (
    
     <div className="text-center">
     <h1 className="text-center">Cart</h1>
            {cartProducts.map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg">
                    <div className="p-4">
                        {product.Price > 500 && (
                            <span className=' rounded-full bg-blue-600 px-3 my-2 py-1 text-xs font-semibold text-white shadow '>
                                Premium</span>)
                        }
                        <h5 className="font-bold mb-2">{product.Name}</h5>
                        <h6 className="mb-2">{product.Category}</h6>
                        <p className="mb-2">Category: {product.Category}</p>
                        <p className="mb-2">Quantity: {product.Quantity}</p>
                        <p className="mb-2">Price: {product.Price}</p>
                    </div>
                    <div className="flex justify-between p-4">
                        <button className="bg-black text-white m-2 px-4 py-2 " onClick={() => {}}>increase Quantity</button>
                        <button className="bg-black text-white m-2 px-4 py-2 "
                            onClick={() => {} }
                        >decrease Quantity</button>
                    </div>
                </div>
            ))}
        </div>
    
  )
}

export default ShowCart
