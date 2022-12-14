import Head from "next/head";
import { useEffect, useState } from "react";
import WorkoutTimer from "../components/WorkoutTimer";
import WorkoutClock from "../core/WorkoutClock";
import TimeForm from "../components/TimeForm";

export default function About() {
  const [timer, setTimer] = useState(new WorkoutClock(10, 10, 10));

  const timeSelected = (timeFormData) => {
    const { workTime, breakTime, rounds } = timeFormData;
    setTimer(new WorkoutClock(rounds, workTime, breakTime)); // it is undefine why?;
  };

  return (
    <div>
      <TimeForm timeSelected={timeSelected} />
      <WorkoutTimer timer={timer} />
    </div>
  );
}
