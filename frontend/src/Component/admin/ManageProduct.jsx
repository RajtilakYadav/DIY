import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'


const ManageProduct = () => {

    
    const [product , setProduct] = useState([]);

    const fetchProductList = async() => {
        const res = await fetch("http://localhost:3000/product/getall")
        console.log(res.status);
        if (res.status === 200){

            const data = await res.json();
            console.log(data);
            setProduct(data);
        }
       
    }
    useEffect(() => {
    fetchProductList();
    },[])

     const deleteproduct = async(id) => {
      console.log(id);
      const res = await fetch("http://localhost:3000/product/delete/" +id, {
        method: "DELETE",
      });
      console.log(res.status);
      if(res.status === 200){
        enqueueSnackbar("product deleted successfully", {variant:"success"})
        fetchProductList();
      }else{
        enqueueSnackbar("something went worng", {variant:"warning"})
      }
     }

  const displayProduct = () => {
    return <table className='shadow table rounded'>
      <thead>
        <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th colSpan={2}>Action</th>
        </tr>
      </thead>
      <tbody>
        {
        product.map((pro) => {
            return <tr>
                <td><img src={"http://localhost:3000/" +pro.image} alt="" style={{height:40}} /></td>
                <td>{pro.title}</td>
                <td>{pro.description}</td>
                <td>{pro.category}</td>
                <td>{pro.price}</td>
                <td>
                    <button className='btn btn-danger' onClick={e => deleteproduct(pro._id)}>Delete</button>
                </td>
            </tr>
        })
        }
      </tbody>
    </table>
    
  }

  return (
    <div>
        <div className="container">
          <h1 className='text-center fw-bold text-danger my-04 fs-2'>Manage Product</h1>
          {
            displayProduct()
          }
        </div>
    </div>
  )
}

export default ManageProduct