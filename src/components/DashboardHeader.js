import React, { Component } from "react";
import "./css/Dashboard.css";
import logo from "../images/minlogo.png";
import { useSelector, useDispatch } from 'react-redux';



export default function DashboardHeader() {
  const dispatch = useDispatch();

  function logout() {
    console.log("Test");

    dispatch({type: "CHANGE_ISLOGGEDIN", isLoggedIn: false});
    dispatch({type: "CHANGE_CHATROOMNAME", chatroomName: ""});
    dispatch({type: "CHANGE_LASTUSER", lastUser: null});

    window.location.reload();
  };

  const avi = useSelector(state => state.avi);
  return (
    <div className="dashboard-header">
      <img src={logo}
        className="minlogo"
      />
      <img
        alt="User Avatar"
        className="header-avi"
        src={require("../images/icons/" + avi + ".png")}
      />
      <button className="logoutDashboard" onClick={logout}>
        Logout
        </button>
    </div>
  );
}
