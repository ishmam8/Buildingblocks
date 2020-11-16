import React, { Component } from "react";
import SidebarChat from "./SidebarChat";
import { Redirect } from 'react-router-dom'
import DashboardHeaderChat from "./DashboardHeaderChat";
import Chat from "./Chat";
import "./css/ChatRoom.css";
import TextContainer from "./TextContainer";
import { useSelector } from "react-redux";

export default function OuterChatContainer(props) {
    const username = useSelector(state => state.username);
    const email = useSelector(state => state.email);
    const avi = useSelector(state => state.avi);

    function logout(e) {
        localStorage.setItem("loggedIn", "false");
        localStorage.setItem("chatroom", "none");
        window.location.reload();
    };

    if (localStorage.getItem("chatRoom") === "false") {
        return (
            <Redirect to={{
                pathname: '/dashboard',
            }} />
        )
    } else {
        return (
            <div className="outoutContainer">
                <DashboardHeaderChat />
                <SidebarChat />
                <div className="outerContainer">
                    <br />
                    <Chat className="chatRoom" theName={username} theRoom={localStorage.getItem("chatRoom")}
                        theEmail={email} theAvi={avi} />
                </div>
            </div>
        )
    }
}