import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./Navbar";
import DashboardNavbar from "./DashboardNavbar";
import axios from "axios";
const instance = axios.create({
  withCredentials: true,
});

export default function MasterNavbar() {
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.loggedIn);
  console.log("LOGIN STATUS", loggedIn);

  function logout() {
    instance({
      method: 'post',
      url: 'http://localhost:5000/users/logout',
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
    .then(() => {
      dispatch({ type: "CHANGE_LOGGEDIN", loggedIn: false });
      dispatch({ type: "CHANGE_USERNAME", username: null });
      dispatch({ type: "CHANGE_EMAIL", email: null });
      dispatch({ type: "CHANGE_AVI", avi: null });
      dispatch({ type: "CHANGE_TYPE", myType: null });
      dispatch({ type: "CHANGE_CHATROOM", chatroom: false });
      dispatch({ type: "CHANGE_LASTUSER", lastUser: null });
    })
    .catch(err => console.log(err));
  }

  if (!loggedIn) {
    return <Navbar />;
  } else {
    return <DashboardNavbar logout={logout}/>;
  }
}
