import "./clock.css";

function Clock() {

  // setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()

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
      {/* <div className="center"></div>
      <div className="time-arrow"></div>
      <div className="minute-arrow"></div>
      <div className="second-arrow"></div> */}
      <div class="hand hour" data-hour-hand></div>
      <div class="hand minute" data-minute-hand></div>
      <div class="hand second" data-second-hand></div>
    </div>
  );
}

export default Clock;
