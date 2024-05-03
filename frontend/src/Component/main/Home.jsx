import React, { useEffect } from 'react'
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Home.css'



// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Home = () => {

  const [product, setProduct] = useState([]);

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

  return (
    <>

      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}

          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <section className="bsb-hero-2 " style={{ height: "60vh" }}>
              <div className="container overflow-hidden w-100 justify-content-center">
                <div className="row  align-items-lg-center justify-content-lg-between">
                  <div className="col-12 col-lg-6 order-1 order-lg-0">
                    <h3 className="display-3 fw-bold mb-3" style={{ fontSize: 50 }}>
                      Products Redefining Creativity
                    </h3>
                    <p className="fs-4 mb-5" style={{ fontSize: 25 }}>
                      Discover the creativity and functionality with our curated selection of DIY Products.
                    </p>
                    <div className="d-grid gap-2 d-sm-flex ">
                      <Link
                        to={"/user/Product"}
                        type="button"
                        className="btn btn-primary bsb-btn-xl px-5 fs-5 rounded-pill py-3  "
                        style={{ height: 60, fontFamily: "serif" }}

                      >
                        Explore
                      </Link>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 text-center" style={{ height: 400 }}>
                    <img
                      className="img-fluid mt-5"
                      src="https://cdn3d.iconscout.com/3d/premium/thumb/carpenter-using-woodworking-tools-for-craft-work-in-carpentry-workshop-9246249-7622026.png"
                      alt="Art of Design"
                    />
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="bsb-hero-2 " style={{ height: "60vh" }}>
              <div className="container overflow-hidden w-100 justify-content-center">
                <div className="row  align-items-lg-center justify-content-lg-between">
                  <div className="col-12 col-lg-6 order-1 order-lg-0">
                    <h3 className="display-3 fw-bold mb-3" style={{ fontSize: 50 }}>
                      Hands On Guidance
                    </h3>
                    <p className="fs-4 mb-5" style={{ fontSize: 25 }}>
                      Guiding you step-by-step towards DIY mastery through video tutorials.
                    </p>
                    <div className="d-grid gap-2 d-sm-flex">
                      <Link
                        to={"/user/Video"}
                        type="button"
                        className="btn btn-primary bsb-btn-xl px-5 fs-5 rounded-pill py-3"
                        style={{ height: 60, fontFamily: "serif" }}
                      >
                        Explore
                      </Link>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 text-center" style={{ height: 400 }}>
                    <img
                      className="img-fluid"
                      src="https://static.vecteezy.com/system/resources/previews/015/340/595/original/music-producer-3d-character-illustration-png.png"
                      alt="Art of Design"
                    />
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="bsb-hero-2 " style={{ height: "60vh" }}>
              <div className="container overflow-hidden w-100 justify-content-center">
                <div className="row  align-items-lg-center justify-content-lg-between">
                  <div className="col-12 col-lg-6 order-1 order-lg-0">
                    <h3 className="display-3 fw-bold mb-3" style={{ fontSize: 50 }}>
                      Sharing Experiences and Feedback
                    </h3>
                    <p className="fs-4 mb-5" style={{ fontSize: 25 }}>
                      Join the conversation and share your experiences to inspire others on their DIY journey.
                    </p>
                    <div className="d-grid gap-2 d-sm-flex">
                      <Link
                        to={"/main/Feedback"}
                        type="button"
                        className="btn btn-primary bsb-btn-xl px-5 fs-5 rounded-pill py-3"
                        style={{ height: 60, fontFamily: "serif" }}
                      >
                        Explore
                      </Link>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 text-center" style={{ height: 400 }}>
                    <img
                      className="img-fluid mt-5"
                      src="https://3dbay.io/files/preview/1280x853/11681835850e1uo4bi142gev1aj4wzjaignq40knhnzaxcwq8owff57pdvmhpoih3kmnldd9fazvfvsdd42xaebw4e1fkf8i0igdj4avr4tkuqd.png"
                      alt="Art of Design"
                    />
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>

        </Swiper>
      </>

      {/* Blog 2 - Bootstrap Brain Component */}

      <section style={{ marginTop: 50, marginBottom: 50, backgroundColor: "lightgrey" }}>
        <h1
          className="mb-3 mt-3"
          style={{ fontSize: 30, fontWeight: "bold", textAlign: "center" }}
        >
          Categories
        </h1>

      <section style={{ marginTop: 50, marginBottom: 50 }}>
      <h1
            className="mb-3 mt-3"
            style={{ fontSize: 30, fontWeight: "bold", textAlign: "center" }}
          >
            Categories
          </h1>

        <div className="container justify-content-around py-5 ">
          <div className="row" style={{ marginLeft: 30 }}>
            <div className="col-md-12 col-lg-3 mb-4 mb-lg-0 justify-content-center">
              <div className="card shadow p-3 mb-5 bg-white rounded" style={{ width: 230 }}>
                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2023/1/HG/HN/SQ/43676305/handmade-decorative-door-wall-hanging-500x500.jpeg"
                  className="card-img-top"
                  alt="Laptop"
                  style={{ height: 200 }}
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="small">
                      <a
                        href="#!"
                        className="text-muted"
                        style={{ fontWeight: "bold" }}
                      >
                        Home Decoration
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4 mb-md-0 justify-content-around">
              <div className="card shadow p-3 mb-5 bg-white rounded" style={{ width: 230 }}>
                <img
                  src=" https://diybaazar.com/publicuploads/seller/products/traditional-hand-painted-aluminium-colourfull-decorative-tea-kettle-with-6-glasses-and-1-holder-capacity-1-litre-619-771-1_diybaazar5f9a827dbbef1.jpg"
                  className="card-img-top"
                  alt="Laptop"
                  style={{ height: 200 }}
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="small">
                      <a
                        href="#!"
                        style={{ fontWeight: "bold" }}
                        className="text-muted"
                      >
                        Kitchenware
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4 mb-md-0 justify-content-around">
              <div className="card shadow p-3 mb-5 bg-white rounded" style={{ width: 230 }}>
                <img
                  src=" data:image/jpeg;base64,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"
                  className="card-img-top"
                  alt="Laptop"
                  style={{ height: 200 }}
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="small">
                      <a
                        href="#!"
                        style={{ fontWeight: "bold" }}
                        className="text-muted"
                      >
                        Handicraft
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4 mb-md-0 justify-content-around">
              <div className="card shadow p-3 mb-5 bg-white rounded" style={{ width: 230 }}>
                <img
                  src="https://imgmedia.lbb.in/media/2022/01/61ea5d152f2ec63701609503_1642749205840.jpg"
                  className="card-img-top"
                  alt="Gaming Laptop"
                  style={{ height: 200 }}
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="small">
                      <a
                        href="#!"
                        style={{ fontWeight: "bold" }}
                        className="text-muted"
                      >
                        Garden Decoration
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <section>
          <h1
            className="mb-3 mt-3"
            style={{ fontSize: 30, fontWeight: "bold", textAlign: "center" }}
          >
            Product
          </h1>

          <div className="container py-5 " style={{ backgroundColor: "lightgrey" }}>
            <div className="row" style={{ backgroundColor: "lightgrey" }}>

          <div className="container py-5 "style={{}}>
            <div className="row"style={{}}>

              <div className="col-md-12 col-lg-3 mb-4 mb-lg-0">
                <div className="card shadow p-3 mb-5 bg-white rounded">
                  <img
                    src="https://5.imimg.com/data5/SELLER/Default/2023/6/315178892/VH/XH/RM/148854857/enchanting-elephant-handmade-handpainted-terracotta-planters-for-living-room-garden-decoration-items-outdoor-500x500.jpg"
                    className="card-img-top"
                    alt="Crafts"
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
                      <h5 className="mb-0">Elephant Vase</h5>
                      <h5 className="text-dark mb-0">$999</h5>
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
              <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
                <div className="card shadow p-3 mb-5 bg-white rounded">
                  <img
                    src="https://m.media-amazon.com/images/I/712gGKjCQNL.AC_UF1000,1000_QL80.jpg"
                    className="card-img-top"
                    alt="Laptop"
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
                      <h5 className="text-dark mb-0">$1099</h5>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <p className="text-muted mb-0">
                        Available: <span className="fw-bold">7</span>
                      </p>
                      <div className="ms-auto text-warning">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
                <div className="card shadow p-3 mb-5 bg-white rounded">
                  <img
                    src="https://exclusivelane.com/cdn/shop/products/el-021-030_a_1.jpg?v=1570515989"
                    className="card-img-top"
                    alt="Gaming Laptop"
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
                      <h5 className="mb-0">Camel Vase</h5>
                      <h5 className="text-dark mb-0">$1299</h5>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <p className="text-muted mb-0">
                        Available: <span className="fw-bold">5</span>
                      </p>
                      <div className="ms-auto text-warning">
                        <i className="fa fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
                <div className="card shadow p-3 mb-5 bg-white rounded">
                  <img
                    src="https://m.media-amazon.com/images/I/61P9XdFK47L.AC_UF1000,1000_QL80.jpg"
                    className="card-img-top"
                    alt="Gaming Laptop"
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <p className="small">
                        <a href="#!" className="text-muted">
                          Home Decor
                        </a>
                      </p>
                      <p className="small text-danger">

                      </p>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0">Wall Hangings</h5>
                      <h5 className="text-dark mb-0">$1299</h5>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <p className="text-muted mb-0">
                        Available: <span className="fw-bold">5</span>
                      </p>
                      <div className="ms-auto text-warning">
                        <i className="fa fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12 col-lg-3 mb-4 mb-lg-0">
                <div className="card shadow p-3 mb-5 bg-white rounded">
                  <img
                    src="https://image.made-in-china.com/2f0j00GEpqICeRaicZ/Custom-Cup-Mat-Round-Natural-Rattan-Hot-Pad-Hand-Woven-Hot-Insulation-Placemats-Table-Padding-Kitchen-Decoration-Accessories.webp"
                    className="card-img-top"
                    alt="Laptop"
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <p className="small">
                        <a href="#!" className="text-muted">
                          Kitchenware
                        </a>
                      </p>
                      <p className="small text-danger">

                      </p>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0">Utensils Lid</h5>
                      <h5 className="text-dark mb-0">$999</h5>
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
              <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
                <div className="card shadow p-3 mb-5 bg-white rounded">
                  <img
                    src="https://m.media-amazon.com/images/I/61kQay8DxsL.AC_UF1000,1000_QL80.jpg"
                    className="card-img-top"
                    alt="Laptop"
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <p className="small">
                        <a href="#!" className="text-muted">
                          Home Decor
                        </a>
                      </p>
                      <p className="small text-danger">

                      </p>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0">Krishna Statue</h5>
                      <h5 className="text-dark mb-0">$1099</h5>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <p className="text-muted mb-0">
                        Available: <span className="fw-bold">7</span>
                      </p>
                      <div className="ms-auto text-warning">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
                <div className="card shadow p-3 mb-5 bg-white rounded">
                  <img
                    src="https://i5.walmartimages.com/asr/0388591b-0bd1-42dc-9249-c33b5b456763.ebbd88bf83f27af6333a2c8644e4767d.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
                    className="card-img-top"
                    alt="Gaming Laptop"
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <p className="small">
                        <a href="#!" className="text-muted">
                          Gardening
                        </a>
                      </p>
                      <p className="small text-danger">

                      </p>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0">Cactus Pot</h5>
                      <h5 className="text-dark mb-0">$1299</h5>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <p className="text-muted mb-0">
                        Available: <span className="fw-bold">5</span>
                      </p>
                      <div className="ms-auto text-warning">
                        <i className="fa fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
                <div className="card shadow p-3 mb-5 bg-white rounded">
                  <img
                    src="https://m.media-amazon.com/images/I/91a4sutchOL.AC_UF894,1000_QL80.jpg"
                    className="card-img-top"
                    alt="Gaming Laptop"
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <p className="small">
                        <a href="#!" className="text-muted">
                          Home Decor
                        </a>
                      </p>
                      <p className="small text-danger">

                      </p>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0">Glass Hangings</h5>
                      <h5 className="text-dark mb-0">$1299</h5>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <p className="text-muted mb-0">
                        Available: <span className="fw-bold">5</span>
                      </p>
                      <div className="ms-auto text-warning">
                        <i className="fa fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section>
        <h1
          className="mb-3 mt-3"
          style={{ fontSize: 30, fontWeight: "bold", textAlign: "center" }}
        >
          Tutorials
        </h1>

        {/* <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
             <video src="../vid.mp4" controls style={{height:"30rem", marginLeft:"19rem"}} ></video>
            </div>
            <div className="carousel-item">
             <video src="../vid2.mp4"  controls style={{height:"30rem", marginLeft:"19rem"}}></video>
            </div>
            <div className="carousel-item">
             <video src="../vid3.mp4" controls style={{height:"30rem", marginLeft:"19rem"}}></video>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div> */}


        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {
              product.map((pro) => {
                return (
                  <div className="carousel-item active">


                    <video src={"http://localhost:3000/" + pro.video} controls style={{ height: "30rem", marginLeft: "19rem" }} ></video>

                  </div>
                )
              })
            }
            {/* <div className="carousel-item">
             <video src="../vid2.mp4"  controls style={{height:"30rem", marginLeft:"19rem"}}  ></video>
            </div>
            <div className="carousel-item">
            <video src="../vid3.mp4"  controls style={{height:"30rem", marginLeft:"19rem"}} ></video>
            </div> */}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>


        {/* <div className="container d-flex justify-content-center">
          <div className="row">
            <div className="col-md-3 mt-3 justify-content-center">
              <video
                src="./vid.mp4"
                type="video/mp4"
                loop=""
                className="hover-to-play w-100"
                style={{ borderRadius: 10 }}
              ></video>
            </div>
            <div className="col-md-3 mt-3 justify-content-center">
              <video
                src="./vid2.mp4"
                type="video/mp4"
                loop=""
                className="hover-to-play w-100"
                style={{ borderRadius: 10 }}
              ></video>
            </div>
            <div className="col-md-3 mt-3 justify-content-center">
              <video
                src="./vid3.mp4"
                type="video/mp4"
                loop=""
                className="hover-to-play w-100"
                style={{ borderRadius: 10 }}
              ></video>
            </div>
            <div className="col-md-3 mt-3 justify-content-center">
              <video
                src="./vid4.mp4"
                type="video/mp4"
                loop=""
                className="hover-to-play w-100"
                style={{ borderRadius: 10 }}
              ></video>
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-center">
          <div className="row">
            <div className="col-md-3 mt-3 justify-content-center">
              <video
                src="./vid5.mp4"
                type="video/mp4"
                loop=""
                className="hover-to-play w-100"
                style={{ borderRadius: 10 }}
              ></video>
            </div>
            <div className="col-md-3 mt-3 justify-content-center">
              <video
                src="./vid6.mp4"
                type="video/mp4"
                loop=""
                className="hover-to-play w-100"
                style={{ borderRadius: 10 }}
              ></video>
            </div>
            <div className="col-md-3 mt-3 justify-content-center">
              <video
                src="./vid7.mp4"
                type="video/mp4"
                loop=""
                className="hover-to-play w-100"
                style={{ borderRadius: 10 }}
              ></video>
            </div>
            <div className="col-md-3 mt-3 justify-content-center">
              <video
                src="./vid8.mp4"
                type="video/mp4"
                loop=""
                className="hover-to-play w-100"
                style={{ borderRadius: 10 }}
              ></video>
            </div>
          </div>
        </div> */}
      </section>
      {/* Hero 2 - Bootstrap Brain Component */}
      <section className="bsb-hero-3 px-3 mt-5 mb-5">
        <div className="container overflow-hidden">
          <div
            className="row gy-3 gy-lg-0 align-items-lg-center justify-content-lg-between w-100"
            style={{ height: 320 }}
          >
            <div className="col-12 col-lg-5 text-center shadow p-3 mb-5 bg-white rounded">
              <img
                className="img-fluid"
                loading="lazy"
                src="https://cdn.dribbble.com/userupload/12346393/file/original-78e7d991c0cb0cde31d7e6d4b735a862.png?resize=1504x1128"
                alt="Art of Design"
                style={{ height: 250 }}
              />
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-0">
              <h2 className="display-3 fw-bold mb-3" style={{ fontSize: 30 }}>
                About Us
              </h2>
              <p className=" mb-5" style={{ fontSize: 18 }}>
                At DIY Innovate, we believe that everyone has a creative spark waiting to be ignited. Our mission is to provide you with the tools, materials, and inspiration you need to transform your creative ideas into reality.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer 2 - Bootstrap Brain Component */}
      <section>
        <footer className="footer-section">
          <div className="container">
            <div className="footer-cta pt-5 pb-5">
              <div className="row">
                <div className="col-xl-4 col-md-4 mb-30">
                  <div className="single-cta">
                    <i className="fas fa-map-marker-alt" />
                    <div className="cta-text">
                      <h4>Find us</h4>
                      <span>Hazratganj, Lucknow</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-4 mb-30">
                  <div className="single-cta">
                    <i className="fas fa-phone" />
                    <div className="cta-text">
                      <h4>Call us</h4>
                      <span>77899655</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-4 mb-30">
                  <div className="single-cta">
                    <i className="far fa-envelope-open" />
                    <div className="cta-text">
                      <h4>Mail us</h4>
                      <span>Diyinnovates24@info.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-content pt-5 pb-5">
              <div className="row">
                <div className="col-xl-4 col-lg-4 mb-50">
                  <div className="footer-widget">
                    <div className="footer-logo">
                      <a href="index.html">
                        <img
                          src="https://i.ibb.co/QDy827D/ak-logo.png"
                          className="img-fluid"
                          alt="logo"
                        />
                      </a>
                    </div>
                    <div className="footer-text">
                      <p>
                        DIY projects offer an avenue for personal expression, cost savings, and skill development. Whether it's revamping furniture, fixing a leaky faucet, or crafting handmade gifts, DIY fosters empowerment, resourcefulness, and a sense of accomplishment.
                      </p>
                    </div>
                    <div className="footer-social-icon">
                      <span>Follow us</span>
                      <a href="#">
                        <i className="fab fa-facebook-f facebook-bg" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter twitter-bg" />
                      </a>
                      <a href="#">
                        <i className="fab fa-google-plus-g google-bg" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                  <div className="footer-widget">
                    <div className="footer-widget-heading">
                      <h3>Useful Links</h3>
                    </div>
                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">about</a>
                      </li>
                      <li>
                        <a href="#">services</a>
                      </li>
                      <li>
                        <a href="#">portfolio</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                      <li>
                        <a href="#">About us</a>
                      </li>
                      <li>
                        <a href="#">Our Services</a>
                      </li>
                      <li>
                        <a href="#">Expert Team</a>
                      </li>
                      <li>
                        <a href="#">Contact us</a>
                      </li>
                      <li>
                        <a href="#">Latest News</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                  <div className="footer-widget">
                    <div className="footer-widget-heading">
                      <h3>Subscribe</h3>
                    </div>
                    <div className="footer-text mb-25">
                      <p>
                        Don’t miss to subscribe to our new feeds, kindly fill the form
                        below.
                      </p>
                    </div>
                    <div className="subscribe-form">
                      <form action="#">
                        <input type="text" placeholder="Email Address" />
                        <button>
                          <i className="fab fa-telegram-plane" />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                  <div className="copyright-text">
                    <p>
                      Copyright © 2018, All Right Reserved{" "}
                      <a href="">DIY Innovates</a>
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </footer>

      </section>
    </>



  )
}

export default Home