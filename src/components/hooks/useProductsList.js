import  { useEffect, useState } from 'react'
import axios from 'axios'

const useProductsList = () => {
    const [productList, setProductList] = useState([])
    
    useEffect(() => {
        getProductList(); 
    }, [])
    
    const getProductList = async() => {
        const response = await axios.get('https://dummyjson.com/products?limit=6');
        setProductList(response.data);
    }
    return productList;
}

export default useProductsList
