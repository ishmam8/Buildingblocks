import React, { Component } from "react";
import "./css/Dashboard.css";
import logo from "../images/minlogo.png";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

export default function DashboardHeaderEdit(props) {
  const dispatch = useDispatch();
  const avi = useSelector((state) => state.avi);
  let history = useHistory();

  function dashboardHome() {
    history.push("/dashboard");
  }

  function logout() {
    dispatch({ type: "CHANGE_LOGGEDIN", loggedIn: false });
    dispatch({ type: "CHANGE_CHATROOMNAME", chatroomName: "" });
    dispatch({ type: "CHANGE_LASTUSER", lastUser: null });
    history.push("/login-email");
    window.location.reload();
  }

  return (
    <div className="dashboard-header-edit">
      <div className="logo-back-container">
        <a onClick={dashboardHome} className="redirect-home">
          <img src={logo} className="minlogo" />
          <span className="back-button"> back </span>
        </a>
      </div>
      <div className="avatar-logout-container">
        <img
          alt="User Avatar"
          className="header-avi"
          src={require("../images/icons/" + avi + ".png")}
        />
        <button className="logoutDashboard" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
