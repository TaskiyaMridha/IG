import React, {useState} from 'react';
import "./SignIn.css";
import logo from "../img/ig.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

export default function SignIn() { // Make sure the component name is capitalized
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // Toast function
  const notifyError = (msg) => toast.error(msg);
  const notifySuccess = (msg) => toast.success(msg);

  const postData = () => {
    if (!emailRegex.test(email)) {
      notifyError("Invalid email");
      return;
    }

    fetch("http://localhost:5000/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        notifyError(data.error);
      } else {
        notifySuccess(data.message);
        navigate("/");
      }
    })
    .catch(error => {
      console.error("Error sending data to server:", error);
      // Handle the error as needed
    });
  }

  return (
    <div className="signIn">
      <div className="LoginForm">
        <img className="signUpLogo" src={logo} alt="" />
        <div>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="Email"
            onChange={(e) => { setEmail(e.target.value) }} />
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => { setPassword(e.target.value) }} />
        </div>
        <input
          type="submit"
          id="login-btn"
          onClick={postData} // Removed unnecessary arrow function here
          value="Sign In" />
        <div className="loginForm2">
          Don't have an account ?
          <Link to="/signup">
            <span style={{ color: "blue", cursor: "pointer" }}>Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
