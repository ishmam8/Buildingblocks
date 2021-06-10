import React from "react";
import "./css/Dashboard.css";
import Sidebar from "./Sidebar";
import { Redirect } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import DashboardInfo from "./DashboardInfo";
import { useSelector, useDispatch } from "react-redux";
import DashboardForm from "./DashboardForm";
<<<<<<< HEAD

export default function Dashboard(props) {
=======
import { Container } from "semantic-ui-react";

export default function Dashboard(props) {
  const [showPopUp, setShowPopUp] = useState(false);
>>>>>>> c460ae8a0ba866f73705003e2e3cd6c37f487c16
  const loggedIn = useSelector((state) => state.loggedIn);
  const dispatch = useDispatch();
  const chatroomName = useSelector((state) => state.chatroomName);

  function logout() {
    dispatch({type: "CHANGE_USERNAME", username: null});
    dispatch({type: "CHANGE_EMAIL", email: null});
    dispatch({type: "CHANGE_AVI", avi: null});
    dispatch({type: "CHANGE_TYPE", myType: null});
    dispatch({type: "CHANGE_CHATROOM", chatroom: false});
    dispatch({type: "CHANGE_LASTUSER", lastUser: null});
    dispatch({type: "CHANGE_LOGGEDIN", loggedIn: false});
    window.location.reload();
  }

  if (!loggedIn) {
    return (
      <Redirect
        to={{
          pathname: "/login",
        }}
      />
    );
  } else if (!chatroomName) {
    return (
      <div className="dashboard">
        <DashboardHeader logout={logout} />
        <Sidebar data={props} />
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
