import React, { useEffect, useState } from "react";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [masterList, setMasterList] = useState([]);

  const fetchProduct = async () => {
    const res = await fetch("http://localhost:3000/product/getall")
    console.log(res.status);
    const data = await res.json();
    console.log(data)
    setProduct(data)
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  const applysearch = (e) => {
    const inputText = e.target.value;
    setProduct(masterList.filter((equipment) => {
      return equipment.title.toLowerCase().includes(inputText.toLowerCase());
    }));

  }


  return (
    <div>
      <section style={{ backgroundColor: "#eee" }} >

        <div className="container py-5">
          <div className="input-group w-100  py-4">
            <span className="border-warning input-group-text bg-warning text-white">
              <i className="fa-solid fa-magnifying-glass" />
            </span>
            <input
              onChange={applysearch}
              type="text"
              className="form-control border-warning"
              style={{ color: "#7a7a7a" }}
            />
            <button className="btn btn-warning text-white">Search</button>
          </div>
          <div className="row">

            {
              product.map((pro) => {
                return (
                  <div className="col-md-12 col-lg-3 mb-4 mb-lg-0">
                    <div className="card">
                      <img
                        src={"http://localhost:3000/" + pro.image}
                        className="card-img-top"
                        alt="Laptop"
                        style={{ height: 300 }}
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
