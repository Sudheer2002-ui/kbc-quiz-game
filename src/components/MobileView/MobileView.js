import React, { useState } from 'react';
import "./index.css"

const MobileView = ({ playerName, questions, currentQuestionIndex, setCurrentQuestionIndex, setPlayerAnswers, playerAnswers }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(''); 

  const handleSubmit = () => {
    if (!selectedAnswer) {
      alert("Please select an answer before submitting.");
      return;
    }

    setPlayerAnswers([...playerAnswers, selectedAnswer]);

    if (selectedAnswer === questions[currentQuestionIndex].answer) {
      alert(`Correct answer, ${playerName}!`);
    } else {
      alert(`Wrong answer, ${playerName}. Try again!`);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      alert("Quiz Completed!");
    }

    setSelectedAnswer('');
  };

  return (
    <div className='mobile-div'>
        <h2 className='welcome-heading'>Welcome, {playerName}!</h2>
        {questions.length > 0 && (
            <>
            <div className='question-div'>
            <p>(Q){currentQuestionIndex + 1}: </p>
                <h3 className='question'>
                    {questions[currentQuestionIndex].question}
                </h3></div>
                {questions[currentQuestionIndex].options.map((option, index) => (
                    <div key={index} className='options-div'>
                        <input 
                            id={`ans-${index}`} 
                            type="radio"
                            value={option.charAt(0)} // 'A', 'B', 'C', 'D'
                            checked={selectedAnswer === option.charAt(0)}
                            onChange={(e) => setSelectedAnswer(e.target.value)}
                        />
                        <label className="label" htmlFor={`ans-${index}`}>{option}</label>
                    </div>
                ))}
                <button className='submit-button' type="button" onClick={handleSubmit}>Submit Answer</button>
            </>
        )}
    </div>
  );
};

export default MobileView;
