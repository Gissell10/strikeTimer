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
      interval = setInterval(() => {
        timer.runOneSecond();
        setClockState({
          workTime: timer.getActiveRound().workTime,
          breakTime: timer.getActiveRound().breakTime,
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
        {clockState.workTime}: {clockState.breakTime}
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
