import React, {useState,useEffect} from "react";
import "./quiz.css";

import supply_middle_demand_middle from './qimages/supply-middle-demand-middle.png'
import supply_left_demand_left from './qimages/supply-left-demand-left.png'
import supply_left_demand_middle from './qimages/supply-left-demand-middle.png'
import supply_left_demand_right from './qimages/supply-left-demand-right.png'
import supply_middle_demand_left from './qimages/supply-middle-demand-left.png'
import supply_middle_demand_right from './qimages/supply-middle-demand-right.png'
import supply_right_demand_left from './qimages/supply-right-demand-left.png'
import supply_right_demand_middle from './qimages/supply-right-demand-middle.png'
import supply_right_demand_right from './qimages/supply-right-demand-right.png'
import { useSelector } from "react-redux";
import axios from "axios";

const questions = [
    {
      question: "A new pest resistant crop technology is introduced, while a health scare reduces consumer interest in this crop. What happens in the market for this crop?",
      answer: "The technology increases supply, shifting it to the right. The health scare decreases demand, shifting it to the left.",
      correctSupply: 1,
      correctDemand: -1
    },
    {
      question: "A major drought impacts wheat production, while a new gluten-free diet trend reduces wheat consumption. Consider the market for wheat. What happens?",
      answer: "The drought reduces supply, shifting it to the left. The gluten-free trend decreases demand, shifting it to the left as well.",
      correctSupply: -1,
      correctDemand: -1
    },
    {
        question: "Government subsidies reduce production costs for solar panels, while awareness of climate change increases consumer interest. What happens in the market for solar panels?",
        answer: "Subsidies increase supply, shifting it to the right. Increased awareness increases demand, shifting it to the right.",
        correctSupply: 1,
        correctDemand: 1
    },
    {
        question: "An economic downturn decreases consumer spending on luxury goods, but there are no changes in production costs. What happens in the market for luxury goods?",
        answer: "Demand decreases due to reduced consumer spending, shifting it to the left. Supply remains unchanged.",
        correctSupply: 0,
        correctDemand: -1
    },
    {
        question: "A disease outbreak reduces cattle herds, while meat consumption preferences remain stable. What happens in the market for beef?",
        answer: "The outbreak reduces supply, shifting it to the left. Demand remains unchanged.",
        correctSupply: -1,
        correctDemand: 0
    },
    {
        question: "Innovations reduce smartphone production costs, but consumer preferences for smartphones remain constant. What happens in the market for smartphones?",
        answer: "Innovations increase supply, shifting it to the right. Demand remains unchanged.",
        correctSupply: 1,
        correctDemand: 0
    },
    {
        question: "A new fitness trend increases demand for bicycles, while manufacturing conditions remain unchanged. What happens in the market for bicycles?",
        answer: "Demand increases due to the fitness trend, shifting it to the right. Supply remains unchanged.",
        correctSupply: 0,
        correctDemand: 1
    },
    {
        question: "New tariffs increase production costs for imported cars, while consumer preferences for these cars remain stable. What happens in the market for imported cars?",
        answer: "Tariffs decrease supply, shifting it to the left. Demand remains unchanged.",
        correctSupply: -1,
        correctDemand: 0
    },
    {
        question: "An increase in minimum wage raises labor costs for restaurants, while a new food trend boosts restaurant dining. What happens in the market for restaurant meals?",
        answer: "Increased labor costs reduce supply, shifting it to the left. The food trend increases demand, shifting it to the right.",
        correctSupply: -1,
        correctDemand: 1
    },
    {
        question: "A new technology keeps the cost of producing digital devices stable, and consumer interest remains unchanged. What happens in the market for digital devices?",
        answer: "Both supply and demand remain unchanged.",
        correctSupply: 0,
        correctDemand: 0
    }

  ];


