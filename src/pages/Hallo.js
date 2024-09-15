import React, { useEffect, useState } from 'react';
import Typewriter from "typewriter-effect";

export default function Hallo() {

  return (
    <div className="h-full flex items-center justify-center mb-8">
      <div className="text-gray-500 lg:pl-0 pl-5">
        <p className="text-xl font-light">Hallo, ik ben</p>
        <h1 className="text-white font-bold lg:text-8xl text-6xl drop-shadow-glow">
          <Typewriter
              onInit={(typewriter) => {
                  typewriter
                      .typeString("Sander Sekreve")
                      .pauseFor(100)
                      .start();
              }}
            />
        </h1>
        
        <p className="text-2xl font-medium">{"> Software Developer"}</p>
      </div>
    </div>
  );
}