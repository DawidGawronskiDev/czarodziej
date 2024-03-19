import {
  differenceInDays,
  differenceInHours,
  intervalToDuration,
} from "date-fns";
import { useEffect, useState } from "react";

const WizardCountdown = () => {
  const [difference, setDifference] = useState({
    fullTime: "",
    days: "",
    hours: "",
  });

  console.log(difference);

  useEffect(() => {
    const interval = setInterval(() => {
      const fullTime = intervalToDuration({
        start: new Date(),
        end: localStorage.date,
      });

      const days = differenceInDays(localStorage.date, new Date());

      const hours = differenceInHours(localStorage.date, new Date());

      setDifference({
        fullTime: `${fullTime.years} lat, ${fullTime.months} miesiecy, ${fullTime.days} dni, ${fullTime.hours} godzin, ${fullTime.minutes} minut, ${fullTime.seconds} sekund`,
        days: days,
        hours: hours,
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [difference]);

  if (difference) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <h6 className="text-2xl opacity-50">zostalo</h6>
        <h1 className="text-4xl font-bold">{difference.fullTime}</h1>
        <h6 className="text-2xl opacity-50">lub</h6>
        <h1 className="text-4xl font-bold">{difference.days} dni</h1>
        <h6 className="text-2xl opacity-50">lub</h6>
        <h1 className="text-4xl font-bold">{difference.hours} godzin</h1>
      </div>
    );
  }
};

export default WizardCountdown;
