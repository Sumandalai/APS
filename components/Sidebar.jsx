'use client';
import React, { useContext } from 'react';
import Image from 'next/image';

import { GameContext } from '@/Context/GameContext';
// import { Button } from "@/components/ui/button";
//import { fa-arrow-right-from-bracket } from 
import { MdExitToApp } from "react-icons/md";



const Sidebar = () => {
  const { lifelines, score, timeLeft ,setIsGameOver ,setShowBackButton } = useContext(GameContext);
  
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const end=()=>{
    setShowBackButton(true);
    setIsGameOver(true);
  }

  return (
    <div className="text-white font-bold pt-6 flex flex-col justify-between h-full relative">

      <div>
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


      {/* <div className="mt-8 relative overflow-y-clip">
        <div className="relative w-full h-[260px]"> 
          <Image
            src="/images/miniastro.png" 
            alt="Sidebar Illustration"
            fill
            style={{ objectFit: 'contain' }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 scale-[1.5]" 
          />
        </div>
      </div> */}

      <div className="w-full flex justify-start z-30 mb-8 text-xl">
        <button
          onClick={end}
          variant="secondary"
          className="w-[80%] py-2 text-white font-semibold bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:from-purple-600 hover:to-pink-600 flex items-center justify-center space-x-2"
        >
          <span>End Game</span>
          <MdExitToApp className="text-xl" />
        </button>

      </div>


    </div>
  );
};

export default Sidebar;
