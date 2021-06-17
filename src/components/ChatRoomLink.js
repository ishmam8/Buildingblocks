import React, { useState } from "react";
import "./css/Sidebar.css";
import { useDispatch, useSelector } from "react-redux";

export default function ChatRoomLink(props) {
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const chatroom = useSelector((state) => state.chatroom);

  function joinChat() {
    dispatch({
      type: "CHANGE_CHATROOMNAME",
      chatroomName: props.chatroom.name,
    });
    dispatch({ type: "CHANGE_CHATROOMID", chatroomId: props.chatroom.id });
    // localStorage.setItem("chatRoom", props.roomName);
    window.location.reload();
  }

  function handleClick() {
    setClicked(!clicked);
  }

  // { console.log(props) }
  if (!clicked) {
    return (
      <div className="chat-room-link" onClick={handleClick}>
        <div className="chat-room-name">{props.chatroom.name}</div>
        <button className="chat-join-button" onClick={joinChat}>
          JOIN
        </button>
      </div>
    );
  } else {
    let chatRoomUsers = props.chatroom.users.map((user, i) => {
      if (i !== 2) {
        return (
          <div key={i} className="chat-room-link-user">
            {user.name}
          </div>
        );
      } else {
        return (
          <div className="chat-room-link-user">
            {user.name} +{props.chatroom.users.length - 3} others
          </div>
        );
      }
    });
    if (chatRoomUsers.length === 0) {
      return (
        <div className="chat-room-link-clicked" onClick={handleClick}>
          {/* {console.log(props.roomName)} */}
          {props.chatroom.name}
          <button className="chat-join-button">JOIN</button>
          <br />
          <div className="chat-users-panel">
            <div className="chat-room-link-user-none">No active users</div>
          </div>
        </div>
      );
    } else if (chatRoomUsers.length < 3) {
      return (
        <div className="chat-room-link-clicked" onClick={handleClick}>
          {props.chatroom.name}
          <button className="chat-join-button">JOIN</button>
          <br />
          <div className="chat-users-panel">{chatRoomUsers}</div>
        </div>
      );
    } else if (chatroom === props.roomName) {
      return (
        <div className="chat-room-link-clicked" onClick={handleClick}>
          {props.chatroom.name}
          <button className="chat-join-button">DISCONNECT</button>
          <br />
          <div className="chat-users-panel">{chatRoomUsers[0]}</div>
          <div className="chat-users-panel">{chatRoomUsers[1]}</div>
          <div className="chat-users-panel">{chatRoomUsers[2]}</div>
        </div>
      );
    } else {
      return (
        <div className="chat-room-link-clicked" onClick={handleClick}>
          {props.chatroom.name}
          <button className="chat-join-button">JOIN</button>
          <br />
          <div className="chat-users-panel">{chatRoomUsers[0]}</div>
          <div className="chat-users-panel">{chatRoomUsers[1]}</div>
          <div className="chat-users-panel">{chatRoomUsers[2]}</div>
        </div>
      );
    }
  }
}
