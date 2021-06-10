import React, { Component } from "react";
import "./css/DashboardHeader.css";
import logo from "../images/minlogo.png";
import { useSelector, useDispatch } from "react-redux";

export default function DashboardHeader(props) {
  const logout = props.logout;

  const avi = useSelector((state) => state.avi);
  return (
    <div className="dashboard-header">
      <div className="leftSection">
        <img src={logo} className="minlogo" />
        <span className="buildingBlocks">Building Blocks</span>
      </div>
      <div className="rightSection">
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
