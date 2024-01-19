import { useEffect, useState } from 'react'
import axios from 'axios'
const useProductDetails = (product_id) => {
    const [productDetail, setProductDetail] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getProductDetails();   
    }, [])
    
    const getProductDetails = async () => {
        setLoading(true)
        const response = await axios(`https://dummyjson.com/products/${product_id}`);
        setProductDetail(response.data)
        setLoading(false)
    }
  return {productDetail, loading}
}

export default useProductDetails