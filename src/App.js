import React, { useState } from "react";
import DateTimePicker from "./Components/DateTimePicker";
import CountdownTimer from "./Components/CountdownTimer";
import styles from "./App.module.css";

function App() {
  const [targetDate, setTargetDate] = useState("");

  const handleDateTimeChange = (selectedDate) => {
    setTargetDate(selectedDate);
  };

  return (
    <div className={styles.App}>
      <h1>
        {" "}
        <span style={{ color: "white" }}>Countdown</span>{" "}
        <span style={{ color: "purple" }}>Timer</span>
      </h1>
      <DateTimePicker
        className={styles.box}
        value={targetDate}
        onChange={handleDateTimeChange}
      />
      <CountdownTimer targetDate={targetDate} />
    </div>
  );
}

export default App;
