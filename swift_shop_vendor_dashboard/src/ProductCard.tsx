import './App.css'
import React from 'react';
import { usecartContext } from "./Context/CartContext"
interface ProductType {
    ProductId: number;
    Name: string;
    Price: number;
    Quantity: number;
    Category: string;
}

function ProductCard({ data, productList, product, setProductList }) {

    const { cartProducts, setCartProducts } = usecartContext();

    const addToCartHandler = (productId) => {
        const hasProduct = cartProducts.some(product => product.ProductId);
        if(hasProduct){
            alert("This Product already exits in cart go there you can add quantities")
            return
        }
        setCartProducts([...cartProducts,{
            ...productList.find(product => product.ProductId === productId),
            Quantity: 1
        }])
    }
    const handleDelete = (productId: number) => {
        setProductList(productList.filter(product => product.ProductId != productId))
        localStorage.setItem("Products", JSON.stringify(productList))
    }
    return (
        <>
            {productList.map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg m-4">
                    <div className="p-4">
                        {product.Price > 500 && (
                            <span className=' rounded-full bg-blue-600 px-3 my-2 py-1 text-xs font-semibold text-white shadow '>
                                Premium</span>)
                        }
                        {product.Quantity < 5 && (
                            <span className='rounded-full bg-orange-600 px-3 py-1 text-xs font-semibold text-white shadow '>
                                Limited Quantity</span>
                        )}
                        <h5 className="font-bold mb-2">{product.Name}</h5>
                        <h6 className="mb-2">{product.Category}</h6>
                        <p className="mb-2">Category: {product.Category}</p>
                        <p className="mb-2">Quantity: {product.Quantity}</p>
                        <p className="mb-2">Price: {product.Price}</p>
                    </div>
                    <div className="flex justify-between p-4">
                        <button className="bg-black text-white m-2 px-4 py-2 " onClick={() => addToCartHandler(product.ProductId)}>Add to cart</button>
                        <button className="bg-black text-white m-2 px-4 py-2 "
                            onClick={() => handleDelete(product.ProductId)}
                        >Delete product</button>
                    </div>
                </div>
            ))}
        </>
    )
}


export default React.memo(ProductCard)
