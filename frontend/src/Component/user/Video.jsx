import React from 'react'

const Video = () => {
  return (
    <div>
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossOrigin="anonymous"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    nav{\n        background-color: gray;\n    }\n          \n  "
    }}
  />
  <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img
          src="https://eternitymarketing.com/assets/image-cache/blog/diy.f3f58320.jpg"
          style={{
            height: 50,
            width: 100,
            mixBlendMode: "multiply",
            filter: "contrast(1)"
          }}
        />{" "}
      </a>
      <button
        data-mdb-collapse-init=""
        className="navbar-toggler"
        type="button"
        data-mdb-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a
              className="nav-link active"
              style={{ color: "white" }}
              aria-current="page"
              href="#"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" style={{ color: "white" }}>
              Disabled
            </a>
          </li>
        </ul>
        <form className="d-flex input-group w-auto" style={{ color: "white" }}>
          <input
            type="search"
            className="form-control"
            placeholder="Type query"
            aria-label="Search"
          />
          <button
            data-mdb-ripple-init=""
            className="btn btn-outline-primary"
            type="button"
            data-mdb-ripple-color="dark"
            style={{ color: "white" }}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
  <section>
    <div className="height-100 ">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mt-4">
            <div className="card " style={{ width: "20rem" }}>
              <video src="./vid.mp4" className="mt-1" />
              <div className="card-body">
                <h5 className="card-title">Video title</h5>
                <p className="card-text" style={{ fontSize: 14 }}>
                  Some quick example text to build on the card title and make up
                  the bulk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

    </div>
  )
}

export default Video;