import React, { useEffect } from "react";

export default function App(){
    
	// let current = document.getElementById('current-time');
	let addinput = document.getElementById('addinp');
  // let alarmbtn = document.getElementById('addbtn');
   
	let alarms = [];
	let today = new Date();
	let currentHours = today.getHours();
	let currentMinutes = today.getMinutes();
	let currentSeconds = today.getSeconds();
	let time = currentHours + ":" + currentMinutes + ":" + currentSeconds;
  
  let current = time;

  useEffect(() => {
    setInterval(() => {
      current = document.getElementById("current-time");
    }, 1000);
  }, []);

  current.innerHTML = time;
  console.log(current)

	function timeInterval(){
		today = new Date();
		currentHours = today.getHours();
		currentMinutes = today.getMinutes();
		currentSeconds = today.getSeconds();
    if(current) {
      time =  currentHours + ":" + currentMinutes + ":" + currentSeconds;
       current.innerHTML = time;
    }
	}
	setInterval(timeInterval,1000);

	function checkAlarm(){
		for( var i = 0 ; i < alarms.length ; i++){
			if(current.innerHTML === alarms[i]){
        alert("hey you got your alarm ringing!");
        console.log("fhhhfh")
			}
		}
	}
	setInterval(checkAlarm,1000);

	function addAlarm(alarm) {
		if(alarm){
			alarms.push(alarm);
			return;
		}
	}
	
	function setAlarmListener(){
		var newAlarms = alarms.filter(function(alarm){
			return alarm === addinput.value;
		});
		if(newAlarms.length === 0){
      addAlarm(addinput?.value);
      console.log("llll");
      
			return;
		}else{
			alert("Same alarm exist")
			return;
		}
  }
  
	// function initializeApp(){
	// 	alarmbtn.addEventListener('click', setAlarmListener);
  // }
  
  // initializeApp();
  

  return(
    <div>
      <div id="current-time"></div>
      <input type="time" id="addinp" />
      <button type="submit" id="addbtn" onClick={setAlarmListener}>alarm</button>
      </div>
  )
}
