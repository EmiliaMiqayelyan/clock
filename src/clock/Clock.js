import "./clock.css";

function Clock() {
  return (
    <div className="clock">
      <div>
        <div className="twelve">12</div>
        <div className="one">1</div>
        <div className="two">2</div>
        <div className="three">3</div>
        <div className="four">4</div>
        <div className="five">5</div>
        <div className="six">6</div>
        <div className="seven">7</div>
        <div className="eight">8</div>
        <div className="nine">9</div>
        <div className="ten">10</div>
        <div className="eleven">11</div>
      </div>
      <div className="center"></div>
      <div className="time-arrow"></div>
      <div className="minute-arrow"></div>
      <div className="second-arrow"></div>
    </div>
  );
}

export default Clock;
