import React from "react";
import "../../styles/NavBar.css"
import { useNavigate } from "react-router-dom";
import Favorites from "./Favorites.jsx";


export const Navbar = () => {
  let navigate = useNavigate()
	return (
<nav className="navbar bg-warning ">
  <div className="container-fluid ">
    <a className="navbar-brand" onClick={()=>{navigate("/")}}>
      <img src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png" alt="Star Wars" style={{width:100+"px", height:100 + "px"}}/>
    </a>
	<div><Favorites /></div>
  </div>
</nav>
)};
