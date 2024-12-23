import React, { useState } from 'react';
import './App.css';

function App() {
  // Questions array
  const question = [
    "What is the capital of India?",
    "Who is the PM of India?",
    "Who is president of India?",
    "What is the capital of Andhra Pradesh?"
  ];

  // Options array
  const options = [
    { optionvalue: ["New Delhi", "Hyderabad", "Bangalore", "Chennai"] },
    { optionvalue: ["Revanth Reddy", "Narendra Modi", "Amit Shah", "Rahul Gandhi"] },
    { optionvalue: ["Sonia Gandhi", "Narendra Modi", "Pawan Kalyan", "Draupadi Murmu"] },
    { optionvalue: ["Warangal", "Hyderabad", "Amaravati", "None of the Above"] }
  ];

  // State to track the current question index
  const [counter, setCounter] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false); // New state to track quiz completion

  // Function to handle the transition to the next question
  function Change(selectedOption) {
    console.log("Selected option:", selectedOption); // Logs the selected option for debugging

    if (counter < question.length - 1) {
      setCounter(counter + 1); // Move to the next question
    } else {
      setQuizCompleted(true); // Mark the quiz as completed
    }
  }

  return (
    <div className="container">
      <h1>My Quiz Application</h1>
      {/* Show questions until the quiz is completed */}
      {!quizCompleted ? (
        <div className="card">
          <h2>Question No: {counter + 1} / {question.length}</h2>
          <h2>{question[counter]}</h2>
          <div id="option">
            {/* Render options dynamically */}
            {options[counter].optionvalue.map((option, index) => (
              <li
                key={index}
                onClick={() => Change(option)} // Pass the selected option
                id={`value-${index}`}
              >
                {option}
              </li>
            ))}
          </div>
        </div>
      ) : (
        <h2>Quiz Completed! Thank you for participating.</h2>
      )}
    </div>
  );
}

export default App;
