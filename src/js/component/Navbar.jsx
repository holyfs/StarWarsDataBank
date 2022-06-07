import React from "react";
import { Link } from "react-router-dom";
import "/workspace/react-hello-webapp/src/styles/NavBar.css"


export const Navbar = () => {
	return (
<nav className="navbar bg-warning ">
  <div className="container-fluid ">
    <a className="navbar-brand" href="#">
      <img src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png" alt="Star Wars" style={{width:100+"px", height:100 + "px"}}/>
    </a>
	<button className="btn btn-lg btn-primary" type="button">Favorites</button>
  </div>
</nav>
)};
