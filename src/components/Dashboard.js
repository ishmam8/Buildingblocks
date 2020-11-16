import React, { useState } from "react";
import "./css/Dashboard.css";
import Sidebar from "./Sidebar";
import { Redirect } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import DashboardInfo from "./DashboardInfo";
import { useSelector } from "react-redux";

export default function Dashboard(props) {
  const [showPopUp, setShowPopUp] = useState(false);
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  function logout() {
    console.log("Test");
    localStorage.setItem('loggedIn', null);
    localStorage.setItem('username', null);
    localStorage.setItem('email', null);
    localStorage.setItem('avi', null);
    localStorage.setItem('type', null);
    localStorage.setItem("loggedIn", "false");
    window.location.reload();
  };

  if (isLoggedIn === false) {
    return (
      <Redirect
        to={{
          pathname: "/login",
        }}
      />
    );
  } else if (localStorage.getItem("chatRoom") === null || localStorage.getItem("chatRoom") === "false") {
    return (
      <div className="dashboard">
        <DashboardHeader logout={logout} />
        <Sidebar data={props} />

        <DashboardInfo />
      </div>
    );
  } else {
    return (
      <Redirect
        to={{
          pathname: "/chatRoom",
        }}
      />
    );
  }
}

