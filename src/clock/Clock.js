import "./clock.css";
import React, { useEffect, useState } from "react";

function Clock() {
  let times = new Date().toLocaleTimeString();
  const [time, setTime] = useState(times);

  useEffect(() => {
    setInterval(() => {
      const secondHand = document.getElementById("second");
      const minuteHand = document.getElementById("minute");
      const hourHand = document.getElementById("hour");

      setClock(hourHand, secondHand, minuteHand);
    }, 1000);
  }, []);

  function setClock(hourHand, secondHand, minuteHand) {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
  }

  function setRotation(element, rotationRatio) {
    element.style.setProperty("--rotation", rotationRatio * 360);
  }

  const update = () => {
    times = new Date().toLocaleTimeString();
    setTime(times);
  };

  setInterval(update);

  return (
    <div className="clock">
      <div>
        <div className="number twelve">12</div>
        <div className="number one">1</div>
        <div className="number two">2</div>
        <div className="number three">3</div>
        <div className="number four">4</div>
        <div className="number five">5</div>
        <div className="number six">6</div>
        <div className="number seven">7</div>
        <div className="number eight">8</div>
        <div className="number nine">9</div>
        <div className="number ten">10</div>
        <div className="number eleven">11</div>
      </div>
      <div>
        <div className="times">{time}</div>
        <div className="arrow hour" id="hour"></div>
        <div className="arrow minute" id="minute"></div>
        <div className="arrow second" id="second"></div>
      </div>
    </div>
  );
}

export default Clock;
