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
      <nav className="navbar navbar-expand-lg bg-warning shadow">
        <div className="container-fluid">
          <div className='d-flex ms-4 mt-3'>
            <a className="navbar-brand" href="#">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi9cZzhw1U4yXFA82psxthYe8s2PQwz5uW3M2Y7OXItw&s" alt="" style={{ height: 50 }} />
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