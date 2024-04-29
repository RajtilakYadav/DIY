import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div><>
  
  <section className="stn 100vh"> 
    <video className="card-img-top" autoplay controls muted loop disablePictureInPicture>
      <source src="../Document/vid.mp4" type="video/mp4" />
    </video>
    {/* <h1 class="hero-title">Welcome to my Website</h1>
  <h5 class="hero-subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit
  </h5>
  <button class="btn btn-outlint-info" style="background-color: aliceblue;color:black;">Lern button</button> */}
  </section>
  <main>
    <section>
      <a href="#">
        <h4
          className="text-center mt-5"
          style={{ fontSize: 40, fontWeight: "bold", color: "black" }}
        >
          Online Store
        </h4>
      </a>
      <div className="container mt-3 ">
        <div className="row">
          <div className="col-md-4 col-sm-6 ">
            <div className="card mb-30 Larger shadow">
              <a className="card-img-tiles" href="#" data-abc="true">
                <div className="inner">
                  <div className="main-img">
                    <img
                      src="https://don16obqbay2c.cloudfront.net/wp-content/uploads/diy-product-1701335144.png"
                      alt="Category"
                    />
                  </div>
                  <div className="thumblist">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsNtOYT_oEC3gRdq9bkUOjWWq_lcA_dOFak67D0Mpzg8yGAJLLCaQ0_3pFi-7QTtQ1_pw&usqp=CAU"
                      alt="Category"
                    />
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOV9KKzVZV5g0op7mhLq_ScKnLJQ3AZcyNtRpmlqsB28KV8f9s1khtvxV3FRymoluA6_w&usqp=CAU"
                      alt="Category"
                    />
                  </div>
                </div>
              </a>
              <div className="card-body text-center">
                <h4 className="card-title">Homemade</h4>
                <p className="text-muted">Starting from ₹00</p>
                <a
                  className="btn btn-outline-primary btn-sm"
                  href="#"
                  data-abc="true"
                >
                  View Products
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="card mb-30 Larger shadow">
              <a className="card-img-tiles" href="#" data-abc="true">
                <div className="inner">
                  <div className="main-img">
                    <img src="https://i.pinimg.com/736x/f8/49/47/f8494734d54574e71db3a3dd8f859b5d.jpg" />
                  </div>
                  <div className="thumblist">
                    <img
                      src="https://i.pinimg.com/236x/30/83/cf/3083cf73d4e0fe12b0fbdc65574ffc23.jpg"
                      alt="Category"
                    />
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4_V8DerMzbYVsvPkgEbMAx6JD7h58X2fFJTDkLlM3QIiaoXjnPQI4XcIk5hnyX9ihaM&usqp=CAU"
                      alt="Category"
                    />
                  </div>
                </div>
              </a>
              <div className="card-body text-center">
                <h4 className="card-title">Kitchenware</h4>
                <p className="text-muted">Starting from ₹00</p>
                <a
                  className="btn btn-outline-primary btn-sm"
                  href="#"
                  data-abc="true"
                >
                  View Products
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="card mb-30 Larger shadow">
              <a className="card-img-tiles" href="#" data-abc="true">
                <div className="inner">
                  <div className="main-img">
                    <img
                      src="https://saumiccraft.com/wp-content/uploads/2023/08/CPP04793-300x300.jpg"
                      alt="Category"
                    />
                  </div>
                  <div className="thumblist">
                    <img
                      src="https://www.cyruscrafts.com/img/cms/blog/useful-handicrafts/handicraft-decorative-1.jpg"
                      alt="Category"
                    />
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSps1-dcAkuJ9Y67-J9FVmbflvwV3sHI6t--f1bPyoZK9nQJ_DbqwJxmNX7oE_ef07ITA&usqp=CAU"
                      alt="Category"
                    />
                  </div>
                </div>
              </a>
              <div className="card-body text-center">
                <h4 className="card-title">Ready To Use</h4>
                <p className="text-muted">Starting from ₹00</p>
                <a
                  className="btn btn-outline-primary btn-sm"
                  href="#"
                  data-abc="true"
                >
                  View Products
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <a href="#">
        <h1
          className="text-center mt-5"
          style={{ fontSize: 40, fontWeight: "bold", color: "black" }}
        >
          Video Tutorial
        </h1>
      </a>
      <div className="container d-flex justify-content-center mt-3">
        <div className="row">
          <div className="col-md-4">
            <div className="card Larger shadow" style={{ margin: "1em auto" }}>
              <video
                src="../Document/vid5.mp4"
                className="card-img-top "
                autoplay controls muted loop
                disablePictureInPicture
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <a href="#" className="btn btn-primary">
                  See More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card Larger shadow" style={{ margin: "1em auto" }}>
              <video
                src="../Document/vid3.mp4"
                className="card-img-top"
                autoplay controls muted loop
                disablePictureInPicture
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <a href="#" className="btn btn-primary">
                  See More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card Larger shadow" style={{ margin: "1em auto" }}>
              <video
                src="../Document/vid2.mp4"
                className="card-img-top "
                autoplay controls muted loop
                disablePictureInPicture
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <a href="#" className="btn btn-primary">
                  See More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      style={{
        mixBlendMode: "multiply",
        filter: "contrast(1)",
        border: "none"
      }}
    >
      <div className="container mt-3 mb-2 d-flex justify-content-center">
        <div clas="card">
          <div className="row">
            <div
              className="container justify-content-center col-md-6"
              style={{ marginTop: 20 }}
            >
              <h2
                className="text-center"
                style={{ color: "black", marginTop: 70 }}
              >
                About Us
              </h2>
              <p
                className="mt-2"
                style={{
                  fontSize: "Large",
                  textAlign: "center",
                  color: "black"
                }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. A,
                laudantium! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Reiciendis porro culpa ut necessitatibus magnam sequi ab
                saepe pariatur tempore.
                <br />
                <br /> Placeat quidem magni sint quaerat quia qui nostrum
                laudantium, quas optio consequuntur ullam facere accusamus
                debitis voluptas laborum! Est, tempore et? Ea harum consectetur
                nesciunt quas temporibus iure aperiam vero mollitia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer>
    <div className="mt-5 pt-5 pb-5 footer">
      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="col-lg-5 col-xs-12 about-company">
            <h2>Heading</h2>
            <p className="pr-5 text-white-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
              ante mollis quam tristique convallis{" "}
            </p>
          </div>
          <div className="col-lg-3 col-xs-12 links">
            <h4 className="mt-lg-0 mt-sm-3">Links</h4>
            <ul className="m-0 p-0">
              <li>
                - <a href="#">Lorem ipsum</a>
              </li>
              <li>
                - <a href="#">Nam mauris velit</a>
              </li>
              <li>
                - <a href="#">Etiam vitae mauris</a>
              </li>
              <li>
                - <a href="#">Fusce scelerisque</a>
              </li>
              <li>
                - <a href="#">Sed faucibus</a>
              </li>
              <li>
                - <a href="#">Mauris efficitur nulla</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-xs-12 location">
            <h4 className="mt-lg-0 mt-sm-4">Location</h4>
            <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
            <p className="mb-0">
              <i className="fa fa-phone mr-3" />
              (541) 754-3010
            </p>
            <p>
              <i className="fa fa-envelope-o mr-3" />
              info@hsdf.com
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</>
  </div>
  )
}

export default Home