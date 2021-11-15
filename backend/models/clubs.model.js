const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clubSchema = new Schema({
    clubName: {type: String, required: true},


});

module.exports = mongoose.model("club", clubSchema);