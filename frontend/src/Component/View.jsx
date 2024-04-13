<<<<<<< HEAD
import React, { useState } from 'react'
=======
import React, { useEffect } from 'react'
>>>>>>> 994de897a522623f0922f68e6858e263bccc48e0
import {useParams, Link} from 'react-router-dom'

const View = () => {
    const {id} = useParams();
<<<<<<< HEAD
    const [product, setProduct] = useState({});

    const fetchProduct = async () => {
        const res = await fetch("http://localhost:3000/product/getbyid/" + id);
        console.log(res.status);
        if (res.status === 200) {
=======
    const [product, setProduct] = usestate({});

    const fetchProduct = async () => {
        const res = await fetch("http://localhost:3000/product/getbyid/" + id)
        console.log(res.status);
        if(res.status === 200){
>>>>>>> 994de897a522623f0922f68e6858e263bccc48e0
            const data = await res.json();
            console.log(data);
            setProduct(data);
        };
<<<<<<< HEAD
        useEffect(() => {
            fetchProduct();
        }, []);
    }
    
  return (
    <div>View</div>
=======
        useEffect(()=>{
            fetchProduct();
        }, []);
    }


  return (
    <div>view</div>
>>>>>>> 994de897a522623f0922f68e6858e263bccc48e0
  )
}

export default View