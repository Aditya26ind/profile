import { useState } from "react";
import React from "react";
import "./navbar.css";
import "../Photos/Logo/logo.css"

function Nav(){
    return(
<div>
<nav className="navbar navbar-expand-lg navbar-light bg-primary" id="full_nav">
  <a className="navbar-brand" href="#">ADITYA</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav  ml-auto">
    <li className="nav-item active">
        <a className="nav-link" href="/">HOME</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/pythonproject">PYTHON PROJECTS<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/webproject">WEB PROJECTS</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/certificates">CERTIFICATES</a>
      </li>
      
    </ul>
  </div>
</nav>
</div>




    );
}
export default Nav;