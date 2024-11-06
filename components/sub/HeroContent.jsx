"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
const HeroContent = () => {
    const router = useRouter();

    const handleRegisterClick = () => {
        router.push("/register"); 
    };
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row items-center   mt-2 w-full m-auto z-[20]"
        >
            <div className="h-full w-full flex flex-col justify-center m-auto text-start pl-[86px] ">

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-3 text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
                >
                    <h1
                        className="mb-4 text-8xl leading-none tracking-tight text-white"
                        style={{ letterSpacing: 2, fontFamily: "myFirstFont" }}
                    >
                        METEOR <br /> MADNESS
                    </h1>
                    <p
                        className="mb-6 text-2xl font-normal text-white-500 dark:text-gray-300 text-left"
                        style={{ fontFamily: "Roboto" }}
                    >
                        Let us commence the APS Game of MeteorMadness.
                    </p>
                </motion.div>


             
                <motion.a
                    variants={slideInFromLeft(1)}
                    onClick={handleRegisterClick}
                    className="py-2 px-4 flex items-center justify-center text-center text-white text-2xl cursor-pointer rounded-lg max-w-[200px] h-16
               bg-[#0a0a1a] hover:bg-purple-800 shadow-lg shadow-indigo-900/30
               border border-transparent hover:border-purple-400 transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Register
                </motion.a>


            </div>

            <motion.div
                variants={slideInFromRight(0.8)}
                className="w-full h-full  m-auto animate-floating ml-6  "
            >
                <Image
                    src="/astronut.png"
                    alt="work icons"
                    height={650}
                    width={650}
                />
            </motion.div>
        </motion.div>
    );
};

export default HeroContent;
