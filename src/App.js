import React, { useState } from 'react';
import QRCodeGenerator from './components/QRCodeGenerator/QRCodeGenerator.js';
import MainView from './components/MainView/MainView';
import MobileView from './components/MobileView/MobileView';
import "./App.css"
const App = () => {
  const [playerName, setPlayerName] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [questions] = useState([
    {
        question: "What is the capital of France?",
        options: ["A. London", "B. Paris", "C. Berlin", "D. Madrid"],
        answer: "B",
    },
    {
        question: "What is the largest planet in our Solar System?",
        options: ["A. Earth", "B. Mars", "C. Jupiter", "D. Saturn"],
        answer: "C",
    },
    {
        question: "What is 2 + 2?",
        options: ["A. 3", "B. 4", "C. 5", "D. 6"],
        answer: "B",
    },
    {
        question: "What is the boiling point of water?",
        options: ["A. 100°C", "B. 90°C", "C. 80°C", "D. 120°C"],
        answer: "A",
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["A. Charles Dickens", "B. Mark Twain", "C. William Shakespeare", "D. J.K. Rowling"],
        answer: "C",
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["A. Au", "B. Ag", "C. Pb", "D. Fe"],
        answer: "A",
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["A. Elephant", "B. Blue Whale", "C. Giraffe", "D. Great White Shark"],
        answer: "B",
    },
    {
        question: "In which continent is Egypt located?",
        options: ["A. Asia", "B. Africa", "C. Europe", "D. South America"],
        answer: "B",
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["A. Gold", "B. Iron", "C. Diamond", "D. Quartz"],
        answer: "C",
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["A. Vincent van Gogh", "B. Pablo Picasso", "C. Leonardo da Vinci", "D. Claude Monet"],
        answer: "C",
    },
]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [playerAnswers, setPlayerAnswers] = useState([]);

  const handlePlayerJoin = (name) => {
    setPlayerName(name);
    setIsMobile(true);
  };

  return (
    <div className='main-bg'>
      <div className='sub-bg'>      
        {isMobile ? (
        <MobileView
          playerName={playerName}
          questions={questions}
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          setPlayerAnswers={setPlayerAnswers}
          playerAnswers={playerAnswers}
        />
      ) : (
        <div className='app-div'>
          <QRCodeGenerator />
          <MainView
            questions={questions}
            currentQuestionIndex={currentQuestionIndex}
            playerAnswers={playerAnswers}
          />
          <button className='join-button' onClick={() => handlePlayerJoin(prompt("Enter your name:"))}>
            Join Game
          </button>
        </div>
      )}
      </div>
    </div>
  );
};

export default App;
