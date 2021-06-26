//Libraries
import React, { Component, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//Style Imports
import "./css/DashboardHeader.css";

//Logo Import
import logo from "../images/minlogo.png";

export default function DashboardHeader(props) {
  const logout = props.logout;
  const avi = useSelector((state) => state.avi);

  const [open, setOpen] = useState("false");

  const changeOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="dashboard-header">
      <div className="leftSection">
        <img src={logo} className="minlogo" />
        <span className="buildingBlocks">Building Blocks</span>
      </div>
      <div className="rightSection">
        <button onClick={changeOpen}>
          <img
            alt="User Avatar"
            className="header-avi"
            src={require("../images/icons/" + avi + ".png")}
          />
        </button>
      </div>
      <div className={open ? "dropDown active" : "dropDown"}>
        <text>Username</text>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}
