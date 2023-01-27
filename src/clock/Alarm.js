
import React, { useState, useEffect } from 'react';

// function Alarm() {
//     const [dateState, setDateState] = useState(new Date());
//     useEffect(() => {
//            setInterval(() => setDateState(new Date()), 1000);
//     }, []);
//     return (
//         <div className="App">
//             <p>
//              {dateState.toLocaleString('en-US', {
//                 hour: 'numeric',
//                 minute: 'numeric',
// 				second: 'numeric',
//                 hour12: true,
//             })}
//             </p>
//         </div>
//     );
// }

// export default Alarm;

function Alarm() {
	const [value, setValue] = useState("");
	const [time, setTime] = useState()
	// const [hour, setHour] = useState(new Date().getHours()) 
	// const [minute, setMinute] = useState(new Date().getMinutes())
	// const [second, setSecond] = useState(new Date().getSeconds())


	const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
           setInterval(() => setDateState(new Date()), 1000);
    }, []);
  

// let currentTime = document.getElementById("current-time");
// let inputt = document.getElementById("add");
// let setAlarmbtn = document.getElementById("set-alarm-btn");
// let alarms = [];

// let today = new Date();
// let currentHours = today.getHours();
// let currentMinutes = today.getMinutes();
// let currentSeconds = today.getSeconds();
// let time = currentHours + ":" + currentMinutes + ":" + currentSeconds;
// currentTime.innerHTML = time;

// function timeInterval() {
//   today = new Date();
//   currentHours = today.getHours();
//   currentMinutes = today.getMinutes();
//   currentSeconds = today.getSeconds();
//   time = currentHours + ":" + currentMinutes + ":" + currentSeconds;
//   currentTime.innerHTML = time;
// }
// setInterval(timeInterval, 1000);

// function checkAlarm() {
//   for (var i = 0; i < alarms.length; i++) {
//     if (currentTime.innerHTML === alarms[i]) {
//       alert("helllll");
//     }
//   }
// }
// setInterval(checkAlarm, 1000);

// function addAlarm(alarm) {
//   if (alarm) {
//     alarms.push(alarm);
//     return;
//   }
// }

function onChange (event) {
	setValue(event)
	console.log(event, 545);
}

function setAlarmListener() {
	if(dateState === value) {
		alert("Heli")
	}
//   var newAlarms = alarms.filter(function (alarm) {
//     return alarm === inputt.value;
//   });
//   if (newAlarms.length === 0) {
//     addAlarm(inputt.value);
//     return;
//   } else {
//     alert("Same alarm exist");
//     return;
//   }
}

useEffect(() => {
	setAlarmListener()
}, []);

  return (
    <div className="App">
       {dateState.toLocaleString('en-PM', {
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric',
			hour12: true,
        })}

      <div id="set-alarm">
        <input
          id="add"
          name="time"
          type="time"
		  onChange={(event) => onChange(event.target.value)}
          step="1"
          required
        />
        <button type="submit" onClick={setAlarmListener} >Set Alarm</button>
      </div>
    </div>
  );
}

export default Alarm
