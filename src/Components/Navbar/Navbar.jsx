import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {

const location = useLocation()
console.log(location.pathname);


  return <>
  
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
  <i className="fa-solid fa-cart-shopping fs-3" style={{color:"#4fa74f"}}></i>
    <Link className="navbar-brand fs-2 fw-bold "  to="home">fresh cart</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     
     
       { location.pathname === "/login" || location.pathname === "/register" ? 
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/register">Register</Link>
        </li>
       
      </ul>
       
       : 
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cart">Cart</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/wish">Wish List</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/categories">Categories</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/brands">Brands</Link>
        </li>
        <li className="nav-item">
          <Link  to='/login' className="nav-link ">Logout</Link>
        
      </li>
     
      </ul>

       
       }
   
      
    </div>
  </div>
</nav>
  
  
  
  
  
  </>
}
