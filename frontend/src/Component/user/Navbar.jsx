import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useProductContext from '../../context/ProductContext'
import useUserContext from '../../context/UserContext';
import './Navbar.css'
// Initialization for ES Users
import { Dropdown, initMDB } from "mdb-ui-kit";






const Navbar = () => {

  useEffect(() => {
    initMDB({ Dropdown });
  },[])


  // const [isOpen, setIsOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen);
  // }

  const { getCartItemsCount } = useProductContext();
  const { loggedIn, logout, currentUser } = useUserContext();
  console.log(loggedIn);

  const showLoggedIn = () => {
    if (loggedIn) {
      return (
       

        <nav className="">
        <div className="container-fluid">
          <ul className="navbar-nav ">
            {/* Avatar */}
            <li className="nav-item dropdown">
              <a
                data-mdb-dropdown-init=""
                className="nav-link dropdown-toggle d-flex align-items-center"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                aria-expanded="false"
              >
                <img
                  src={`http://localhost:3000/${currentUser.avatar}`}
                  className="rounded-circle"
                  height={30}
                  width={30}
                  alt="logo"
                  loading="lazy"
                />
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <Link to={"/user/userprofile"} className="dropdown-item" href="/user/UserProfile">
                    My profile
                  </Link>
                </li>
               
                <li>
                  <button onClick={logout} className="dropdown-item text-danger " href="#">
                    Logout
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      )
    } else {
      return (
        <form class="d-flex">

          <Link class="btn btn-primary me-3 text-uppercase" type="button" to={"/main/signup"}>Signup</Link>
          <Link class="btn btn-primary me-3 text-uppercase" type="button" to={"/main/login"}>Login</Link>
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
              <img src="../logo.png" alt="" style={{ height: 50, marginBottom:"20px" }} />
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
                  <span >{getCartItemsCount()}<i className="bi bi-cart"></i></span>

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