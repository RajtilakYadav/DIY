import React, { useState } from 'react'
import {useParams, Link} from 'react-router-dom'

const View = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});

    const fetchProduct = async () => {
        const res = await fetch("http://localhost:3000/product/getbyid/" + id);
        console.log(res.status);
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setProduct(data);
        };
        useEffect(() => {
            fetchProduct();
        }, []);
    }
    
  return (
    <div>View</div>
  )
}

export default View