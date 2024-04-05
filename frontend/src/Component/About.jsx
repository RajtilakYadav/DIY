import React from "react";
import "./About.css";
function About() {
  return (
    <div>
      <section className="py-3 py-md-5">
        <div className="container">
          <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
            <div className="col-12 col-lg-6 col-xl-5">
              <img
                className="img-fluid rounded"
                loading="lazy"
                src="https://media.istockphoto.com/id/1284272159/vector/flat-design-with-people-diy-do-it-yourself-acronym-business-concept-background.jpg?s=612x612&w=0&k=20&c=_oI2RgfsAOjw2f40Jk9mOHVAdmqFu-gjdxLDeDuhF4w="
                alt="About 1"
              />
            </div>
            <div className="col-12 col-lg-6 col-xl-7">
              <div className="row justify-content-xl-center">
                <div className="col-12 col-xl-11">
                  <h2 className="mb-3">Who Are We?</h2>
                  <p className="lead fs-4 text-secondary mb-3">
                    We help people to build incredible brands and superior
                    products. Our perspective is to furnish outstanding
                    captivating services.
                  </p>
                  <p className="mb-5">
                    We are a fast-growing company, but we have never lost sight
                    of our core values. We believe in collaboration, innovation,
                    and customer satisfaction. We are always looking for new
                    ways to improve our products and services.
                  </p>
                  <div className="row gy-4 gy-md-0 gx-xxl-5X">
                    <div className="col-12 col-md-6">
                      <div className="d-flex">
                        <div className="me-4 text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={32}
                            height={32}
                            fill="currentColor"
                            className="bi bi-gear-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                          </svg>
                        </div>
                        <div>
                          <h2 className="h4 mb-3">Versatile Brand</h2>
                          <p className="text-secondary mb-0">
                            We are crafting a digital method that subsists life
                            across all mediums.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="d-flex">
                        <div className="me-4 text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={32}
                            height={32}
                            fill="currentColor"
                            className="bi bi-fire"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                          </svg>
                        </div>
                        <div>
                          <h2 className="h4 mb-3">Digital Agency</h2>
                          <p className="text-secondary mb-0">
                            We believe in innovation by merging primary with
                            elaborate ideas.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-3">
          <div className="card">
            <div className="row ">
              <div className="col-md-7 px-3">
                <div className="card-block px-6 mt-5">
                  <h4 className="card-title justify-content-center">
                    About Us
                  </h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit, soluta porro animi iste facilis aut quos amet possimus
                    laudantium vel?
                  </p>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum, et eaque praesentium recusandae sed animi ipsam
                    tempore voluptate nulla omnis?
                  </p>
                  <br />
                </div>
              </div>
              <div className="col-md-5">
                <div
                  id="CarouselTest"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active justify-content-center">
                      <img
                        className="d-block"
                        src="https://optimisticmommy.com/wp-content/uploads/2020/05/woman-diy-AdobeStock_206311945-1024x683.jpeg"
                        alt=""
                        style={{ height: "400px", width: "520px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-3">
          <div className="card">
            <div className="row ">
              <div className="col-md-5">
                <div
                  id="CarouselTest"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active justify-content-center">
                      <img
                        className="d-block"
                        src="https://i.pngimg.me/thumb/f/720/comrawpixel469275.jpg"
                        alt=""
                        style={{ height: "400px", width: "520px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-7 px-3">
                <div className="card-block px-6 mt-5">
                  <h4 className="card-title justify-content-center">
                    About Us
                  </h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit, soluta porro animi iste facilis aut quos amet possimus
                    laudantium vel?
                  </p>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum, et eaque praesentium recusandae sed animi ipsam
                    tempore voluptate nulla omnis?
                  </p>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container d-flex justify-content-center">
          <div class="row">
            <div class="col-md-4">
              <div className="card text-center" style={{height:"210px"}}>
                <div className="card-body">
                  <h5 className="card-title mt-3"><b>Online Store</b></h5>
                  <p className="card-text mt-4">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div className="card text-center" style={{height:"210px"}}>
                <div className="card-body">
                  <h5 className="card-title mt-3"><b>Video Tutorial</b></h5>
                  <p className="card-text mt-4">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div className="card text-center" style={{height:"210px",}}>
                <div className="card-body">
                  <h5 className="card-title mt-3"><b>24*7 Online Chat</b></h5>
                  <p className="card-text mt-4">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer id="sticky-footer"className="flex-shrink-0 py-4 bg-dark text-white-50 mt-5">
  <div className="container text-center">
    <small>Copyright © Your Website</small>
  </div>
</footer>
    </div>
  );
}

export default About;
