import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import {  NavLink } from 'react-router-dom';
import "./Dofa.css"
import "bootstrap/dist/css/bootstrap.css";
import { red } from '@material-ui/core/colors';



const Navigation = () => {
  return (
   
  
    <div className="container-fluid nav-bg">
      <div className="row">
        <div className="col-10 mx-auto">

     

    <nav className="navbar navbar-expand-sm fixed-top">

      <a className="navbar-brand">DHANDA PANI</a>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <NavLink className="nav-link" to="/"> Home</NavLink>
          
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
          
        </li>
       
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
          
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
          
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/help">Help</NavLink>
          
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/browse" style={{backgroundColor:"red",fontFamily:"sans-serif"}}>Browse Jobs</NavLink>
          
        </li>
      </ul>
    </nav>
    </div>
      </div>
    </div>
    




  )
}

export default Navigation
