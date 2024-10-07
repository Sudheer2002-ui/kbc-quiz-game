import React from 'react';
import "./index.css"
const MainView = ({ questions, currentQuestionIndex, playerAnswers }) => {
  return (
    <div>
      <h2 className='start-the-quiz-heading'>Start the quiz</h2>
      <h3 className='all-the-best'>All the best</h3>
      <ul>
        {playerAnswers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
    </div>
  );
};

export default MainView;