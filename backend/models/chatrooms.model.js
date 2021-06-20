const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatroomSchema = new Schema({
  name: {type: String, unique: false},
  users: [String],
  userRole: {type: String, enum: ['Mentor', 'Mentee']},
  admin: {type: String},
  mentors: [String],
  messages: [{type: Schema.ObjectId, ref: "message"}],
  club: [{type: Schema.ObjectId, ref:'club'}], 

  
});

module.exports = mongoose.model('chatroom', chatroomSchema);