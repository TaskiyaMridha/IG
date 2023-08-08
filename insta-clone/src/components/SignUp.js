import React from 'react'
import logo from "../img/logo.jpg";

export default function signup() {
  return (
    <div classname = "signUp">
     <div className = "form-container">
     <img className = "signUpLogo"src = {logo} alt = ""/>
     <p className = "loginPara">
         Sign up to see photos and videos <br/> from your friends 
     </p>

     <div>
      <input type = "email" name = "email" id = "email" 
      placeholder= "Email"/>
     </div>

     <div>
      <input type = "text" name = "name" id = "name" 
      placeholder= "Full name"/>
     </div>

     <div>
      <input type = "text" name = "username" id = "username" 
      placeholder= "username"/>
     </div>

     <div>
      <input type = "password" name = "password" id = "password" 
      placeholder= "Password"/>
     </div>

     </div>
    </div>
  )
}