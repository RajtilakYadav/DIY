import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import useUserContext from '../UserContext'
import useProductContext from '../context/ProductContext'


const Navbar = () => {

   const { getCartItemsCount } = useProductContext();

  const { loggedIn, logout } = useUserContext()
  console.log(loggedIn)
  const showLoggedin = () => {
    if (loggedIn) {
      return (
        <ul>
          <li>
            <button className='btn btn-danger' onClick={logout}>Logout</button>
          </li>
        </ul>
      );

    } else {
      return <div>
        <Link to='/Signup' type='button btn btn-outline primary'>Signup</Link>
        <Link to='/Login' type='button btn btn-outline primary'>Login</Link>
      </div>
    }
  }
  return (
    <div><nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <div className="container">
      
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link className="nav-link mx-2 active" to="/Home">
            Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mx-2" to="/About">
            About
            </Link>
          </li>
          <li className="nav-item">
          </li>
          <li className="nav-item">
            <Link className="nav-link mx-2" to="/admin/addproduct">
           AddProduct
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mx-2" to="/Cart">
           
           Cart
            </Link>
          </li>
        </ul>
          <div>
            {showLoggedin()}
          </div>
      </div>
    </div>
  </nav>
  <header>
    <nav className="navbar navbar-expand-lg bg-white sticky-top navbar-light p-3 shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="https://eternitymarketing.com/assets/image-cache/blog/diy.f3f58320.jpg"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: 50,
              width: 100
            }}
          />{" "}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="mx-auto my-3 d-lg-none d-sm-block d-xs-block">
          <div className="input-group">
            <span className="border-warning input-group-text bg-warning text-white">
              <i className="fa-solid fa-magnifying-glass" />
            </span>
            <input
              type="text"
              className="form-control border-warning"
              style={{ color: "#7a7a7a" }}
            />
            <button className="btn btn-warning text-white">Search</button>
          </div>
        </div>
        <div className=" collapse navbar-collapse" id="navbarNavDropdown">
          <div className="ms-auto d-none d-lg-block">
            {/* <div className="input-group">
              <span className="border-warning input-group-text bg-warning text-white">
                <i className="fa-solid fa-magnifying-glass" />
              </span>
              <input
                type="text"
                className="form-control border-warning"
                style={{ color: "#7a7a7a" }}
              />
              <button className="btn btn-warning text-white">Search</button>
            </div> */}
          </div>
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <Link
                className="nav-link mx-2 text-uppercase active"
                aria-current="page"
                to="Offers"
              >
                Offers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2 text-uppercase" to="Product">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2 text-uppercase" to="Catalog">
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2 text-uppercase" to="Services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2 text-uppercase" to="About">
                About
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <Link className="nav-link mx-2 text-uppercase" to={"/Cart"}>
             
              <div className='d-flex '>
              <span>{getCartItemsCount()}</span>
              <i className="fa-solid fa-cart-shopping ms-3 mt-2" />
              <span>Cart</span>
              </div>
                
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2 text-uppercase" href="#">
                <i className="fa-solid fa-circle-user me-1" /> Account
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  </div>
  )
}

export default Navbar