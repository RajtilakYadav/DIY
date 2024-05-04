import React from 'react'
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import video from '../../../public/vid.mp4'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Home = () => {
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
            <section className="bsb-hero-2 bg-primary bg-opacity-25 ">
              <div className="container overflow-hidden w-100 justify-content-center md-4">
                <div className="row  align-items-lg-center justify-content-lg-between">
                  <div className="col-12 col-lg-6 order-1 order-lg-0">
                    <h3 className="display-3 fw-bold mb-3" style={{ fontSize: 50 }}>
                      Art of Design
                    </h3>
                    <p className="fs-4 mb-5" style={{ fontSize: 25 }}>
                      Powerful, extensible, and feature-packed frontend toolkit. Build and
                      customize with Sass, .
                    </p>
                    <div className="d-grid gap-2 d-sm-flex">
                      <button
                        type="button"
                        className="btn btn-primary bsb-btn-xl px-5 fs-5 rounded-pill"
                        style={{ height: 60,fontFamily:"serif"}}
                      >
                        Explore
                      </button>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 text-center" style={{ height: 400 }}>
                    <img
                      className="img-fluid"
                      src="https://cdn3d.iconscout.com/3d/premium/thumb/business-person-giving-presentation-6462839-5360936.png?f=webp"
                      alt="Art of Design"
                    />
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="bsb-hero-2 bg-primary bg-opacity-25">
              <div className="container overflow-hidden w-100 justify-content-center">
                <div className="row  align-items-lg-center justify-content-lg-between">
                  <div className="col-12 col-lg-6 order-1 order-lg-0">
                    <h3 className="display-3 fw-bold mb-3" style={{ fontSize: 50 }}>
                      Art of Design
                    </h3>
                    <p className="fs-4 mb-5" style={{ fontSize: 25 }}>
                      Powerful, extensible, and feature-packed frontend toolkit. Build and
                      customize with Sass, .
                    </p>
                    <div className="d-grid gap-2 d-sm-flex">
                      <button
                        type="button"
                        className="btn btn-primary bsb-btn-xl px-5 fs-5 rounded-pill"
                        style={{ height: 60,fontFamily:"serif" }}
                      >
                       Explore
                      </button>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 text-center" style={{ height: 400 }}>
                    <img
                      className="img-fluid"
                      src="https://cdn3d.iconscout.com/3d/premium/thumb/business-person-giving-presentation-6462839-5360936.png?f=webp"
                      alt="Art of Design"
                    />
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="bsb-hero-2 bg-primary bg-opacity-25">
              <div className="container overflow-hidden w-100 justify-content-center">
                <div className="row  align-items-lg-center justify-content-lg-between">
                  <div className="col-12 col-lg-6 order-1 order-lg-0">
                    <h3 className="display-3 fw-bold mb-3" style={{ fontSize: 50 }}>
                      Art of Design
                    </h3>
                    <p className="fs-4 mb-5" style={{ fontSize: 25 }}>
                      Powerful, extensible, and feature-packed frontend toolkit. Build and
                      customize with Sass, .
                    </p>
                    <div className="d-grid gap-2 d-sm-flex">
                      <button
                        type="button"
                        className="btn btn-primary bsb-btn-xl px-5 fs-5 rounded-pill"
                        style={{ height: 60, fontFamily:"serif" }}
                      >
                        Explore
                      </button>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 text-center" style={{ height: 400 }}>
                    <img
                      className="img-fluid"
                      src="https://cdn3d.iconscout.com/3d/premium/thumb/business-person-giving-presentation-6462839-5360936.png?f=webp"
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
      <section style={{ marginTop: 50, marginBottom: 50, backgroundColor: "pink" }}>
        <div className="container justify-content-around py-5 ">
          <div className="row" style={{ marginLeft: 30 }}>
            <div className="col-md-12 col-lg-4 mb-4 mb-lg-0 justify-content-around">
              <div className="card" style={{ width: 230 }}>
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
              <div className="card" style={{ width: 230 }}>
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
              <div className="card" style={{ width: 230 }}>
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
          <div className="container py-5 ">
            <div className="row">
              <div className="col-md-12 col-lg-3 mb-4 mb-lg-0">
                <div className="card">
                  <img
                    src="https://5.imimg.com/data5/SELLER/Default/2023/6/315178892/VH/XH/RM/148854857/enchanting-elephant-handmade-handpainted-terracotta-planters-for-living-room-garden-decoration-items-outdoor-500x500.jpg"
                    className="card-img-top"
                    alt="Laptop"
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <p className="small">
                        <a href="#!" className="text-muted">
                          Laptops
                        </a>
                      </p>
                      <p className="small text-danger">
                        <s>$1099</s>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0">HP Notebook</h5>
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
                <div className="card">
                  <img
                    src="https://m.media-amazon.com/images/I/712gGKjCQNL.AC_UF1000,1000_QL80.jpg"
                    className="card-img-top"
                    alt="Laptop"
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <p className="small">
                        <a href="#!" className="text-muted">
                          Laptops
                        </a>
                      </p>
                      <p className="small text-danger">
                        <s>$1199</s>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0">HP Envy</h5>
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
                <div className="card">
                  <img
                    src="https://exclusivelane.com/cdn/shop/products/el-021-030_a_1.jpg?v=1570515989"
                    className="card-img-top"
                    alt="Gaming Laptop"
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <p className="small">
                        <a href="#!" className="text-muted">
                          Laptops
                        </a>
                      </p>
                      <p className="small text-danger">
                        <s>$1399</s>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0">Toshiba B77</h5>
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
                <div className="card">
                  <img
                    src="https://m.media-amazon.com/images/I/61P9XdFK47L.AC_UF1000,1000_QL80.jpg"
                    className="card-img-top"
                    alt="Gaming Laptop"
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <p className="small">
                        <a href="#!" className="text-muted">
                          Laptops
                        </a>
                      </p>
                      <p className="small text-danger">
                        <s>$1399</s>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0">Toshiba B77</h5>
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
                <div className="card">
                  <img
                    src="https://image.made-in-china.com/2f0j00GEpqICeRaicZ/Custom-Cup-Mat-Round-Natural-Rattan-Hot-Pad-Hand-Woven-Hot-Insulation-Placemats-Table-Padding-Kitchen-Decoration-Accessories.webp"
                    className="card-img-top"
                    alt="Laptop"
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <p className="small">
                        <a href="#!" className="text-muted">
                          Laptops
                        </a>
                      </p>
                      <p className="small text-danger">
                        <s>$1099</s>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0">HP Notebook</h5>
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
                <div className="card">
                  <img
                    src="https://m.media-amazon.com/images/I/61kQay8DxsL.AC_UF1000,1000_QL80.jpg"
                    className="card-img-top"
                    alt="Laptop"
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <p className="small">
                        <a href="#!" className="text-muted">
                          Laptops
                        </a>
                      </p>
                      <p className="small text-danger">
                        <s>$1199</s>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0">HP Envy</h5>
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
                <div className="card">
                  <img
                    src="https://i5.walmartimages.com/asr/0388591b-0bd1-42dc-9249-c33b5b456763.ebbd88bf83f27af6333a2c8644e4767d.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
                    className="card-img-top"
                    alt="Gaming Laptop"
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <p className="small">
                        <a href="#!" className="text-muted">
                          Laptops
                        </a>
                      </p>
                      <p className="small text-danger">
                        <s>$1399</s>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0">Toshiba B77</h5>
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
                <div className="card">
                  <img
                    src="https://m.media-amazon.com/images/I/91a4sutchOL.AC_UF894,1000_QL80.jpg"
                    className="card-img-top"
                    alt="Gaming Laptop"
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <p className="small">
                        <a href="#!" className="text-muted">
                          Laptops
                        </a>
                      </p>
                      <p className="small text-danger">
                        <s>$1399</s>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0">Toshiba B77</h5>
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
        <div className="container d-flex justify-content-center">
          <div className="row">
            <div className="col-md-3 mt-3 justify-content-center">
              <video
                src={video}
                type="video/mp4"
                loop=""
                className="hover-to-play w-100"
                style={{ borderRadius: 10 }}
              ></video>
            </div>
            <div className="col-md-3 mt-3 justify-content-center">
              <video
                src={video}
                type="vid2/mp4"
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
        </div>
      </section>
      {/* Hero 2 - Bootstrap Brain Component */}
      <section className="bsb-hero-2 px-3 mt-5 mb-5">
        <div className="container overflow-hidden">
          <div
            className="row gy-3 gy-lg-0 align-items-lg-center justify-content-lg-between w-100"
            style={{ height: 320 }}
          >
            <div className="col-12 col-lg-5 text-center">
              <img
                className="img-fluid"
                loading="lazy"
                src="https://png.pngtree.com/element_our/sm/20180613/sm_5b21127f6cfb4.jpg"
                alt="Art of Design"
                style={{ height: 250 }}
              />
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-0">
              <h2 className="display-3 fw-bold mb-3" style={{ fontSize: 30 }}>
                About Us
              </h2>
              <p className=" mb-5" style={{ fontSize: 18 }}>
                Powerful, extensible, and feature-packed frontend toolkit. Build and
                customize with Sass, utilize prebuilt grid system and components,
                and bring projects to life with powerful JavaScript plugins.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer 2 - Bootstrap Brain Component */}
      <section>
        <footer className="footer mt-5">
          {/* Widgets - Bootstrap Brain Component */}
          <section
            className="bg-light py-4 py-md-5 py-xl-8 border-top"
            style={{ backgroundColor: "rgb(89, 87, 87)" }}
          >
            <div className="container overflow-hidden">
              <div className="row gy-4 gy-lg-0 justify-content-xl-between">
                <div className="col-12 col-md-4 col-lg-3 col-xl-2">
                  <div className="widget">
                    <a href="#!">
                      <img
                        src="./assets/img/bsb-logo.svg"
                        alt="BootstrapBrain Logo"
                        width={175}
                        height={57}
                      />
                    </a>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3 col-xl-2">
                  <div className="widget">
                    <h4 className="widget-title mb-4">Get in Touch</h4>
                    <address className="mb-4">
                      8014 Edith Blvd NE, Albuquerque, New York, United States
                    </address>
                    <p className="mb-1">
                      <a
                        className="link-secondary text-decoration-none"
                        href="tel:+15057922430"
                      >
                        (505) 792-2430
                      </a>
                    </p>
                    <p className="mb-0">
                      <a
                        className="link-secondary text-decoration-none"
                        href="mailto:demo@yourdomain.com"
                      >
                        demo@yourdomain.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3 col-xl-2">
                  <div className="widget">
                    <h4 className="widget-title mb-4">Learn More</h4>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <a
                          href="#!"
                          className="link-secondary text-decoration-none"
                        >
                          About
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          href="#!"
                          className="link-secondary text-decoration-none"
                        >
                          Contact
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          href="#!"
                          className="link-secondary text-decoration-none"
                        >
                          Advertise
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          href="#!"
                          className="link-secondary text-decoration-none"
                        >
                          Terms of Service
                        </a>
                      </li>
                      <li className="mb-0">
                        <a
                          href="#!"
                          className="link-secondary text-decoration-none"
                        >
                          Privacy Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-lg-3 col-xl-4">
                  <div className="widget">
                    <h4 className="widget-title mb-3">Feedback</h4>
                    <form action="#!">
                      <div className="row gy-4">
                        <div className="col-12">
                          <div className="input-group">
                            <span
                              className="input-group-text"
                              id="email-newsletter-addon"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-envelope"
                                viewBox="0 0 16 16"
                              >
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                              </svg>
                            </span>
                            <input
                              type="email"
                              className="form-control"
                              id="email-newsletter"
                              defaultValue=""
                              placeholder="Email Address"
                              aria-label="email-newsletter"
                              aria-describedby="email-newsletter-addon"
                              required=""
                            />
                          </div>
                          <textarea
                            rows={4}
                            cols={50}
                            className="form-control mt-2"
                            name="comment"
                            form="usrform"
                            defaultValue={
                              "                      Enter text here..."
                            }
                          />
                        </div>
                        <div className="col-12">
                          <div className="d-grid">
                            <button className="btn btn-primary" type="submit">
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </footer>
      </section>
    </>



  )
}

export default Home