import React, { useState } from "react";
import "./index.scss";

const Watch = () => {
  let times = new Date().toLocaleTimeString();
  const [time, setTime] = useState(times);
  const upDataTime = () => {
    times = new Date().toLocaleTimeString();
    setTime(times);
  };
  setInterval(upDataTime, 1000);
  return (
    <div className="container">
      <h1 className="title">
       {time}
      </h1>
    </div>
  );
};

export default Watch;
