import { Formik } from "formik";
import { enqueueSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const UpdateProduct = () => {

  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const [selFile, setSelFile] = useState("");

  const navigate = useNavigate();

  const fetchproductData = async () => {
    const res = await fetch("http://localhost:3000/product/getbyid/" + id);
    const data = await res.json();

    console.log(data);
    setProductData(data);
  };

  useEffect(() => {
    fetchproductData();
  }, []);

  const submitForm = async (values) => {
    console.log(values);
    values.image = selFile.name;
    const res = await fetch('http://localhost:3000/product/update/' + id, {
      method: 'PUT',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log(res.status);

    if (res.status === 200) {
     enqueueSnackbar("product updated successfully",{variant:"success"})
      navigate('/admin/ManageProduct');
    }
  };

  const uploadFile = (e) => {
    const file = e.target.files[0];
   
    setSelFile(file);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:3000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    });
  };

  // const uploadVideo = (e) => {
  //   const file = e.target.files[0];
  //   if (!file) return;
  //   setSelFile(file.name);
  //   const fd = new FormData();
  //   fd.append("myfile", file);
  //   fetch("http://localhost:3000/util/uploadfile", {
  //     method: "POST",
  //     body: fd,
  //   }).then((res) => {
  //     if (res.status === 200) {
  //       console.log("file uploaded");
  //     }
  //   });
  // };

  return (
    <div> <div className="col-md-3 mx-auto pt-5">
      <div className="card shadow p-3 mb-5 bg-white rounded">
        <div className="card-body">
          <h3 className="text-center my-5">Update Product</h3>
          {productData !== null ? (
            <Formik initialValues={productData} onSubmit={submitForm}>

             {(addProductForm) => {
              return   <form onSubmit={addProductForm.handleSubmit}>
              <div>
              <label>Product Name</label>

              <span
                style={{ color: "red", fontSize: 10, marginLeft: 10 }}
              >
                
              </span>
              <input
                id="title"
                onChange={addProductForm.handleChange}
                value={addProductForm.values.title}
                type="text"
                className="form-control mb-4"
              />

              <label>Product Category</label>
              <span
                style={{ color: "red", fontSize: 10, marginLeft: 10 }}
              >
               
              </span>
              <input
                id="category"
                onChange={addProductForm.handleChange}
                value={addProductForm.values.category}
                type="text"
                className="form-control mb-4"
              />

              <label>Product Description</label>
              <input
                id="description"
                onChange={addProductForm.handleChange}
                value={addProductForm.values.description}
                type="text"
                className="form-control mb-4"
              />
              <label>Product Price</label>
              <input
                id="price"
                onChange={addProductForm.handleChange}
                value={addProductForm.values.price}
                type="number"
                className="form-control mb-4"
              />

              <label>Upload Image</label>
              <input
                type="file"
                id="pimage"
                className="form-control mb-4"
                placeholder="Upload Image"
                onChange={uploadFile} />

              {/* <label>Upload Video</label>
              <input
                type="file"
                id="pvideo"
                className="form-control mb-4"
                placeholder="Upload Video"
                 /> */}

              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
              </div>
            </form>
             }}
            </Formik>
          ) : (
            <h1 className="text-center my-5">Loading ... </h1>
          )}
        </div>
      </div>
    </div>
    </div>
  )
}

export default UpdateProduct;