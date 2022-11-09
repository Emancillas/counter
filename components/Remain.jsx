import { useState, useEffect } from "react";
import Digit from "./Digit";
import st from "./styles/Remain.module.sass";

export default function Remain({ newDate }) {
  const [clockValues, setClockValues] = useState([
    { label: "days", value: 0 },
    { label: "hours", value: 0 },
    { label: "minutes", value: 0 },
    { label: "seconds", value: 0 },
  ]);
  let days = clockValues[0].value;
  let hours = clockValues[1].value;
  let minutes = clockValues[2].value;
  let seconds = clockValues[3].value;

  const calculateTimeLeft = () => {
    //27 mayo 10:00 am
    let date = new Date(newDate);
    let difference = date.getTime() - Date.now();
    let timeLeft = {};
    difference > 0
      ? (timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      : (timeLeft = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
    return timeLeft;
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      let newValues = [...clockValues];
      newValues[0].value = calculateTimeLeft().days;
      newValues[1].value = calculateTimeLeft().hours;
      newValues[2].value = calculateTimeLeft().minutes;
      newValues[3].value = calculateTimeLeft().seconds;
      setClockValues(newValues);
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className={st.Clock}> 
        <Digit value={days} unit="Dias" />
        <span className={st.dots}>:</span>
        <Digit value={hours} unit="Horas" />
        <span className={st.dots}>:</span>
        <Digit value={minutes} unit="Minutos" />
        {/* <span className={st.dots}>:</span>
        <Digit value={seconds} unit="Segundos" /> */}
    </div>
  );
}
