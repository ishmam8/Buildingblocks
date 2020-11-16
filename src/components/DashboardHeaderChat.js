import React, { Component } from "react";
import "./css/Dashboard.css";
import "./css/Chat.css";
import logo from "../images/minlogo.png";
import { useSelector } from "react-redux";


export default function DashboardHeaderChat(props) {
  const avi = useSelector(state => state.avi);
  
  function logout(){
    console.log("Test");
    localStorage.setItem("loggedIn", "false");
    window.location.reload();
  };

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
      <p className="chatRoomName">{localStorage.getItem("chatRoom")}</p>
    </div>
  );
}
