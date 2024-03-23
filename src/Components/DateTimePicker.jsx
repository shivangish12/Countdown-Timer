import React, { useState } from "react";
import styles from "./DateTimePicker.module.css";

function DateTimePicker({ value, onChange }) {
  const [date, setDate] = useState(value || "");
  const [time, setTime] = useState("");

  const handleDateChange = (event) => {
    const { value } = event.target;
    setDate(value);
    onChange(value + " " + time); // Concatenate date and time
  };

  const handleTimeChange = (event) => {
    const { value } = event.target;
    setTime(value);
    onChange(date + " " + value); // Concatenate date and time
  };

  return (
    <div className={styles.datetimepicker}>
      <input
        type="date"
        value={date}
        onChange={handleDateChange}
        placeholder="mm/dd/yyyy"
        autoComplete="off"
        className={styles.customdateinput}
      />
      <input
        type="time"
        value={time}
        onChange={handleTimeChange}
        placeholder="hh:mm"
        autoComplete="off"
        className={styles.customtimeinput}
      />
    </div>
  );
}

export default DateTimePicker;
