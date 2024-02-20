import { useState } from "react";
import { useEffect } from "react";

export default function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      <div className="clock">
        <span>{date.toLocaleTimeString()}</span>
      </div>
    </div>
  );
}
