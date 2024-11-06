import React, { useContext, useState, useEffect } from 'react';
import { GameContext } from '@/Context/GameContext';

const QuestionModal = () => {
  const {
    isQuestionModalOpen,
    currentQuestion,
    handleAnswerSubmission,
  } = useContext(GameContext);

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  // Reset selected answer and correctness when a new question loads
  useEffect(() => {
    setSelectedAnswer(null);
    setIsCorrect(null);
  }, [currentQuestion]);

  if (!isQuestionModalOpen || !currentQuestion) {
    return null; 
  }

  const handleOptionClick = (option) => {
    setSelectedAnswer(option);
    const correct = option === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    handleAnswerSubmission(option);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-[30]">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl w-[90%] max-w-4xl transform transition-all duration-500 ease-in-out scale-105">
        <h2 className="text-4xl font-bold text-purple-400 mb-6 text-center animate-pulse">Question</h2>
        <p className="text-lg text-white font-medium mb-6 text-center leading-relaxed">
          {currentQuestion.question}
        </p>

        <div className="flex flex-col space-y-4">
          {currentQuestion.options.map((option, index) => {
            let optionStyle = `bg-gradient-to-r from-[#2b1b4d] to-[#3a2d6f] text-white 
                               hover:from-[#4c348d] hover:to-[#6b5da7] transition-all duration-300 
                               shadow-lg hover:shadow-indigo-700/70 transform hover:scale-105`;

            if (selectedAnswer) {
              if (option === currentQuestion.correctAnswer && isCorrect) {
                optionStyle = 'bg-green-600 text-white animate-pulse shadow-lg transform scale-105'; // Correct answer
              } else if (option === selectedAnswer && !isCorrect) {
                optionStyle = 'bg-red-600 text-white animate-shake shadow-lg transform scale-105'; // Incorrect selection
              }
            }

            return (
              <button
                key={index}
                className={`py-3 px-5 w-[80%] m-auto rounded-lg transition-colors duration-300 ease-in-out font-semibold ${optionStyle}`}
                onClick={() => handleOptionClick(option)}
                disabled={selectedAnswer !== null}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuestionModal;
