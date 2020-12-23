import React, { useState } from "react";
import "./css/LogInWithEmail.css";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import Login from "./Login";
import { useSelector } from "react-redux";

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
    <div className="logInWithEmaill">
      <div className="rectangle">
        <a href="/" className="App-name-login">
          ⬅ STUDENT CONVERSATIONS NOW
        </a>
        <div className="welcomeBack">
          Welcome<br></br>Back
        </div>
      </div>
      <div className="rectangleRight">
        <form onSubmit={onSubmit}>
          <div className="emailInput">
            <input
              className="emailInputForm"
              type="email"
              placeholder="Email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="emailLine" />
          <div className="passwordInput">
            <input
              className="passwordInputForm"
              type="password"
              placeholder="Password"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="passwordLine" />
          <input type="submit" className="loginButton" value="Log in" />
        </form>
        <div className="dontHaveAnAccount">
          Don't have an account?{" "}
          <a href="./signup">
            <span className="sign-up-button">Sign Up</span>
          </a>
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
