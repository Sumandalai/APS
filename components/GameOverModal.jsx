import React, { useContext } from 'react';
import { GameContext } from '@/Context/GameContext';
import { useSession } from "next-auth/react";

const GameOverModal = () => {
  const { isGameOver, score, timeLeft, endGame } = useContext(GameContext);
  const { data: session } = useSession(); 
  const userName = session?.user?.name || "Player"; 

  if (!isGameOver) {
    return null;
  }

  const timeTaken = 600 - timeLeft;
  const minutesTaken = Math.floor(timeTaken / 60);
  const secondsTaken = timeTaken % 60;
  const mytime = minutesTaken + secondsTaken / 100;

  let motivationalMessage = '';
  if (score >= 100) {
    motivationalMessage = `${userName}, amazing job! You're a true maze master! Keep up the excellent performance.`;
  } else if (score >= 50) {
    motivationalMessage = `Great effort, ${userName}! You're doing really well! Aim even higher next time.`;
  } else {
    motivationalMessage = `${userName}, keep practicing! With determination, you'll soon reach greater heights!`;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-[30]">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl max-w-lg w-full transform transition-all duration-500 ease-in-out scale-105 border border-purple-600">
        <h2 className="text-4xl font-bold text-purple-400 mb-6 text-center animate-pulse">Game Over</h2>
        
        <p className="mb-4 text-2xl text-white font-semibold text-center">
          Your Score: <span className="text-yellow-400">{score}</span>
        </p>
        
        <p className="mb-4 text-2xl text-white font-semibold text-center">
          Time Taken: 
          <span className="text-teal-400"> {minutesTaken}:{secondsTaken < 10 ? '0' : ''}{secondsTaken}</span>
        </p>
        
        <p className="mb-6 text-xl text-center font-medium text-indigo-300 italic">
          {motivationalMessage}
        </p>

        <button
          className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
          onClick={() => endGame(mytime)}
        >
          End Game
        </button>
      </div>
    </div>
  );
};

export default GameOverModal;
