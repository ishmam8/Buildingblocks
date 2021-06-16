import React, { useState } from "react";
import "./css/LoginWithEmail.css";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import Login from "./Login";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import login_graphic from "../images/login_graphic.png"

export default function LoginWithEmail() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [profile, setProfile] = useState({});
  const isLoggedIn = useSelector((state) => state.loggedIn);

  function onSubmit(e) {
    e.preventDefault();
    const userCredentials = {
      email: email,
      password: password,
    };
    setEmail("");
    setPassword("");

    axios
      .post("http://localhost:5000/users/login", userCredentials)
      .then((res) => {
        if (res.data === "invalid password") {
          // useAlert("Sorry can you please check your credentials and try again?");
          console.log(res);
        } else {
          dispatch({
            type: "CHANGE_USER_ALL",
            user: {
              loggedIn: true,
              username: res.data.username,
              email: res.data.email,
              _id: res.data._id,
              bio: res.data.bio,
              avi: res.data.avi,
            },
          });
          setLoggedIn(true);
          setProfile(res.data);
        }
      });
  }
  return !isLoggedIn ? (

    

    <div className="logInWithEmail">
      <Navbar/>
      <div className="login-content">

      
      
        
      <div className="welcome-back">
        <div className="welcome-back-content">
        <p className="welcome-text">Welcome Back
        </p>
        <img src={login_graphic} alt="login_graphic" width="60%" />
      </div>
      </div>
      
      <div className="input-container">
        <div className="email-login-input">

        
        <form  onSubmit={onSubmit}>
          <div className="email-input-form">
            <div className="input-field">
              <label>Email
              <input
                className="email-input-box"
                type="email"
                name="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              </label>
            </div>

            <div className="input-field">
              <label>Password
              <input
                className="email-input-box"
                type="password"
                name="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              </label>
            </div>      
            <span to="/login" className="forgot-password">Forgot your password ?</span>
            <input type="submit" className="login-button" value="Log in" />
          </div>
        </form>
        <div className="no-account-email">
          Don't have an account?{" "}
          <a href="./signup">
            <Link to="/signup" className="sign-up-button">Sign Up</Link>
          </a>
        </div>
        </div>
      </div>
      </div>
    </div>
  ) : (
    <Redirect
      to={{
        pathname: "/dashboard",
        state: profile,
      }}
    />
  );
}
