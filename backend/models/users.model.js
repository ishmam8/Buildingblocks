const mongoose = require('mongoose');


const Schema = mongoose.Schema;

// A model for the each user

const userSchema = new Schema({
  username: {type: String, unique: false, minlength: 3},
  password: {type: String, required: true, minlength: 5  },
  email: {type: String, required: true, trim: true, unique: false},
  avi: { type: String },
  chatrooms: [String],
  bio: { type: String }
}, {
  timestamps: true,
});
 
module.exports = mongoose.model('user', userSchema);