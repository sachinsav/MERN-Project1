import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {NavLink} from 'react-router-dom';
import {UserContext} from '../App'

const Navbar = () => {
  const {state, dispatch} = useContext(UserContext)
    return (
        <div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/home">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>
        </li>
        {state?"":
        <>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/signin">Signin</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/signup">Registration</NavLink>
        </li>
        </>
        }
        {state?
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/logout">Logout</NavLink>
        </li>:""}



      </ul>
     
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar