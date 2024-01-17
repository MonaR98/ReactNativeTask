import  { useEffect, useState } from 'react'
import axios from 'axios'

const useProductsList = () => {
    const[loading, setLoading]=useState(true)
    const [productList, setProductList] = useState([])
    const [error, setError]=useState('')
    useEffect(() => {
        getProductList(); 
    }, [])
    
    const getProductList = async () => {
        try {
        setLoading(true)
            const response = await axios.get('https://dummyjson.com/products');
        setProductList(response.data);
        setLoading(false)
        } catch (error) {
            setError(error)
        }
    }
    return {productList, loading, error};
}

export default useProductsList
