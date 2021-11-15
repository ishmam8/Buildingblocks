//libraries
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import axios from "axios";

//Component Imports
import Input from "./Input";
import Messages from "./Messages";
import Message from "./Message";
import TextContainer from "./TextContainer";

//Style Imports
import "./css/Chat.css";

let socket;

const Chat = ({ theName, theRoomName, theRoomId, theEmail, theAvi }) => {
  const [name, setName] = useState(theName);
  const [roomName, setRoomName] = useState(theRoomName);
  const [roomId, setRoomId] = useState(theRoomId);
  const [email, setEmail] = useState(theEmail);
  const [avi, setAvi] = useState(theAvi);
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    axios
      .get("http://localhost:5000/chatroom/getchatroom/" + roomId)
      .then((res) => {
        console.log(res.data);
        res.data.messages.map((m) => {
          setMessages((prevMessages) => [
            ...prevMessages,
            <Message
              message={{
                text: m.text,
                user: { name: m.username, avi: m.userAvi },
              }}
              name={name}
            />,
          ]);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    socket = io(ENDPOINT);

    socket.emit("join", { name, roomName, roomId, email, avi }, () => {}); // same as { name: name, room: room }

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, name, roomName, roomId, email, avi]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, <Message message={message} name={name} />]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
      // console.log(users);
    });
  }, [messages, users]);

  const sendMessage = (event) => {
    event.preventDefault();
    console.log(message);
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="outerContainer">
      <TextContainer users={users} />
      <div className="container">
        <Messages messages={messages} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
