import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import useUserContext from '../UserContext'


const Navbar = () => {

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
        </ul>
          <div>
            {showLoggedin()}
          </div>
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar