import React from 'react'
import { Link } from 'react-router-dom'
import useProductContext from '../../context/ProductContext'
import useUserContext from '../../UserContext';
import './Navbar.css'

const Navbar = () => {
  const { getCartItemsCount } = useProductContext();
  const { loggedIn, logout } = useUserContext();
  console.log(loggedIn);

  const showLoggedIn = () => {
    if (loggedIn) {
      return (
        <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
          <li className='nav-item'>
            <button className='btn btn-danger' onClick={logout}>Logout</button>
          </li>
        </ul>
      )
    } else {
      return(
        <form class="d-flex">

        <Link  class="btn btn-outline-success me-3" type="button" to={"/main/signup"}>Signup</Link>
        <Link class="btn btn-outline-success me-3" type="button" to={"/main/login"}>Login</Link>
        <div className="nav-menu-btn">
      <i className="bx bx-menu" onclick="myMenuFunction()" />
      
    </div>
      </form>
      )
     
    }
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white shadow">
        <div className="container-fluid">
          <div className='d-flex ms-4 mt-3'>
            <a className="navbar-brand" href="#">
              <img src="data:image/png;base64,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" alt="" style={{ height: 50 }} />
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
                <Link className="nav-link text-dark fw-bold me-3" to={"/user/Product"}>
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-bold me-3" to={"/main/ContactUs"}>
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-bold" to={"/user/Video"}>
                  Tutorial
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-bold" to={"/main/About"}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-bold" to={"/user/Cart"}>
                  Cart
                </Link>
              </li>

            </ul>
            {
              showLoggedIn()
            }
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar