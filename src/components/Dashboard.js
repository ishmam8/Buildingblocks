import React, { useState } from "react";
import "./css/Dashboard.css";
import Sidebar from "./Sidebar";
import { Redirect } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import DashboardInfo from "./DashboardInfo";
import { useSelector, useDispatch } from "react-redux";

export default function Dashboard(props) {
  const [showPopUp, setShowPopUp] = useState(false);
  const loggedIn = useSelector(state => state.loggedIn);
  const dispatch = useDispatch();
  const chatroom = useSelector(state => state.chatroom);

  function logout() {
    console.log("Test");
    dispatch({type: "CHANGE_USERNAME", username: null});
    dispatch({type: "CHANGE_EMAIL", email: null});
    dispatch({type: "CHANGE_AVI", avi: null});
    dispatch({type: "CHANGE_TYPE", myType: null});
    dispatch({type: "CHANGE_LOGGEDIN", loggedIn: false});
    window.location.reload();
  };

  if (!loggedIn) {
    return (
      <Redirect
        to={{
          pathname: "/login",
        }}
      />
    );
  } else if (!chatroom) {
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

