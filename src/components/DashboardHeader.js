import React, { Component } from "react";
import "./css/Dashboard.css";
import logo from "../images/minlogo.png";
import { useSelector } from 'react-redux';



export default function DashboardHeader() {

  function logout() {
    console.log("Test");
    localStorage.setItem("loggedIn", "false");
    localStorage.setItem("chatRoom", "false");
    localStorage.setItem("lastUser", null);
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
