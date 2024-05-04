import React, { useEffect, useState } from 'react'
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
      }
      useEffect(() => {
          fetchProduct();
      }, []);

  return (
    <div>
       <div className="container ">
      <Link to={"/user/product"} className='btn btn-outline-primary rounded-pill px-3 my-4  '><i className=" px-2 bi bi-arrow-left-circle "></i>Products</Link>

        {
          product !== null ? (
            <div className="card my-4 shadow shadow p-3 mb-5 bg-white rounded">
              <div className="row my-5">
                <div className="col-md-4">
                  <img src={"http://localhost:3000/" + product.image} alt="" className="img-fluid ms-5 mt-4 shadow p-2 mb-5 bg-white rounded" style={{height:"200px"}} />
                </div>
                <div className="col-md-6">
                  <h1 className='fw-bold py-2' style={{ fontFamily:"initial"}}>Title: {product.title}</h1>
                  <h1 className='fw-bold ' style={{ fontFamily:"initial"}}>Price: <i className="bi bi-currency-rupee fw-bold "></i>{product.price}</h1>
                  <h1 className=' fw-bold py-3' style={{ fontFamily:"initial"}}>Category: {product.category}</h1>
                  {/* <button className="btn btn-outline-danger "><i className="bi bi-cart px-1 "></i>Add to Cart</button> */}
                  <Link to={"/checkout"} className="btn btn-warning ms-2 "><i className="bi bi-bag px-1"></i>Buy Now</Link>
                </div>
              </div>
            </div>
          ) : (
            <div>
            <h1>NO PRODUCT FOUND</h1>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default View