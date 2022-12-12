import Head from "next/head";
import { useEffect, useState } from "react";
import WorkoutTimer from "../components/WorkoutTimer";
import WorkoutClock from "../core/WorkoutClock";
import TimeForm from "../components/timeForm";

export default function About() {
  const [timer, setTimer] = useState(new WorkoutClock(2, 5, 5));

  return (
    <div>
      <WorkoutTimer timer={timer} />
      <TimeForm />
    </div>
  );
}
