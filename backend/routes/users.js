const Bcrypt = require("bcryptjs");
const router = require("express").Router();
const User = require("../models/users.model");
const jwt = require("jsonwebtoken"); // for hashing and sigining the tokens
const authenticateToken = require("../middleware/auth");
// const Message = require("../models/messages.model");
// const Chatroom = require("../models/chatrooms.model");
// const Mongoose = require("mongoose");
// const { useRef } = require("react");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post(async (req, res) => {
  const salt = 10;
  const username = req.body.username;
  const password = await Bcrypt.hash(req.body.password, salt);
  const email = req.body.email;
  const avi = Number(req.body.avi);
  const chatrooms = req.body.chatrooms;
  const bio = req.body.bio;

  const newUser = new User({
    username,
    password,
    email,
    avi,
    chatrooms,
    bio,
  });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

async function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: 360000});
}

router.route("/login").post(async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user === null) {
    return res.status(400).send("Cannot find user");
  }
  try {
    const isMatch = await Bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      console.log(user);
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const payload = { user: { id: user.id } };
    const token = await generateAccessToken(payload);
    res.json({token, user});
  } catch {
    res.status(500).send();
  }
});

router.route("/update/:id").post(authenticateToken, async (req, res) => {
  const salt = 10;
  User.findById(req.params.id)
    .then(async (user) => {
      if (req.body.username) {
        user.username = req.body.username;
      }
      if (req.body.password) {
        await Bcrypt.compare(
          req.body.password,
          user.password,
          async (err, result) => {
            if (err) {
              res.status(400).json("Error: Invalid Current Password");
            }
            user.password = await Bcrypt.hash(req.body.password, salt);
          }
        );
        user.password = await Bcrypt.hash(req.body.password, salt);
      }
      if (req.body.email) {
        user.email = req.body.email;
      }
      if (req.body.avi) {
        user.avi = req.body.avi;
      }
      if (req.body.chatrooms) {
        user.chatrooms = req.body.chatrooms;
      }
      if (req.body.bio) {
        user.bio = req.body.bio;
      }
      // user.username = req.body.username;
      // user.password = req.body.password;
      // user.email = req.body.email;
      // user.avi = Number(req.body.avi);
      // user.chatrooms = req.body.chatrooms;
      // user.bio = req.body.bio;
      user
        .save()
        .then(() => res.json(user))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/delete/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/getuser/:id").get((req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user)) //then return as json ; else return error
    .catch((err) => res.status(400).json("Error: " + err));
});

// NEW: When a chatroom needs to be added for a user, a chatroom is
//      instantiated and added to the database. That chatroom is
//      then added to the users list of chatrooms

module.exports = router;
