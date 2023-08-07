import React from "react";
import logo from "../img/logo.jpg";
import "./Navbar.css";

export default function Navbar(){
    return (
        <div className = "navbar">
            <img src = {logo} alt = ""/>
            <ul className = "nav-manu">
           <li>SignUp</li>
           <li>SignIn </li>
           <li>Profile</li>

            </ul>
        </div>
    )
}