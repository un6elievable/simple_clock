window.addEventListener('load', calculateTime);
function calculateTime (){
  let date = new Date();
  let day = date.getDay();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let format = hour >= 12 ? 'PM' : 'AM';
  let dayNames = ['SUN', 'MON','TUE','WED','THU','FRI','SAT',];
  
  hour = hour % 12;
  hour = hour ? hour : '12';
  hour = hour < 10 ? '0' + hour : hour;
  minute = minute < 10 ? '0' + minute : minute;

  document.getElementById('day').innerHTML = dayNames[day];
  document.getElementById('hour').innerHTML = hour;
  document.getElementById('minute').innerHTML = minute;
  document.getElementById('format').innerHTML = format;

  setTimeout(calculateTime, 200);
}