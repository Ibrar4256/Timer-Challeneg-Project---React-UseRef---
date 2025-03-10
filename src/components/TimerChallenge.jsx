import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  let timer = useRef();
  let dialog = useRef();

  // const [timerStarted , setTimerStarted] = useState(false);
  // const [timerEnded, setTimerEnded] = useState(false);

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const isTimerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset()
  {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);

    // timer.current = setTimeout(() =>
    // {
    //     setTimerEnded(true);
    //     dialog.current.open();
    // },targetTime * 1000);

    // setTimerStarted(true);
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
    // clearTimeout(timer.current);
    // setTimerStarted(false);
  }
  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset = {handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second {targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={isTimerActive ? handleStop : handleStart}>
            {isTimerActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={isTimerActive ? "active" : undefined}>
          {isTimerActive ? "Time is running" : "inactive"}
        </p>
      </section>
    </>
  );
}
