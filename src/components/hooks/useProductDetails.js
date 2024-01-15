import { useEffect, useState } from 'react'
import axios from 'axios'
const useProductDetails = (product_id) => {
    const[productDetail, setProductDetail] = useState({})
    useEffect(() => {
        getProductDetails();   
    }, [])
    
    const getProductDetails = async () => {
        const response = await axios(`https://dummyjson.com/products/${product_id}`);
        setProductDetail(response.data)
    }
  return productDetail
}

export default useProductDetails