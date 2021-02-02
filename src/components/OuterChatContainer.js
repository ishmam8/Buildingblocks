import React, { Component } from "react";
import SidebarChat from "./SidebarChat";
import { Redirect } from "react-router-dom";
import DashboardHeaderChat from "./DashboardHeaderChat";
import Chat from "./Chat";
import "./css/ChatRoom.css";
import TextContainer from "./TextContainer";
import { useSelector, useDispatch } from "react-redux";

export default function OuterChatContainer(props) {
  const username = useSelector((state) => state.username);
  const email = useSelector((state) => state.email);
  const avi = useSelector((state) => state.avi);
  const chatroom = useSelector((state) => state.chatroom);
  const dispatch = useDispatch();

  return !chatroom ? (
    <Redirect
      to={{
        pathname: "/dashboard",
      }}
    />
  ) : (
    <div className="outoutContainer">
      <DashboardHeaderChat />
      <SidebarChat />
      <div className="outerContainer">
        <br />
        <Chat
          className="chatRoom"
          theName={username}
          theRoom={chatroom}
          theEmail={email}
          theAvi={avi}
        />
      </div>
    </div>
  );
}
