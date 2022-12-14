import Head from "next/head";
import { useEffect, useState } from "react";
import WorkoutTimer from "../components/WorkoutTimer";
import WorkoutClock from "../core/WorkoutClock";
import TimeForm from "../components/TimeForm";

export default function About() {
  const [timer, setTimer] = useState(new WorkoutClock(1, 0, 0));

  const timeSelected = (timeFormData) => {
    const { workTime, breakTime, rounds } = timeFormData;
    setTimer(new WorkoutClock(rounds, workTime, breakTime)); // it is undefine why?;
    console.log(setTimer(new WorkoutClock(rounds, workTime, breakTime)));
  };

  return (
    <div>
      <WorkoutTimer timer={timer} />
      <TimeForm timeSelected={timeSelected} />
    </div>
  );
}
