import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import ProductForm from './ProductForm';
import useFetchCategoryList from './Hooks/useFetchCategoryList';
import Navbar from './Navbar';
import ShowCart from './ShowCart';
interface ProductType {
  ProductId: number;
  Name: string;
  Price: number;
  Quantity: number;
  Category: string;
}

function Product() {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      fetch("https://dummyjson.com/products")
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json()
        })
        .then((data) => {
          let mapData = data.products.map(
            product => {
              return {
                ProductId: product.id,
                Name: product.title,
                Price: product.price,
                Quantity: product.stock,
                Category: product.category
              }
            }
          )
          localStorage.setItem("Products", JSON.stringify(mapData))
          setProductList(mapData)
          setFilteredProductList(mapData)
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
    }
    fetchData()
  }, [])
  const [product, setProduct] = useState<ProductType>({
    ProductId: 0,
    Name: "",
    Price: 0,
    Quantity: 0,
    Category: "",
  });
  const [error, setError] = useState<string>("");
  const [productList, setProductList] = useState<ProductType[]>([]);
  const [filteredProductList,setFilteredProductList] = useState([]);
  const { categories } = useFetchCategoryList("https://dummyjson.com/products/category-list")
  const [category, setCategory] = useState("");

  const handleChange = (e) => {
    if (e.target.value) {
      setFilteredProductList(productList.filter(product => product.Category == e.target.value))
    }else{
      setFilteredProductList(productList)
    }
    setCategory(e.target.value)

  };
  return (
    <>
     <Navbar  />
      <div className='grid grid-cols-3 mt-[90px] '>
        <div>
          <div>
            <label className=" text-gray-700 mb-1 ">Category</label>
            <select
              name="Category"
              value={category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"

            >
              <option value="">All</option>
              {categories.map((opt, index) => (
                <option key={index} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div className='text-center  '>
            {filteredProductList.length > 0 ? (
              <ProductCard data={data} productList={filteredProductList} product={product} setProductList={setProductList}  />
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </div>
        <div>
          <>
            <ProductForm error={error} setError={setError} product={product} setProduct={setProduct} productList={productList} setProductList={setProductList} />
          </>
        </div>
      </div>
     <ShowCart />

      <div>
        <>

        </>
      </div>
    </>
  );
}

export default Product;