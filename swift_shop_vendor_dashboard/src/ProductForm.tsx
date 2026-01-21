import './App.css'
import React from 'react';
import { useEffect, useState } from 'react';
import useFetchCategoryList from './Hooks/useFetchCategoryList';
function ProductForm({ error, setError, product, setProduct, productList, setProductList }) {
  const {categories} = useFetchCategoryList("https://dummyjson.com/products/category-list")
  // const [categories, setCategories] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     fetch("https://dummyjson.com/products/category-list")
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error(`HTTP error! Status: ${response.status}`);
  //         }
  //         return response.json()
  //       })
  //       .then((data) => {
  //         setCategories(data)
  //       })
  //       .catch((error) => {
  //         console.error("Fetch error:", error);
  //       });
  //   }
  //   fetchData()

  // }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (product.Name.length < 3) {
      setError("name should be more then 3 charaters!")
      return
    }
    else if (product.Quantity <= 0) {
      setError("Quantity should be more then zero!")
      return
    }
    else if (product.price <= 0) {
      setError("price should be more then zero!")
      return
    }
    else if (product.Category.length < 3) {
      setError("category should be more then 3 characters !")
      return
    }
    let newProduct = {
      ProductId: productList[productList.length - 1].ProductId + 1,
      Name: product.Name,
      Price: product.Price,
      Quantity: product.Quantity,
      Category: product.Category,
    }
    productList.push(newProduct)
    setProductList(productList)
    localStorage.setItem("Products", JSON.stringify(productList))
    setProduct({
      ProductId: 0,
      Name: "",
      Price: 0,
      Quantity: 0,
      Category: "",
    });
  };
  return (
    <>
      <div className="flex min-h-screen justify-center p-4 mt-[80px]">
        <div className="w-full max-w-2xl">
          <h2 className="text-3xl font-semibold text-center text-gray-800">
            Add Product
          </h2>

          <form
            onFocus={() => setError("")}
            onSubmit={handleSubmit}
            className=" gap-5"
          >
            <div>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="Name"
                value={product.Name}
                onChange={handleChange}
                placeholder="Enter name of product"
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Category</label>
              <select
                name="Category"
                value={product.Category}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"

              >
                <option value="">Select Category</option>
                {categories.map((opt, index) => (
                  <option key={index} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Price</label>
              <input
                type="Number"
                name="Price"
                value={product.Price}
                onChange={handleChange}
                placeholder="Enter price"
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Quantity</label>
              <input
                type="Number"
                name="Quantity"
                value={product.Quantity}
                onChange={handleChange}
                placeholder="Enter Quantity"
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="col-span-2 mt-4">
              <button
                type="submit"
                className="w-full bg-black text-white hover:bg-gray-700   py-2 rounded-lg transition-all"
              >
                Submit
              </button>
              <div className='text-center'>
                {error && <span className='text-1xl font-semibold text-center text-red-800'>{error}</span>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default React.memo(ProductForm)


