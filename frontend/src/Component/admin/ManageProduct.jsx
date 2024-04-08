import React, { useEffect, useState } from 'react'

const ManageProduct = () => {

    const [product , setProduct] = useState([]);

    const fetchProductList = async() => {
        const res = await fetch("http://localhost:3000/product/getall")
        console.log(res.status);
        if (res.status === 200){

            const data = await res.json(data);
            console.log(data);
            setProduct(data)
        }
       
    }
    useEffect(() => {
    fetchProductList()
    },[])

  const displayProduct = () => {
    return product.map((pro) => {
         <tr>
            <td>{pro.title}</td>
            <td>{pro.description}</td>
            <td>{pro.price}</td>
            <td>
                <button className='btn btn-danger'>Delete</button>
            </td>
         </tr>
    })
  }

  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-10">
                    <div className="card px-3 text-center shadow ">
                        <table>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                </tr>
                                
                            </thead>
                            <tbody>
                              {
                                displayProduct()
                              }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ManageProduct