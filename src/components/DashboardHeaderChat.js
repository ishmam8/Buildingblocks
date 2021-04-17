import React, { Component } from "react";
import "./css/Dashboard.css";
import "./css/Chat.css";
import logo from "../images/minlogo.png";
import { useSelector, useDispatch } from "react-redux";

export default function DashboardHeaderChat(props) {
  const avi = useSelector((state) => state.avi);
  const chatroom = useSelector((state) => state.chatroom);
  const dispatch = useDispatch();

  function logout() {
    console.log("Test");
    dispatch({type: "CHANGE_USERNAME", username: null});
    dispatch({type: "CHANGE_EMAIL", email: null});
    dispatch({type: "CHANGE_AVI", avi: null});
    dispatch({type: "CHANGE_TYPE", myType: null});
    dispatch({type: "CHANGE_CHATROOM", chatroom: false});
    dispatch({type: "CHANGE_LASTUSER", lastUser: null});
    dispatch({type: "CHANGE_LOGGEDIN", loggedIn: false});
    window.location.reload();
  }

  return (
    <div className="dashboard-header">
      <img src={logo} className="minlogo" />
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
