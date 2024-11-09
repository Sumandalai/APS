'use client';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { GameContext } from '@/Context/GameContext';
import { MdExitToApp } from "react-icons/md";
import Image from 'next/image';
const Sidebar = () => {
  const { lifelines, score, timeLeft, setIsGameOver, setShowBackButton } = useContext(GameContext);
  const [leaderboard, setLeaderboard] = useState([]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const end = () => {
    console.log("hello");
    setShowBackButton(true);
    setIsGameOver(true);
  };

  const easyQuestionImage = '/Images/easy.png';
  const mediumQuestionImage = '/Images/medium.png';
  const hardQuestionImage = '/Images/hard.png';
  const goalImage = '/Images/trophy.png';

  // useEffect(() => {
  //   const fetchLeaderboard = async () => {
  //     try {
  //       const response = await axios.get("/api/game"); // Replace with the correct endpoint
  //       console.log(response);
  //       setLeaderboard(response.data.topUsers);
  //     } catch (error) {
  //       console.error("Error fetching leaderboard data:", error);
  //     }
  //   };

  //   fetchLeaderboard();
  // }, []);

  return (
    <div className="text-white font-bold pt-6 flex flex-col  h-full">

      <div className="flex flex-col items-center mb-8">
        <div className="mb-4 text-xl flex items-center">
          {Array.from({ length: lifelines }).map((_, index) => (
            <span key={index} className="mr-1">❤️</span>
          ))}
        </div>
        <div className="mb-4 text-2xl">
          <span>Time Left: {formatTime(timeLeft)}</span>
        </div>
        <div className="text-2xl">
          <span>Score: {score}</span>
        </div>
      </div>

      {/* <div className="mt-2 flex-1 w-[90%] self-center">
  <h3 className="text-2xl mb-4 font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
    Leaderboard
  </h3>
  <ul className="space-y-4">
    {leaderboard.slice(0, 3).map((player, index) => (
      <li
        key={player.id}
        className="relative p-2 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg transition-transform transform hover:scale-105"
        style={{
          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
          border: `1px solid rgba(255, 255, 255, 0.2)`,
        }}
      >
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 opacity-20 blur-md -z-10"></div>

        <div className="flex flex-col items-center text-white font-bold space-y-1">
          <div className="flex items-center text-xl font-bold bg-gradient-to-r from-blue-400 to-pink-400 text-transparent bg-clip-text">
            <span className="mr-2">#{index + 1}</span>
            <span>{player.name.split(" ")[0]}</span>
          </div>
          <div className="text-sm font-semibold">
            {player.points} pts &bull; {player.timeTaken} mins
          </div>
        </div>
      </li>
    ))}
  </ul>
</div> */}

<div className="mb-8 space-y-3 flex-1 w-[90%] self-center">
  {[
    { image: easyQuestionImage, label: 'Easy', points: '+10' },
    { image: mediumQuestionImage, label: 'Medium', points: '+20' },
    { image: hardQuestionImage, label: 'Hard', points: '+30' },
    { image: goalImage, label: 'Goal', points: '+90' }
  ].map((category, index) => (
    <div
      key={index}
      className="relative flex items-center justify-between p-3 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg transition-transform transform hover:scale-105"
      style={{
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
        border: "1px solid rgba(255, 255, 255, 0.2)"
      }}
    >
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 opacity-20 blur-md -z-10"></div>
      <Image
        src={category.image}
        alt={`${category.label} question`}
        width={40}
        height={40}
        className="rounded-md"
      />
      <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">
        {category.label}
      </span>
      <span className="text-sm font-semibold text-gray-300">
        {category.points} pts
      </span>
    </div>
  ))}
</div>




      {/* End Game Button */}
      <div className="w-full flex justify-center z-30 mb-8 text-xl">
        <button
          onClick={end}
          variant="secondary"
          className="w-[80%] py-2 text-white font-semibold bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:from-purple-600 hover:to-pink-600 flex items-center justify-center space-x-2"
        >
          <span>End Game</span>
          <MdExitToApp className="text-xl" />
        </button>
      </div>

      {/* <div className="w-full flex justify-start z-30 mb-8 text-xl">
        <button
          onClick={end}
          variant="secondary"
          className="w-[80%] py-2 text-white font-semibold bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:from-purple-600 hover:to-pink-600 flex items-center justify-center space-x-2"
        >
          <span>End Game</span>
          <MdExitToApp className="text-xl" />
        </button>

      </div> */}

    </div>
  );
};

export default Sidebar;
