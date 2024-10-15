const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const StudentModel = require('./models/Student')
const QuizScoreModel = require('./models/quizScore')
const dotenv = require('dotenv').config();

const app = express()
app.use(express.json())
app.use(cors({
     origin: "https://skripsie.vercel.app",
     credentials: true
 }));

app.use((req, res, next) => {
       res.setHeader('Access-Control-Allow-Origin', 'https://skripsie.vercel.app'); // Replace with your frontend origin
       res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
       res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
       next();
     });



//mongoose.connect("mongodb://localhost:27017/student");

mongoose.connect("mongodb+srv://simonecarstens1:eeZLO9E5rxNL9Ibz@clusters.cyamn.mongodb.net/student");
// mongoose.connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   }).then(() => console.log('MongoDB connected'))
//     .catch(err => console.error(err));

app.get("/",(req, res) => {
    res.json("Hello");
})



app.post("/login", (req, res) =>{
    const {email, password} = req.body;
    StudentModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password){
                const userdata = {
                    name: user.name,
                    email: user.email,
                }
                res.json(userdata)
            } else {
                res.json("Incorrect Password")
            }
        } else {
            res.json("No record existed")
        }
    })
})


app.post('/register', (req, res) => {
    StudentModel.create(req.body)
    .then(students => res.json(students))
    .catch(err => res.json(err))
})



app.post('/quizScore', (req, res) => {
    const { email } = req.body;
    QuizScoreModel.findOne({ email })
        .then(existingScore => {
            if (!existingScore) {
                QuizScoreModel.create(req.body)
                    .then(quizScore => res.json(quizScore))
                    .catch(err => res.json(err));
            } else {
                res.json({ message: "Score already exists for this user and quiz." });
            }
        })
        .catch(err => res.json(err));
});


app.get('/quizScores', (req, res) => {
    QuizScoreModel.find()
    .then(scores => res.json(scores))
    .catch(err => res.json(err));
});

app.listen(3001, () => {
    console.log("server is running")
})
