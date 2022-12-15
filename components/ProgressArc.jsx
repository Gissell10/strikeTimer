import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "./home.module.css";

export default function ProgressArc({
  percentage,
  text,
  pathColor,
  trailColor,
  textColor,
}) {
  return (
    <div className={styles.timerContainer}>
      <div className={styles.timer}>
        <CircularProgressbar
          value={percentage}
          text={text}
          styles={buildStyles({
            pathColor,
            trailColor,
            textColor,
          })}
        />
      </div>
    </div>
  );
}
