//libraries
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//Component Imports
import Sidebar from "./Sidebar";
import DashboardInfo from "./DashboardInfo";
import DashboardForm from "./DashboardForm";

//Style Imports
import "./css/Dashboard.css";

export default function Dashboard(props) {
  const [showPopUp, setShowPopUp] = useState(false);
  const loggedIn = useSelector((state) => state.loggedIn);
  const chatroomName = useSelector((state) => state.chatroomName);



  if (!loggedIn) {
    return (
      <Redirect
        to={{
          pathname: "/login-email",
        }}
      />
    );
  } else if (!chatroomName) {
    return (
      <div className="dashboard">

        <Sidebar data={props} />
        <div className="cards-container">
          <DashboardInfo />
          <div className="cards-subcontainer">
            <DashboardForm />
            <DashboardForm />
          </div>
        </div>
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
