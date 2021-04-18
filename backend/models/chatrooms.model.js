const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatroomSchema = new Schema({
  name: {type: String, unique: false},
  users: [String],
  admin: {type: String},
  mentors: [String],
  messages: [{type: Schema.ObjectId, ref: "message"}]
});

module.exports = mongoose.model('chatroom', chatroomSchema);