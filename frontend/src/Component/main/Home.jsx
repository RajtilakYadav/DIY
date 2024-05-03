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
<<<<<<< HEAD
      <section style={{ marginTop: 50, marginBottom: 50, backgroundColor: "lightgrey" }}>
        <h1
          className="mb-3 mt-3"
          style={{ fontSize: 30, fontWeight: "bold", textAlign: "center" }}
        >
          Categories
        </h1>
=======
      <section style={{ marginTop: 50, marginBottom: 50 }}>
      <h1
            className="mb-3 mt-3"
            style={{ fontSize: 30, fontWeight: "bold", textAlign: "center" }}
          >
            Categories
          </h1>
>>>>>>> 72c857151ad7836d6ea4f35b52617a6b500c73b7
        <div className="container justify-content-around py-5 ">
          <div className="row" style={{ marginLeft: 30 }}>
            <div className="col-md-12 col-lg-4 mb-4 mb-lg-0 justify-content-around">
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
            <div className="col-md-6 col-lg-4 mb-4 mb-md-0 justify-content-around">
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
                        Kitchen Decoration
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-md-0 justify-content-around">
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
<<<<<<< HEAD
          <div className="container py-5 " style={{ backgroundColor: "lightgrey" }}>
            <div className="row" style={{ backgroundColor: "lightgrey" }}>
=======
          <div className="container py-5 "style={{}}>
            <div className="row"style={{}}>
>>>>>>> 72c857151ad7836d6ea4f35b52617a6b500c73b7
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