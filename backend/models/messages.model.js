const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  user: {type: Schema.ObjectId, ref: "user"},
  username: {type: String },
  userAvi: {type: String},
  text: { type: String },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('message', messageSchema);