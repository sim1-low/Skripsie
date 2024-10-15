import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Home.css"


export const Home = () => {

    const {email, name} = useSelector((state) => state.credentials);
    const [scores, setScores] = useState([]);


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
                setScores(Object.values(uniqueScores));
            })
            .catch(error => console.error("Error fetching scores:", error));
    }, []);

    return(
        <div>
 
            <h1>Welcome, {name}!</h1>
            <h2>Leaderboard</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {scores.map((score, index) => (
                        <tr key={index}>
                            <td>{score.name}</td>
                            <td>{score.email}</td>
                            <td>{new Date(score.date).toLocaleDateString()}</td>
                            <td>{score.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </div>
    );
};

