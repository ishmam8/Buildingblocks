import React from "react";
import { useDispatch } from "react-redux";

export default function Input({ message, setMessage, sendMessage }) {
  const dispatch = useDispatch();

  function disconnect(){
      dispatch({type: "CHANGE_LASTUSER", lastUser: null});
      dispatch({type: "CHANGE_CHATROOMNAME", chatroomName: ""});
    window.location.reload();
  }

  return (
    <form className="form">
      <input
        id="input"
        className="input"
        type="text"
        placeholder="Type a message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
        autoComplete="off"
      ></input>
      <button
        className="sendButton"
        onClick={(event) => sendMessage(event)}
        alt="Send your message"
      >
        ↑
      </button>
      <button
        className="leaveButton"
        onClick={disconnect}
        alt="Leave this Chat"
      >
        x
      </button>
    </form>
  );
}
