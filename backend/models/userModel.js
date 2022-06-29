const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    uid:String,
    name:String,
    email:String,
    password:String,
    createdQuiz:[],
    attemptedQuiz:[]
})
const User = new mongoose.model("User",userSchema);
module.exports = User;