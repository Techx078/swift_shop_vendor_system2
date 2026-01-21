import { useState, useEffect } from "react";

export default function useFetchCategoryList(url) {
    const [categories, setCategories] = useState([]);
    //   const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            fetch("https://dummyjson.com/products/category-list")
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json()
                })
                .then((data) => {
                    console.log(data)
                    setCategories(data)
                })
                .catch((error) => {
                    setError(error)
                });
        }
        fetchData()
    }, [url]);
    return { categories, error };
}