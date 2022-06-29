const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
    uid:String,
    title:String,
    isOpen:bool,
    createdQuiz:[],
    attemptedQuiz:[]
})
const Quiz = new mongoose.model("Quiz",QuizSchema);
module.exports = Quiz;