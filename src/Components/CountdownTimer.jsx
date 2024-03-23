import React, { useState, useEffect } from "react";
import styles from "./CountdownTimer.module.css";

function CountdownTimer({ targetDate }) {
  const [timeRemaining, setTimeRemaining] = useState("");
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerId, setTimerId] = useState(null);
  const [timerOver, setTimerOver] = useState(false);

  useEffect(() => {
    if (timerStarted && targetDate) {
      const targetTime = new Date(targetDate).getTime();
      setTimerId(
        setInterval(() => {
          const currentTime = new Date().getTime();
          const timeDiff = targetTime - currentTime;

          if (timeDiff <= 0) {
            clearInterval(timerId);
            setTimeRemaining(0);
            setTimerOver(true);
            setTimerStarted(false);
          } else {
            setTimeRemaining(timeDiff);
          }
        }, 1000)
      );
    } else {
      clearInterval(timerId);
    }

    return () => clearInterval(timerId);
  }, [timerStarted, targetDate]);

  const handleStartCancelTimer = () => {
    if (timerStarted) {
      clearInterval(timerId);
      setTimeRemaining("");
    } else {
      setTimerStarted(true);
      setTimerOver(false);
    }
  };

  const formatTime = (time) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeRemaining); // Destructuring values from the result of formatTime

  return (
    <div>
      <div className={styles.test}>
        <button className={styles.button} onClick={handleStartCancelTimer}>
          {timerStarted ? "Cancel Timer" : "Start Timer"}
        </button>
        {days < 100 ? (
          <div className={styles.cardsContainer}>
            <div className={styles.card}>
              <p>{days}</p>
              <h2>Days</h2>
            </div>
            <div className={styles.card}>
              <p>{hours}</p>
              <h2>Hours</h2>
            </div>
            <div className={styles.card}>
              <p>{minutes}</p>
              <h2>Minutes</h2>
            </div>
            <div className={styles.card}>
              <p>{seconds}</p>
              <h2>Seconds</h2>
            </div>
          </div>
        ) : (
          <p>Days are more than 100!</p>
        )}
      </div>
      <p>
        {timerOver
          ? "The countdown is over!What's next on your adventure?"
          : ""}
      </p>
    </div>
  );
}

export default CountdownTimer;
