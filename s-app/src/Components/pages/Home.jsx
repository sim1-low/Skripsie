import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Home.css"
// import { motion } from "framer-motion";


export const Home = () => {

    const {email, name} = useSelector((state) => state.credentials);
    const [scores, setScores] = useState([]);
    const [sortOrder, setSortOrder] = useState("desc");


    useEffect(() => {
        axios.get('https://skripsie-backend.vercel.app/quizScores')
            .then(response => {
                // Filter to include only the first attempt for each user and quiz
                const uniqueScores = {};
                response.data.forEach(score => {
                    const key = `${score.email}`;
                    if (!uniqueScores[key]) {
                        uniqueScores[key] = score;
                    }
                });
                // setScores(Object.values(uniqueScores));
                const sortedScores = Object.values(uniqueScores).sort((a, b) => b.score - a.score);
                setScores(sortedScores);
            })
            .catch(error => console.error("Error fetching scores:", error));
    }, []);

    const sortScores = () => {
        const sortedScores = [...scores].sort((a, b) => {
            if (sortOrder === "asc") {
                return a.score - b.score;
            } else {
                return b.score - a.score;
            }
        });
        setScores(sortedScores);
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };

    
    return(
        <div className="home-container">
        <motion.div
          className="welcome-section"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
            <h1>Welcome, {name}!</h1>
            <p>Check out your position on the leaderboard below.</p>
        </motion.div>

        <div className="leaderboard-layout">
        <div className="left-container">
        <motion.div
                    className="leaderboard-section"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="leaderboard-header">
                        <h2>Leaderboard</h2>
                    </div>


            <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th onClick={sortScores} style={{ cursor: "pointer" }}>
                            Score {sortOrder === "asc" ? "↑" : "↓"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {scores.map((score, index) => (
                        <tr key={index}>
                            <td>{score.name}</td>
                            <td>{new Date(score.date).toLocaleDateString()}</td>
                            <td>{score.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            </motion.div>
            </div>
            

            <div className="right-container">
            <motion.div
                    className="additional-info"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <h3>Instructions for the website</h3>
                    <p>
                    <ul className="list">
                        <li>Use the navigation bar at the top of the page to navigate the website</li>
                        <li>Each lesson includes interactive activities that explain concepts</li>
                        <li>At the end of the lesson you can take a quiz to test your understanding of the concepts</li>
                        <li>Note: You can attempt the quiz as many times as you like, but only your first attempt will show on the leaderboard</li>
                        </ul>
                    </p>
                </motion.div>
                </div>
            </div>
    </div>
    );
};

