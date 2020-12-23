import React, { useState, useEffect } from "react";
import "./css/Dashboard.css";
import axios from "axios";
import DashboardHeaderEdit from "./DashboardHeaderEdit";
import { useSelector, useDispatch } from "react-redux";

export default function EditProfile() {
  const [avis, setAvis] = useState([]);
  const _id = useSelector((state) => state._id);
  const dispatch = useDispatch();

  useEffect(() => {
    for (let i = 1; i < 60; i++) {
      setAvis(avis.push(i.toString()));
    }
  },[]);

  function onAvatarClick(e, index) {
    e.preventDefault();
    console.log(_id);
    axios.get("http://localhost:5000/users/getuser/" + _id).then((res) => {
      const newUsername = res.data.username;
      const newPassword = res.data.password;
      const newEmail = res.data.email;
      const newAvi = this.state.avis[index];
      const newBio = res.data.bio;
      const user = {
        username: newUsername,
        password: newPassword,
        email: newEmail,
        avi: newAvi,
        bio: newBio,
      };
      dispatch({ type: "CHANGE_AVI", avi: user.avi });
      axios
        .post(
          "http://localhost:5000/users/update/" + localStorage.getItem("_id"),
          user
        )
        .then((res) => {
          console.log(res.data);
          window.location.reload();
        });
    });
  }
  return (
    <div>
      <DashboardHeaderEdit />
      <div className="avatars">
        <div className="editsFrame">
          <p className="changeLabelInstructions">
            What would you like to modify?
          </p>
          <br />
          <div className="modifySelection">
            <b>Change Username</b>
            <br />
            <br />
            Your name that will be shown to others on BuildingBlocks
          </div>
          <br />
          <div className="modifySelection">
            <b>Change Email</b>
            <br />
            <br />
            The email associated with your BuildingBlocks account
          </div>
          <br />
          <div className="modifySelection">
            <b>Change Password</b>
            <br />
            <br />
            The password you use to log-in to your BuildingBlocks account
          </div>
          <br />
          <div className="modifySelection">
            <b>Change Bio</b>
            <br />
            <br />A summary of yourself that will help others get to know you on
            BuildingBlocks
          </div>
        </div>
      </div>
    </div>
  );
}
