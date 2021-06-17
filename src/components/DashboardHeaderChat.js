import React, { Component, useState} from "react";
import "./css/Dashboard.css";
import "./css/Chat.css";
import logo from "../images/minlogo.png";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";


export default function DashboardHeaderChat(props) {
  const avi = useSelector((state) => state.avi);
  const chatroom = useSelector((state) => state.chatroom);
  const dispatch = useDispatch();
  const [profile, setProfile] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const instance = axios.create({
    withCredentials: true
  })
  const token = useSelector(state => state.token)
  const authToken = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }

  function dispatchLogout (data) {
    

    console.log("Test DashboardHeaderChat.js");
    //dispatch({type: "CHANGE_USERNAME", username: null});
    //dispatch({type: "CHANGE_EMAIL", email: null});
    //dispatch({type: "CHANGE_AVI", avi: null});
    dispatch({type: "CHANGE_TYPE", myType: null});
    dispatch({type: "CHANGE_CHATROOM", chatroom: false});
    dispatch({type: "CHANGE_LASTUSER", lastUser: null});
    //dispatch({type: "CHANGE_LOGGEDIN", loggedIn: false});
    dispatch({ type: "CHANGE_TOKEN", token: null});
    
    dispatch({
      type: "CHANGE_USER_ALL",
      user: {
        loggedIn: false,
        username: null,
        email: null,
        _id: null,
        bio: null,
        avi: null,
      },
    });
    
    // cookies.set('token', res.data.token, { path: '/' });
    // localStorage.setItem("token", res.data.token);
    setLoggedIn(false);
    setProfile(data);
    //window.location.reload();
  }

  function logout() {
    console.log("Test DashboardHeaderChat.js");
    //
    instance
      .post("http://localhost:5000/users/logout", authToken)
      .then((res) => {
        if (res.data === "Unauthorized Logout") {
          // useAlert("Sorry can you please check your credentials and try again?");
          console.log(res);
        } else {
          dispatchLogout(res.data);
        }
      });
      //
  }

  return (
    <div className="dashboard-header">
      <img src={logo} className="minlogo"/>

      <img
        alt="User Avatar"
        className="header-avi"
        src={require("../images/icons/" + avi + ".png")}
      />
      <button className="logoutDashboard" onClick={logout}>
        Logout
      </button>
      <p className="chatRoomName">{chatroom}</p>
    </div>
  );
}
