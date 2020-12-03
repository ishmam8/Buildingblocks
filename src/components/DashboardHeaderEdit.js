import React, { Component } from "react";
import "./css/Dashboard.css";
import logo from "../images/minlogo.png";
import { useDispatch, useSelector } from "react-redux";

export default function DashboardHeaderEdit(props) {
  const dispatch = useDispatch();
  const avi = useSelector(state => state.avi);

  function logout() {
    console.log("Test");
    dispatch({type: "CHANGE_LOGGEDIN", loggedIn: false});
    // localStorage.setItem("loggedIn", "false");
    localStorage.setItem("chatRoom", "false");
    localStorage.setItem("lastUser", null);
    window.location.reload();
  }

  return (
    <div className="dashboard-header-edit">
      <img src={logo} className="minlogo" />
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
