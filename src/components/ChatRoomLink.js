import React, { useState } from "react";
import "./css/Sidebar.css";
import { useDispatch } from "react-redux";

export default function ChatRoomLink(props) {
    const [clicked, setClicked] = useState(false);
    const dispatch = useDispatch();

    function joinChat() {
        dispatch({type: "CHANGE_CHATROOM", chatroom: props.roomName});
        // localStorage.setItem("chatRoom", props.roomName);
        window.location.reload();
    };

    function handleClick(){
        if (clicked) {
            setClicked(false);
        } else {
            setClicked(true);
        }
    };

    { console.log(props) }
    if (clicked === false) {
        return (
            <div className="chat-room-link" onClick={handleClick}>
                {props.roomName}
                <button className="chat-join-button" onClick={joinChat}>JOIN</button>
            </div>
        );
    } else {
        let chatRoomUsers = props.users.map((user, i) => {
            if (i !== 2) {
                return (<div key={i} className="chat-room-link-user">{user.name}</div>)
            } else {
                return (<div className="chat-room-link-user">{user.name} +
                    {props.users.length - 3} others</div>)
            }
        });
        if (chatRoomUsers.length === 0) {
            return (
                <div className="chat-room-link-clicked" onClick={handleClick}>
                    {console.log(props.roomName)}
                    {props.roomName}
                    <button className="chat-join-button">JOIN</button>
                    <br />
                    <div className="chat-users-panel">
                        <div className="chat-room-link-user-none">No active users</div>
                    </div>
                </div>
            )
        } else if (chatRoomUsers.length < 3) {
            return (
                <div className="chat-room-link-clicked" onClick={handleClick}>
                    {props.roomName}
                    <button className="chat-join-button">JOIN</button>
                    <br />
                    <div className="chat-users-panel">{chatRoomUsers}</div>
                </div>
            )
        } else if (localStorage.getItem("chatRoom" === props.roomName)) {
            return (
                <div className="chat-room-link-clicked" onClick={handleClick}>
                    {props.roomName}
                    <button className="chat-join-button">DISCONNECT</button>
                    <br />
                    <div className="chat-users-panel">{chatRoomUsers[0]}</div>
                    <div className="chat-users-panel">{chatRoomUsers[1]}</div>
                    <div className="chat-users-panel">{chatRoomUsers[2]}</div>
                </div>
            )
        } else {
            return (
                <div className="chat-room-link-clicked" onClick={handleClick}>
                    {props.roomName}
                    <button className="chat-join-button">JOIN</button>
                    <br />
                    <div className="chat-users-panel">{chatRoomUsers[0]}</div>
                    <div className="chat-users-panel">{chatRoomUsers[1]}</div>
                    <div className="chat-users-panel">{chatRoomUsers[2]}</div>
                </div>
            )
        }
    }
}