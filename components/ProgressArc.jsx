import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ProgressArc({ percentage, text }) {
  const pathworkColor = "#3e4dc7";
  const tailWorkColor = "#e2e0eadb";
  const breakColor = "rgb(62, 199, 90)";
  const tailBreakColor = "rgba(227, 236, 229, 0.77)";

  console.log(percentage);

  return (
    <div style={{ width: 200, height: 200 }}>
      <CircularProgressbar
        value={percentage}
        text={text}
        styles={buildStyles({
          pathColor: "#3e4dc7",
          trailColor: "#e2e0eadb",
          textColor: "#3e4dc7",
        })}
      />
    </div>
  );
}
