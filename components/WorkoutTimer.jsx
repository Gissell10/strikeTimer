import React, { useState, useEffect } from "react";

export default function WorkoutTimer({ timer }) {
  const [isActive, setIsActive] = useState(false);
  const { workTime, breakTime } = timer.getActiveRound();
  const [clockState, setClockState] = useState({
    workTime,
    breakTime,
    rounds: timer.getActiveRounds().length,
  });

  useEffect(() => {
    let interval;
    if (isActive && !timer.isDone()) {
      // const workmin = timer.getActiveRound().workTime / 60;
      // const worsec = timer.getActiveRound().workTime % 60;

      interval = setInterval(() => {
        timer.runOneSecond();
        setClockState({
          workMin: parseInt(timer.getActiveRound().workTime / 60),
          workSec: timer.getActiveRound().workTime % 60,
          breakMin: parseInt(timer.getActiveRound().breakTime / 60),
          breakSec: timer.getActiveRound().breakTime,
          rounds: timer.getActiveRounds().length,
        });
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  return (
    <div>
      <h1>
        work min {clockState.workMin} - sec {clockState.workSec}: Break min{" "}
        {clockState.breakMin}- sec {clockState.breakSec}
      </h1>
      <span>number of rounds : {clockState.rounds}</span>
      <button
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        go
      </button>
    </div>
  );
}
