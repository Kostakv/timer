let alarm = process.argv;
alarm = alarm.slice(2)
let time = 0;
alarm.sort( function(a,b) { return a - b; } );


const alarmBeep = function (alarm){
  process.stdout.write('\x07');
}

for (let i = 0; i < alarm.length; i++){
  time = alarm[i] * 1000;
  const alarmSend = setTimeout(alarmBeep, time);
}


