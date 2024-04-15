import { useFormik } from "formik";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";
import './AddProduct.css'


const AddProduct = () => {

  const [selFile, setSelFile] = useState('');

  const productForm = useFormik({
    initialValues: {
      title: "",
      description: "",
      category: "",
      price: "",
      image: "",
      video: ""
    },
    // Step4 : what happens when form is submitted
    onSubmit: async (values, action) => {
      values.image = selFile.name
      console.log(values);
      const res = await fetch("http://localhost:3000/product/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.status);
      action.resetForm();

      if (res.status === 200) {
        enqueueSnackbar("Product Added Successfully", { variant: "success" });
      } else {
        enqueueSnackbar("product not added", { variant: "error" });
      }
    },

    // Step6 : Validation Schema
    // validationSchema: LoginSchema
  });
  
 
    const uploadFile = (e) => {
      const file = e.target.files[0];
     
      setSelFile(file);
      const fd = new FormData();
      fd.append("myfile",file);
      fetch("http://localhost:3000/util/uploadfile", {
        method: "POST",
        body: fd,
      }).then((res) => {
        if (res.status === 200) {
          console.log("file uploaded");
        }
    });
    };

    const uploadVideo = (e) => {
      const file = e.target.files[0];
     
      setSelFile(file);
      const fd = new FormData();
      fd.append("myfile",file);
      fetch("http://localhost:3000/util/uploadfile", {
        method: "POST",
        body: fd,
      }).then((res) => {
        if (res.status === 200) {
          console.log("file uploaded");
        }
    });
    };
  
  return (
    <div className="full-container">
      <div className="container ">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 mt-4">
            <div className="card p-4">
              <h1 className="text-center">Add Product</h1>
              <form action="" onSubmit={productForm.handleSubmit}>
                <div className="mb-2">
                  <label htmlFor="" className="form-label">
                    Title
                  </label>
                  <input type="text"
                  id="title" value={productForm.values.title}
                  onChange={productForm.handleChange}
                   className="form-control" />
                </div>
                <div className="mb-2">
                  <label htmlFor="" className="form-label">
                    Description
                  </label>
                  <input type="text"
                  id="description" value={productForm.values.description}
                  onChange={productForm.handleChange}
                   className="form-control" />
                </div>
                <div className="mb-2">
                  <label htmlFor="" className="form-label">
                    Category
                  </label>
                  <input type="text"
                  id="category"
                  value={productForm.values.category}
                  onChange={productForm.handleChange} className="form-control" />
                </div>
                <div className="mb-2">
                  <label htmlFor="" className="form-label">
                    Price
                  </label>
                  <input type="text" 
                   id="price"
                   value={productForm.values.price}
                   onChange={productForm.handleChange}
                   className="form-control" />
                </div>
                <div className="mb-2">
                  <label htmlFor="" className="form-label">
                    Upload Images
                  </label>
                  <input type="file" className="form-control" onChange={uploadFile} />
                </div>
                <div className="mb-2">
                  <label htmlFor="" className="form-label">
                    Upload Video
                  </label>
                  <input type="file" className="form-control" onChange={uploadVideo} />
                </div>
                <div className="text-center mt-3">
                  <button type="submit" className="btn btn-primary">Add Product</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
