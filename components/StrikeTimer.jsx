import Head from "next/head";
import { useEffect, useState } from "react";
import WorkoutTimer from "./WorkoutTimer";
import WorkoutClock from "../core/WorkoutClock";
import TimeForm from "./TimeForm";

export default function StrikeTimer() {
  const [timer, setTimer] = useState();

  const timeSelected = (timeFormData) => {
    const { workTime, breakTime, rounds } = timeFormData;
    setTimer(new WorkoutClock(rounds, workTime, breakTime)); // it is undefine why?;
  };

  const cancelTimer = () => {
    setTimer(undefined);
  };

  return (
    <div>
      {!timer ? (
        <TimeForm timeSelected={timeSelected} />
      ) : (
        <WorkoutTimer timer={timer} timerDone={cancelTimer} />
      )}
    </div>
  );
}
