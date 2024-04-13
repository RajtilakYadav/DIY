import React, { useEffect, useState } from "react";

const Product = () => {
     const [product, setProduct] = useState([]);

     const fetchProduct = async() => {
          const res = await fetch("http://localhost:3000/product/getall")
          console.log(res.status);
          const data = await res.json();
          console.log(data)
          setProduct(data)
     }

     useEffect(() => {
      fetchProduct()
     }, [])

  return (
    <div>
        <section style={{ backgroundColor: "#eee" }}>
  <div className="container py-5">
    <div className="row">

      {
        product.map((pro) => {
          return(
             <div className="col-md-12 col-lg-3 mb-4 mb-lg-0">
            <div className="card">
              <img
                src={"http://localhost:3000/" +pro.image}
                className="card-img-top"
                alt="Laptop"
                style={{height:300}}
              />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p className="small">
                    <a href="#!" className="text-muted">
                      Craft
                    </a>
                  </p>
                  <p className="small text-danger">
                    <s><span>₹</span>{pro.price}</s>
                  </p>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0"><span>Title</span>{pro.title}</h5>
                  <h5 className="text-dark mb-0">₹500</h5>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <p className="text-muted mb-0">
                    Available: <span className="fw-bold">6</span>
                  </p>
                  <div className="ms-auto text-warning">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          )
        })
      }
    
    </div>
  </div>
</section>
    </div>
  );
};

export default Product;
