import React, { useEffect, useState } from "react";
import useProductContext from "../../context/ProductContext";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [masterList, setMasterList] = useState([]);
  const { addItemToCart, isInCart } = useProductContext();
  const [rating, setrating] = useState([]);

  const fetchProduct = async () => {
    const res = await fetch("http://localhost:3000/product/getall")
    console.log(res.status);
    const data = await res.json();
    console.log(data)
    setProduct(data)
    setMasterList(data);
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


  // const fetchRating = async () => {
  //   const res = await fetch("http://localhost:3000/feedback/getall")
  //   console.log(res.status);
  //   const data = await res.json();
  //   console.log(data);
  //   setrating(data);
  // }

  // useEffect(() => {
  //   fetchRating()
  // }, [])

  const filterByCategory = (category) => {
       
    const filteredProducts = masterList.filter(product => product.title === category);
    setProduct(filteredProducts);

}



  return (
    <div>

      <div className="container">
        <div className="row">
          <div className="col-md-2 my-5">
            <h2>Filter</h2>
            <h3 className="my-2 ">Category</h3>
            <div className="d-flex mb-1">
              <input type="checkbox" className="" id="home" value='a'  onChange={(e) => filterByCategory("Home Decor")}/>
              <label for='home' className="ms-3 my-1">Home Decor</label>
            </div>
            <div className="d-flex mb-1">
              <input type="checkbox" className="" id="hand" value='b' onChange={(e) => filterByCategory("Handicraft")} />
              <label for='hand' className="ms-3 my-1">Handicraft</label>
            </div>
            <div className="d-flex mb-1">
              <input type="checkbox" className="" id="kit" value='c' onChange={(e) => filterByCategory("Kitchenware")} />
              <label for='kit' className="ms-3 my-1">Kitchenware</label>
            </div>
            <div className="d-flex mb-1">
              <input type="checkbox" className="" id="gar" value='d' onChange={(e) => filterByCategory("Gardening")} />
              <label for='gar' className="ms-3 my-1">Gardening</label>
            </div>

           

          </div>
          <div className="col-md-10">


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
                      <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
                      <div className="card shadow p-3 mb-5 bg-white rounded w-100">
                        <img
                          src={"http://localhost:3000/" + pro.image}
                          className="card-img-top"
                          alt="Laptop"
                          style={{height:150}}
                        />
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <p className="small">
                              <a href="#!" className="text-muted">
                              Handicraft
                              </a>
                            </p>
                            <p className="small text-danger">
                              
                            </p>
                          </div>
                          <div className="d-flex justify-content-between mb-3">
                            <h5 className="mb-0">Cat Vase</h5>
                            <h5 className="text-dark mb-0"><span>₹</span>{pro.price}</h5>
                          </div>
                          <div className="d-flex justify-content-between mb-2">
                            <p className="text-muted mb-0">
                              Available: <span className="fw-bold">7</span>
                            </p>
                            {/* <div className="ms-auto text-warning">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="far fa-star" />
                            </div> */}
                          </div>
                        </div>
                        <div className="card-footer">
                          <button
                          disabled={isInCart(pro)}
                          onClick={(e) => addItemToCart(pro)}
                          className="btn btn-outline-primary">
                            <span>
                              {isInCart(pro) ? "Already Added" : "Add to Cart"}
                            </span>
                          </button>
                          </div>
                      </div>
                    </div>
                    )
                  })
                }

              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Product;
