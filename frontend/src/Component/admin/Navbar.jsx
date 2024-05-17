import React from 'react'
import { Link } from 'react-router-dom'
import useProductContext from '../../context/ProductContext'
import useUserContext from '../../context/UserContext';
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

        {/* <Link  class="btn btn-primary me-3 text-uppercase" type="button" to={"/main/Adminsignup"}>Signup</Link>
        <Link class="btn btn-primary me-3 text-uppercase" type="button" to={"/main/Adminsignin"}>Login</Link> */}
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
              <img src="../logo.png" alt="" style={{ height: 50, marginBottom:"20px" }}/>
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
                <Link className="nav-link text-dark fw-bold me-3 text-uppercase" to={"/admin/AddProduct"}>
                  Add Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-bold me-3 text-uppercase" to={"/admin/ManageProduct"}>
                  Manage Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-bold text-uppercase" to={"/admin/ManageUser"}>
                  Manage User
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