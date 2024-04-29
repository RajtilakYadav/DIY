import React from 'react'
import './About.css'

const About = () => {
  return (
    <div>
      <>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  
  <div className="bg-light">
    <div className="container py-5">
      <div className="row h-100 align-items-center py-5">
        <div className="col-lg-6">
          <h1 className="display-4">About us </h1>
          <p className="lead text-muted mb-0">
          Welcome to DIY Innovate your ultimate online destination for unleashing creativity and bringing your imaginative projects to life!

 At DIY Innovate, we believe that everyone has a creative spark waiting to be ignited. Our mission is to provide you with the tools, materials, and inspiration you need to transform your creative ideas into reality.
          </p>
          {/* <p className="lead text-muted">
            Snippet by{" "}
            <a href="https://bootstrapious.com/snippets" className="text-muted">
              <u>Bootstrapious</u>
            </a>
          </p> */}
        </div>
        <div className="col-lg-6 d-none d-lg-block">
          <img
            src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/illus_kftyh4.png"
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  </div>
  <div className="bg-white py-5">
    <div className="container py-5">
      <div className="row align-items-center mb-5">
        <div className="col-lg-6 order-2 order-lg-1">
          <i className="fa fa-bar-chart fa-2x mb-3 text-primary" />
          <h2 className="font-weight-light">Our Products</h2>
          <p className="font-italic text-muted mb-4">
          From card-making kits to showpiece materials, our carefully curated selection is designed to cater to a wide range of interests and skill levels. We’re constantly updating our inventory with the latest trends and classic favorites to ensure you have everything you need for your next project.
          </p>
          <a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">
            Learn More
          </a>
        </div>
        <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
          <img
            src="https://cdn.dribbble.com/userupload/10541490/file/original-1e6a8918032fd0d6ce7c8c98281cd146.jpg?resize=640x480&vertical=center"
            alt=""
            className="img-fluid mb-4 mb-lg-0"
          />
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-5 px-5 mx-auto">
          <img
            src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/img-2_vdgqgn.jpg"
            alt=""
            className="img-fluid mb-4 mb-lg-0"
          />
        </div>
        <div className="col-lg-6">
          <i className="fa fa-leaf fa-2x mb-3 text-primary" />
          <h2 className="font-weight-light">Video Tutorials</h2>
          <p className="font-italic text-muted mb-4">
          We don’t just supply the materials – we guide you through the process. Our extensive library of video tutorials provides clear, step-by-step instructions that make it easy for you to follow along and learn new techniques at your own pace.
          </p>
          <a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">
            Learn More
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="bg-light py-5">
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col-lg-5">
          <h2 className="display-4 font-weight-light">Our team</h2>
          <p className="font-italic text-muted">
            Meet Our Creative Minds
          </p>
        </div>
      </div>
      <div className="row text-center">
        {/* Team item*/}
        {/* <div className="col-xl-3 col-sm-6 mb-5">
          <div className="bg-white rounded shadow-sm py-5 px-4">
            <img
              src="https://res.cloudinary.com/mhmd/image/upload/v1556834132/avatar-4_ozhrib.png"
              alt=""
              width={100}
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
            <h5 className="mb-0">Manuella Nevoresky</h5>
            <span className="small text-uppercase text-muted">
              CEO - Founder
            </span>
            <ul className="social mb-0 list-inline mt-3">
              <li className="list-inline-item">
                <a href="#" className="social-link">
                  <i className="fa fa-facebook-f" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="social-link">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="social-link">
                  <i className="fa fa-instagram" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="social-link">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div> */}
        {/* End*/}
        {/* Team item*/}
        <div className="col-xl-3 col-sm-6 mb-5">
          <div className="bg-white rounded shadow-sm py-5 px-4">
            <img
              src="https://res.cloudinary.com/mhmd/image/upload/v1556834130/avatar-3_hzlize.png"
              alt=""
              width={100}
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
            <h5 className="mb-0">Aakarsh Chaurasia</h5>
            <span className="small text-uppercase text-muted">
              CEO - Founder
            </span>
            <ul className="social mb-0 list-inline mt-3">
              <li className="list-inline-item">
                <a href="#" className="social-link">
                  <i className="fa fa-facebook-f" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="social-link">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="social-link">
                  <i className="fa fa-instagram" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="social-link">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* End*/}
        {/* Team item*/}
        <div className="col-xl-3 col-sm-6 mb-5">
          <div className="bg-white rounded shadow-sm py-5 px-4">
            <img
              src="https://res.cloudinary.com/mhmd/image/upload/v1556834133/avatar-2_f8dowd.png"
              alt=""
              width={100}
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
            <h5 className="mb-0">Raj Tilak Yadav</h5>
            <span className="small text-uppercase text-muted">
              CEO - Founder
            </span>
            <ul className="social mb-0 list-inline mt-3">
              <li className="list-inline-item">
                <a href="#" className="social-link">
                  <i className="fa fa-facebook-f" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="social-link">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="social-link">
                  <i className="fa fa-instagram" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="social-link">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* End*/}
        {/* Team item*/}
        {/* <div className="col-xl-3 col-sm-6 mb-5">
          <div className="bg-white rounded shadow-sm py-5 px-4">
            <img
              src="https://res.cloudinary.com/mhmd/image/upload/v1556834133/avatar-1_s02nlg.png"
              alt=""
              width={100}
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
            <h5 className="mb-0">John Tarly</h5>
            <span className="small text-uppercase text-muted">
              CEO - Founder
            </span>
            <ul className="social mb-0 list-inline mt-3">
              <li className="list-inline-item">
                <a href="#" className="social-link">
                  <i className="fa fa-facebook-f" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="social-link">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="social-link">
                  <i className="fa fa-instagram" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="social-link">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div> */}
        {/* End*/}
      </div>
    </div>
  </div>
  <footer className="bg-light pb-5">
    <div className="container text-center">
      <p className="font-italic text-muted mb-0">
        © Copyrights Company.com All rights reserved.
      </p>
    </div>
  </footer>
</>

    </div>
  )
}

export default About