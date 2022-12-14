import React, { useState, useEffect } from "react";

import ProgressArc from "./ProgressArc";

export default function WorkoutTimer({ timer }) {
  const [isActive, setIsActive] = useState(false);
  const [clockState, setClockState] = useState({});
  const [initialClockState, setInitialClockState] = useState({});

  useEffect(() => {
    const { workTime, breakTime } = timer.getActiveRound();
    setInitialClockState({
      workTime,
      breakTime,
      rounds: timer.getActiveRounds().length,
    });
    setClockState({
      workTime,
      breakTime,
      rounds: timer.getActiveRounds().length,
    });
  }, [timer]);

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
        if (timer.isDone()) {
          clearInterval(interval);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  const { workTime, breakTime, rounds } = clockState;
  const initialWorkTime = initialClockState.workTime;
  const initialBreakTime = initialClockState.breakTime;
  const workMin = parseInt(workTime / 60);
  const workSec = parseInt(workTime % 60);
  const breakMin = parseInt(breakTime / 60);
  const breakSec = parseInt(breakTime % 60);
  console.log(initialClockState);
  return (
    <div>
      <h1>
        work min {workMin} - sec {workSec}: Break min {breakMin}- sec {breakSec}
      </h1>
      <div
        style={{
          display: "flex",
          gap: "16px",
        }}
      >
        <ProgressArc
          percentage={(workTime / initialWorkTime) * 100}
          text={`${workMin}:${workSec}`}
        />
        <ProgressArc
          percentage={(breakTime / initialBreakTime) * 100}
          text={`${breakMin}:${breakSec}`}
        />
      </div>

      <span>number of rounds : {rounds}</span>
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
