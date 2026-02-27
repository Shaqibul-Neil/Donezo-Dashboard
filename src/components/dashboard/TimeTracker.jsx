import React, { useEffect, useState } from "react";
import SectionHeader from "../headers/SectionHeader";
import { Pause, Play, Square } from "lucide-react";

const TimeTracker = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
      //   setTime(0);
    };
  }, [isActive]);

  //timer stop
  const handleTimerStop = () => {
    setIsActive(false);
    setTime(0);
  };

  const hours = String(Math.floor(time / 3600)).padStart(2, "0"); //result is the hour
  const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0"); //reminders is being divided by 60 and get the result as minute
  const seconds = String(Math.floor(time % 60)).padStart(2, "0"); //reminder

  //console.log(time);

  return (
    <div className="box-style space-y-5.5 relative bg-[url(/src/assets/tracker.webp)] bg-center">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 rounded-2xl h-full z-9"></div>

      {/* Title Area */}
      <div className="flex justify-between items-center relative z-10">
        <SectionHeader className={"text-white"}>Time Tracker</SectionHeader>
      </div>

      {/* Timer */}
      <p className="text-4xl tracking-wider leading-none text-center text-white relative z-10">
        {hours}:{minutes}:{seconds}
      </p>

      {/* Buttons */}
      <div className="relative z-10 flex gap-4 mx-auto">
        {/* Pause/Play Button */}
        <button
          onClick={() => setIsActive(!isActive)}
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all bg-white/5 backdrop-blur-sm group cursor-pointer"
        >
          {isActive ? (
            <Pause size={18} fill="white" className="text-white" />
          ) : (
            <Play size={18} fill="white" className="text-white ml-1" />
          )}
        </button>

        {/* Stop Button  */}
        <button
          onClick={handleTimerStop}
          className="w-10 h-10 rounded-full bg-[#E53935] flex items-center justify-center hover:bg-red-600 transition-all shadow-lg cursor-pointer"
        >
          <Square size={18} fill="white" className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default TimeTracker;
