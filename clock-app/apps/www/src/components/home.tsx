// Building a simple clock app in react
// https://codepen.io/dope/pen/KJYMZz
// https://github.com/bedimcode/responsive-clock-ui

import React, { useEffect } from "react";

export function App() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = ((time.getHours() + 11) % 12) + 1;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hour = hours * 30;
  const minute = minutes * 6;
  const second = seconds * 6;

  return (
    <div className="flex h-96 w-96 items-center justify-center p-4">
      <div className="clock">
        <div className="wrap">
          <span
            className="hour"
            style={{
              transform: `rotate(${hour}deg)`,
            }}
          ></span>
          <span
            className="minute"
            style={{
              transform: `rotate(${minute}deg)`,
            }}
          ></span>
          <span
            className="second"
            style={{
              transform: `rotate(${second}deg)`,
            }}
          ></span>
          <span className="dot"></span>
        </div>
      </div>
    </div>
  );
}

export default App;
