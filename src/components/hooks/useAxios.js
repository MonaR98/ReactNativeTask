import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    
    const getData = async() => {
        setLoading(true);
        const res = await axios
            .get('https://dummyjson.com/products?limit=10')
            .then((response) => {
                setData(response.data);
                setLoading(false)
            })
            .catch((error) => {
                setError(error);
                setLoading(false)
            })
        console.log('UseAxios hook: ', res)
    }

    return(data, loading, error, getData)
}

export default useAxios;