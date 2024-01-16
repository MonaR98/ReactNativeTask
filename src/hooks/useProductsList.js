import  { useEffect, useState } from 'react'
import axios from 'axios'

const useProductsList = () => {
    const[loading, setLoading]=useState(true)
    const [productList, setProductList] = useState([])
    
    useEffect(() => {
        getProductList(); 
    }, [])
    
    const getProductList = async () => {
        setLoading(true)
        const response = await axios.get('https://dummyjson.com/products');
        setProductList(response.data);
        setLoading(false)
    }
    return {productList, loading};
}

export default useProductsList
