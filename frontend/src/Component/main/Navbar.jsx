import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useProductContext from '../../context/ProductContext'
import useUserContext from '../../context/UserContext';
import './Navbar.css'

const Navbar = () => {

  
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  const { getCartItemsCount } = useProductContext();
  const { loggedIn, logout,currentUser } = useUserContext();
  console.log(loggedIn);

  const showLoggedIn = () => {
    if (loggedIn) {
      return (
        <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
          <li className='nav-item'>
          <>
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="text-white   focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={toggleDropdown}
          >
            <img
              className="inline-block flex-shrink-0 size-[50px] rounded-full"
              src={`http://localhost:3000/${currentUser.avatar}`}
              alt="Image Description"
            />

          </button>
          {isOpen && (
            <div
              id="dropdown"
              className="z-10 hidden card  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul

                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {currentUser.name}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {currentUser.email}
                  </a>
                </li>

                <li>
                  <button onClick={logout}

                    className="d-block px-4 py-2 bg-danger  text-white"
                  >
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          )}
        </>
          </li>
        </ul>
      )
    } else {
      return(
        <form class="d-flex">

        <Link  class="btn btn-outline-success me-3 text-uppercase" type="button" to={"/main/signup"}>Signup</Link>
        <Link class="btn btn-outline-success me-3 text-uppercase" type="button" to={"/main/login"}>Login</Link>
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
              <img src="../Diy logo.png" alt="" style={{ height: 50, marginBottom:"5px" }} />
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
                <Link className="nav-link active text-dark fw-bold me-1 text-uppercase" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-bold me-3 text-uppercase" to={"/user/Product"}>
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-bold me-3 text-uppercase" to={"/main/ContactUs"}>
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-bold text-uppercase" to={"/user/Video"}>
                  Tutorial
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-bold text-uppercase" to={"/main/About"}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-bold d-flex text-uppercase" to={"/user/Cart"}>
                  <span >{getCartItemsCount()}<i className="bi bi-bag "></i></span>
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