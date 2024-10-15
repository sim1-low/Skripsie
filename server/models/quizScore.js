const mongoose = require('mongoose')

const QuizScoreSchema = new mongoose.Schema({
    name: String,
    email: String,
    date: Date,
    score: Number,
    quizid: Number,
}, {unique: ['email']});

const QuizScoreModel = mongoose.model("quizScore", QuizScoreSchema)
module.exports = QuizScoreModel