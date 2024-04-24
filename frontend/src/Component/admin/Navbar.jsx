import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
        <div className="container-fluid">
          <div className='d-flex ms-4 mt-3'>
          <a className="navbar-brand" href="#">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi9cZzhw1U4yXFA82psxthYe8s2PQwz5uW3M2Y7OXItw&s" alt="" style={{height:50}}/>
          </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link active text-dark fw-bold me-1" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-bold me-3" to={"/admin/addproduct"}>
                  Add Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-bold me-3" to={"/admin/ManageProduct"}>
                 Manage Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-bold" to={"/admin/ManageUser"}>
                 Manage User
                </Link>
              </li>
            
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar