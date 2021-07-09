import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./Navbar";
import DashboardNavbar from "./DashboardNavbar";

export default function MasterNavbar() {
  const dispatch = useDispatch();

  function logout() {
    dispatch({ type: "CHANGE_USERNAME", username: null });
    dispatch({ type: "CHANGE_EMAIL", email: null });
    dispatch({ type: "CHANGE_AVI", avi: null });
    dispatch({ type: "CHANGE_TYPE", myType: null });
    dispatch({ type: "CHANGE_CHATROOM", chatroom: false });
    dispatch({ type: "CHANGE_LASTUSER", lastUser: null });
    dispatch({ type: "CHANGE_LOGGEDIN", loggedIn: false });
    window.location.reload();
  }
  const loggedIn = useSelector((state) => state.loggedIn);

  if (!loggedIn) {
    return <Navbar />;
  } else {
    return null;
  }
}
