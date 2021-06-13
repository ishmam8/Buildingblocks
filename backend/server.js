const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const socketio = require('socket.io');

const { addUser, removeUser, getUser, getUsersInRoom, getUserNamesInRoom } = require('./chatUsers');
const User = require("./models/users.model");
const Message = require("./models/messages.model");
const Chatroom = require("./models/chatrooms.model")


require('dotenv').config();

const app = express();

//Run on port or on localhost 5000
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true,  useUnifiedTopology: true, useCreateIndex: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

const chatroomRouter = require('./routes/chatroom');
app.use('/chatroom', chatroomRouter);

//To run server, change directory to backend, then type nodemon server to run the server

const server = app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

// Socket implementation
const chatRouter = require('./routes/chatRoute');
const { useCallback } = require('react');
const io = socketio(server);

io.on('connection', (socket) => {

    // Will likely need to pass mongo ID for instant messaging and matching -> 
    // Can figure that out when we talk about architecture
    socket.on('join', async ({ name, roomName, roomId, email, avi }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, roomName, roomId, email, avi });
        console.log(user.roomId);
        if (error) return useCallback(error);

        socket.emit('message', { user: {id: "111111", name: 'admin', room: "adminRoom", email: "admin@admin.com", avi: "1" }, text: `${user.name}, welcome to the room, ${user.roomName}` });
        socket.broadcast.to(user.roomId).emit('message', { user: 'admin', text: `${user.name} has joined!` });

        socket.join(user.roomId);
        console.log("user has joined!");
        io.to(user.roomId).emit('roomData', { room: user.roomId, users: getUsersInRoom(user.roomId) });
        io.emit('roomDataGlobal', { room: user.roomId, newUsers: getUsersInRoom(user.roomId) });

        callback();
    });
    
    socket.on('disconnect', () => {
        console.log("user disconnecting");
        const user = removeUser(socket.id);

        if (user) {
            io.to(user.room).emit('message', {user: {id: "111111", name: 'admin', room: "adminRoom", email: "admin@admin.com", avi: "1" }, text: `${user.name} has left.`});
            io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
            io.emit('roomDataGlobal', { room: user.room, newUsers: getUserNamesInRoom(user.room) });
        }
    });
    

    socket.on('sendMessage', async (message, callback) => {
        const user = getUser(socket.id);
        
        const userDB = await User.findOne({email: user.email});

        const newMessage = new Message({
            user: userDB,
            username: userDB.username,
            userAvi: userDB.avi,
            text: message,
        })
        await newMessage.save();

        const chatroom = await Chatroom.findById(user.roomId);
        chatroom.messages.push(newMessage);

        chatroom.save();
        io.to(user.roomId).emit('message', { user: user, text: message });
        io.to(user.roomId).emit('roomData', { room: user.roomId, users: getUsersInRoom(user.roomId) });
        io.emit('roomDataGlobal', { room: user.roomId, newUsers: getUsersInRoom(user.roomId) });
        

        callback();
    });

    // Will emit a list of names indexed according to the chatRooms variable
    socket.on('getRooms', (chatRooms) => {
        let rooms = [];
        for (let i = 0; i < chatRooms.length; i++) {
            let roomName = chatRooms[i].name.trim().toLowerCase();
            console.log(roomName);
            let roomUsers = getUsersInRoom(roomName);
            rooms.push(roomUsers);
        }
        console.log(rooms);
        io.emit('allRooms', rooms);
    });
    socket.on('getRoom', (roomName) => {
        console.log(roomName);
        io.emit('roomDataGlobal', { room: roomName, newUsers: getUsersInRoom(roomName.trim().toLowerCase()) });
    })

});

app.use(chatRouter);