export const Quiz_1 = () => {


    const [supplyPosition, setSupplyPosition] = useState(0);
    const [demandPosition, setDemandPosition] = useState(0);
    const [currentImage, setCurrentImage] =useState(supply_middle_demand_middle);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [isCorrect, setIsCorrect] = useState(null);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(0);

    const {email, name} = useSelector((state) => state.credentials);

    const getImageForPosition = (supply, demand) => {
        const positions = {
            '-1-1': supply_left_demand_left,
            '-10' : supply_left_demand_middle,
            '-11': supply_left_demand_right,
            '0-1': supply_middle_demand_left,
            '00': supply_middle_demand_middle,
            '01': supply_middle_demand_right,
            '1-1': supply_right_demand_left,
            '10': supply_right_demand_middle,
            '11': supply_right_demand_right,
        };
        return positions[`${supply}${demand}`] || supply_middle_demand_middle;
    };

    const handleApplyChanges = () =>{
        const newImage = getImageForPosition(supplyPosition, demandPosition);
        setCurrentImage(newImage);
    };


    const handleSliderChange = (supply, demand) => {
        const newImage = getImageForPosition(supply, demand);
        setCurrentImage(newImage);
      };
    
      const handleSupplyChange = (e) => {
        const newSupply = parseInt(e.target.value);
        setSupplyPosition(newSupply);
        handleSliderChange(newSupply, demandPosition);
      };
    
      const handleDemandChange = (e) => {
        const newDemand = parseInt(e.target.value);
        setDemandPosition(newDemand);
        handleSliderChange(supplyPosition, newDemand);
      };
    

    const handleSubmit = () =>{
        if (!hasSubmitted){
        const currentQuestion = questions[currentQuestionIndex];
        const isAnswerCorrect = 
            supplyPosition === currentQuestion.correctSupply &&
            demandPosition === currentQuestion.correctDemand;
        setIsCorrect(isAnswerCorrect);
        setShowAnswer(true);
        setHasSubmitted(true);
        if (isAnswerCorrect){
            setCorrectAnswers(prevCorrect => prevCorrect + 1);
        }
        }
        
    };

    const handleNextQuestion = () =>{
        if (currentQuestionIndex <questions.length -1){
            setCurrentQuestionIndex(currentQuestionIndex +1);
            setSupplyPosition(0);
            setDemandPosition(0);
            setCurrentImage(supply_middle_demand_middle);
            setShowAnswer(false);
            setIsCorrect(null);
            setHasSubmitted(false);
        } else{
            const currentDate = new Date();
            setQuizCompleted(true);
            axios.post('http://skripsie-qjut.vercel.app/quizScore', {name:name, email:email, date:currentDate, quizid:"quiz1", score:correctAnswers})
            .then(result => {console.log(result)})
        }
    };




    return(
            
            <div class="supply-demand-container">
                {/* <h3>Quiz</h3> */}
                {!quizCompleted ? ( 
                    <>
                    
                <div class="grid-container">
                


                <div class="quadrant quadrant1">
                <div class="graph-container">
                    <img src={currentImage} class="graph-image"/>
                </div>
                <div class="controls-container">
                    <div class="slider-container">
                        <label htmlFor="supply-slider">Supply</label>
                        <input
                            type="range"
                            id="supply-slider"
                            min={-1}
                            max={1}
                            step={1}
                            value={supplyPosition}
                            // onChange={(e) => setSupplyPosition(parseInt(e.target.value))}
                            onChange={handleSupplyChange}
                            class="slider-sup"
                            disabled={hasSubmitted}
                            />
                        <span class="slider-value">{['Left', 'Middle', 'Right'][supplyPosition + 1]}</span>
                    </div>

                    <div class="slider-container">
                        <label htmlFor="demand-slider">Demand</label>
                        <input
                            type="range"
                            id="demand-sldier"
                            min={-1}
                            max={1}
                            step={1}
                            value={demandPosition}
                            // onChange={(e)=> setDemandPosition(parseInt(e.target.value))}
                            onChange={handleDemandChange}
                            class="slider-dem"
                            disabled={hasSubmitted}
                            />
                        <span class="slider-value">{['Left', 'Middle', 'Right'][demandPosition + 1]}</span>
                    </div>

                    {/* <button onClick={handleApplyChanges} class="apply-button" disabled={hasSubmitted}>Apply Changes</button> */}
                    
                </div>
                </div>

                <div class="quadrant quadrant2">
                <div class="question-container">
                    <p className="explanation">{questions[currentQuestionIndex].question}</p>
                    <button onClick={handleSubmit} class="submit-button" disabled={hasSubmitted}>Submit Answer</button>
                </div>
                

                {showAnswer && (
                    <div class="answer-container">
                        <p className={isCorrect ? "correct" : "incorrect"}>
                            {isCorrect ? "Correct!" : "Incorrect"}
                        </p>
                        <p className="explanation">
                            {questions[currentQuestionIndex].answer}
                        </p>
                        <button onClick={handleNextQuestion} className="next-button">
                            {currentQuestionIndex < questions.length -1 ? "Next Question": "Finish Quiz"}
                        </button>
                    </div>
                )}
                </div>


                </div>

                 </>
                ) : (
                    <div className="quiz-completed">
                        <h3>Quiz Completed</h3>
                        <p>You answered {correctAnswers} out of {questions.length} questions correctly.</p>
                        <p>Your score: {((correctAnswers / questions.length)*100).toFixed(2)}%</p>
                    </div>
                )}

            </div>
     
    );

};
