/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

import { FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa';

const Recording = ({ time, setTime }) => {
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600)
      .toString()
      .padStart(2, '0');
    const minutes = Math.floor((time % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10 mt-10">
      <div className="">
        {!isRunning ? (
          <FaPlay
            className="text-4xl text-blood"
            onClick={() => {
              setIsRunning(true);
            }}
          />
        ) : (
          <FaPause
            className="text-4xl text-blood"
            onClick={() => {
              setIsRunning(false);
            }}
          />
        )}
      </div>
      <span className="text-xl font-bold tracking-wider bg-white text-black p-2 rounded border-2 border-blood">
        {formatTime(time)}
      </span>
    </div>
  );
};
export default Recording;
