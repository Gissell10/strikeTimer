import React, { useState, useEffect } from "react";
import styles from "../styles/home.module.css";
import ProgressArc from "./ProgressArc";
import { Icon } from "@iconify/react";

export default function WorkoutTimer({ timer, timerDone }) {
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
          timerDone();
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
  const isWorking = workTime > 0;
  return (
    <div className={styles.workoutTimer}>
      <div className={styles.arcContainer}>
        {isWorking ? (
          <ProgressArc
            percentage={(workTime / initialWorkTime) * 100}
            pathColor="#22e6ce"
            trailColor="rgb(215, 227, 223)"
            textColor="#22e6ce"
            text={`${workMin}:${workSec}`}
          />
        ) : (
          <ProgressArc
            percentage={(breakTime / initialBreakTime) * 100}
            pathColor="rgba(34, 212, 230, 0.9)"
            trailColor="rgb(215, 227, 223)"
            textColor="rgba(34, 212, 230, 0.9)"
            text={`${breakMin}:${breakSec}`}
          />
        )}
      </div>

      <p className={styles.rounds}> {rounds} more rounds remaining </p>

      <div className={styles.timerButtons}>
        <button
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          {!isActive ? "Play" : "Pause"}
        </button>
        <button
          onClick={() => {
            setIsActive(timerDone);
          }}
        >
          Cancel Timer
        </button>
      </div>
    </div>
  );
}
