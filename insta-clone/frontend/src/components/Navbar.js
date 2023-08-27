import React from "react";
import logo from "../img/Ig logo.png";
import "./Navbar.css";
import {Link} from "react-router-dom"


export default function Navbar(){
    return (
        <div className = "navbar">
            <img src = {logo} alt = ""/>
            <ul className = "nav-manu">

            <Link to = "/signup">
         <li>SignUp</li>
         </Link>

         <Link to = "/signin">
         <li>SignIn</li>
         </Link>

         <Link to = "/profile">
         <li>Profile</li>
         </Link>
           
           
          
        </ul>
        </div>
    );
}