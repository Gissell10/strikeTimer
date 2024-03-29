import { useState } from "react";
import styles from "./home.module.css";

export default function TimeForm(props) {
  const onTrigger = (e) => {
    e.preventDefault();
    const rounds = parseInt(e.target.rounds.value);
    const minwork = parseInt(e.target.minsWork.value) * 60;
    const secondwork = parseInt(e.target.secWork.value);

    const work = minwork + secondwork;

    const minbreak = parseInt(e.target.minBreak.value) * 60;
    const secondbreak = parseInt(e.target.secBreak.value);
    const breaks = minbreak + secondbreak;

    props.timeSelected({ workTime: work, breakTime: breaks, rounds: rounds });
  };
  return (
    <div className={styles.timeForm}>
      <form onSubmit={onTrigger}>
        <p>Work Time</p>
        <div className={styles.timers}>
          <div>
            <label>Minutes</label>
            <input
              type="number"
              min="0"
              max="60"
              name="minsWork"
              defaultValue="0"
            />
          </div>

          <div>
            <label>Seconds</label>
            <input
              type="number"
              min="0"
              max="59"
              name="secWork"
              defaultValue="0"
            />
          </div>
        </div>

        <p>Rest Time</p>

        <div className={styles.timers}>
          <div>
            <label>Minutes</label>
            <input
              type="number"
              min="0"
              max="60"
              name="minBreak"
              defaultValue="0"
            />
          </div>

          <div>
            <label>Seconds</label>
            <input
              type="number"
              min="0"
              max="59"
              name="secBreak"
              defaultValue="0"
            />
          </div>
        </div>
        <p>Rounds</p>
        <div className={styles.timers}>
          <div>
            <label> # Rounds</label>
            <input
              type="number"
              min="0"
              max="10"
              name="rounds"
              defaultValue="1"
            />
          </div>

          <button type="submit" className={styles.btnSubmit}>
            Go!
          </button>
        </div>
      </form>
    </div>
  );
}
