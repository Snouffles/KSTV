
//what day
let date = new Date();
let day = date.getDay();
let dayPåSvenska ="";
let lunchrast = ""
let morgonrast = ""
let timerMinute = 0;
let timerSeconds = 10;
let timerVideo = document.getElementById("timerVideo");
document.addEventListener('DOMContentLoaded', () => {
  setInterval(function time(){
      const now = new Date();
      let hour = now.getHours();
      let minute = now.getMinutes();
      if(minute < 10){
          minute = "0"+minute;
      }
      let seconds = now.getSeconds();
      if(seconds < 10){
          seconds = "0"+ seconds;
          
      }
      const time = document.getElementById("time");
    
      time.innerHTML= `${hour}:${minute}:${seconds}`;

  },1000)
})
switch(day){
  case 1:
    dayPåSvenska = "Måndag";
    lunchrast = {start: 1155, end: 1250};
    morgonrast = {start: 1045, end: 1100};
    workshoprast= {start:1400, end: 1405}
  break;
  case 2:
    dayPåSvenska = "Tisdag";
    lunchrast = {start: 1155, end: 1250}
    morgonrast = {start: 1155, end: 1250};
    workshoprast= {start:1400, end: 1405}
  break;
  case 3:
    dayPåSvenska = "Onsdag";
    lunchrast = {start: 1210, end: 1250}
    morgonrast = {start: 1155, end: 1250};
    workshoprast= {start:1400, end: 1405}
  break;
  case 4:
    dayPåSvenska = "Torsdag";
    lunchrast = {start: 1155, end: 1250}
    morgonrast = {start: 1155, end: 1250};
    workshoprast= {start:1400, end: 1405}
  break;
  case 5:
    dayPåSvenska = "Fredag";
    lunchrast = {start: 1155, end: 1250}
    morgonrast = {start: 1155, end: 1250};
    workshoprast= {start:1400, end: 1405} 
  break;
  case 6:
    dayPåSvenska = "Lördag";
  break;
  case 7:
    dayPåSvenska = "Söndag";
  break;
  default:
    dayPåSvenska = "";
  
}

let cooldown = setInterval(function timer() {
  // Ensure timerMinute and timerSeconds are numbers
  timerMinute = parseInt(timerMinute);
  timerSeconds = parseInt(timerSeconds);

  // Add leading zeros
  if (timerSeconds < 10) {
      timerSeconds = "0" + timerSeconds;
  }
  if (timerMinute < 10 && timerMinute !== "0" + timerMinute) {
      timerMinute = "0" + timerMinute;
  }

  // Update the timer display
  let timerDisplay =  document.getElementById("timer");
  if(timerDisplay){
   timerDisplay.innerHTML = `${timerMinute}:${timerSeconds}`;

  }

  // Handle minute and second countdown logic
  if (timerSeconds == 0) {
      if (timerMinute > 0) {
          timerMinute -= 1;
          timerSeconds = 59;
      } else {
          timerSeconds = 0;
      }
  } else {
      timerSeconds -= 1;
  }

  // Check if the timer has reached 00:00
  if (timerMinute == 0 && timerSeconds == 0) {
      document.getElementById("timer").innerHTML = "Over";
      clearInterval(cooldown);
      
      // Handle full screen and play video logic
      timerVideo.style.display = "flex";
      if (timerVideo.requestFullscreen) {
          timerVideo.requestFullscreen();
      } else if (timerVideo.mozRequestFullScreen) { // Firefox
          timerVideo.mozRequestFullScreen();
      } else if (timerVideo.webkitRequestFullscreen) { // Chrome, Safari, and Opera
          timerVideo.webkitRequestFullscreen();
      } else if (timerVideo.msRequestFullscreen) { // IE/Edge
          timerVideo.msRequestFullscreen();
      }
      // timerVideo.play();
  }
}, 1000);
if(timerVideo){
  
  timerVideo.addEventListener('ended', function() {
      this.style.display = 'none';
      }
  )
}



let audio = ("./Its Done. Its Over..mp3");
let sound = new Audio(audio);

  

//get the month to swedish
let monthPåSvenska;
switch(date.getMonth()){
  case 0:
    monthPåSvenska = "Januari";
    break;
  case 1:
    monthPåSvenska = "Februari";
    break;
  case 2:
    monthPåSvenska = "Mars";
    break;
  case 3:
    monthPåSvenska = "April";
    break;
  case 4:
    monthPåSvenska = "Maj";
    break;
  case 5:
    monthPåSvenska = "Juni";
    break;
  case 6:
    monthPåSvenska = "Juli";
    break;
  case 7:
    monthPåSvenska = "Augusti";
    break;
  case 8:
    monthPåSvenska = "September";
    break;
  case 9:
    monthPåSvenska = "Oktober";
    break;
  case 10:
    monthPåSvenska = "November";
    break;
  case 11:
    monthPåSvenska = "December";
    break;

  }

//print the date
let datum = document.getElementById("date");
let dateTitle = dayPåSvenska +" "+ date.getDate() + " "+ monthPåSvenska;
if(datum){
  datum.innerHTML = `${dateTitle}`;

}


//get the week
function getWeekNumber(d) {
  // Copy date so don't modify original
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
  // Get first day of year
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  // Calculate full weeks to nearest Thursday
  var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
  // Return array of year and week number
  return [d.getUTCFullYear(), weekNo];
}
let vecka = document.getElementById("vecka")
if(vecka){
  vecka.innerHTML += `${getWeekNumber(date)[1]}`

}









//list of personnal working at kunslapsskolan 2024
let personalList= [ {
  "firstName": "Lisa","familyName":"Norming","photo": "",
  "present": true,
  "måndag": true,
  "tisdag":true,
  "onsdag":true, 
  "torsdag":true,
  "fredag":true,
},
{
  "firstName": "Göran",
  "familyName":"Christersson.Mahlin",
  "photo": "",
  "present": true,
  "mondag": true,
  "tisdag":true,
  "onsdag":true, 
  "torsdag":true,
  "fredag":true
},
{
  "firstName": "Olof",
  "familyName":"Lövdén",
  "photo": "",
  "present": true,
  "måndag": true,
  "tisdag":true,
  "onsdag":true, 
  "torsdag":true,
  "fredag":true
},
{
  "firstName": "Donovan",
  "familyName":"Payan",
  "photo": "",
  "present": true,
  "måndag": true,
  "tisdag":true,
  "onsdag":true, 
  "torsdag":true,
  "fredag":true
},
{
  "firstName": "Joel",
  "familyName":"Strandberg",
  "photo": "",
  "present": true,
  "måndag": false,
  "tisdag":true,
  "onsdag":true, 
  "torsdag":true,
  "fredag":true
},
{
  "firstName": "Lisa",
  "familyName":"Tradefelt",
  "photo": "",
  "present": false,
  "måndag": false,
  "tisdag":false,
  "onsdag":false, 
  "torsdag":false,
  "fredag":false
},
{
  "firstName": "Mattias",
  "familyName":"Petersson",
  "photo": "",
  "present": true,
  "måndag": true,
  "tisdag":true,
  "onsdag":true, 
  "torsdag":true,
  "fredag":true
},
{
  "firstName": "Monia",
  "familyName":"Dgachi",
  "photo": "",
  "present": true,
  "måndag": true,
  "tisdag":true,
  "onsdag":true, 
  "torsdag":true,
  "fredag":true
},
{
  "firstName": "Melina",
  "familyName":"Do.Rosario",
  "photo": "",
  "present": true,
  "måndag": true,
  "tisdag":false,
  "onsdag":false, 
  "torsdag":false,
  "fredag":false
},
{
  "firstName": "Roni",
  "familyName":"Ali",
  "photo": "",
  "present": true,
  "måndag": true,
  "tisdag":true,
  "onsdag":true, 
  "torsdag":false,
  "fredag":false
},
{
  "firstName": "Sandra",
  "familyName":"Hiredal",
  "photo": "",
  "present": true,
  "måndag": false,
  "tisdag":true,
  "onsdag":true, 
  "torsdag":true,
  "fredag":true
},
{
  "firstName": "Seidi",
  "familyName":"Can",
  "photo": "",
  "present": true,
  "måndag": true,
  "tisdag":true,
  "onsdag":true, 
  "torsdag":true,
  "fredag":true
},
{
  "firstName": "Stefan",
  "familyName":"Schöning",
  "photo": "",
  "present": true,
  "måndag": true,
  "tisdag":false,
  "onsdag":false, 
  "torsdag":false,
  "fredag":true
},
{
  "firstName": "Viktor",
  "familyName":"Elander",
  "photo": "",
  "present": true,
  "måndag": true,
  "tisdag":true,
  "onsdag":true, 
  "torsdag":true,
  "fredag":true
},
{
  "firstName": "Yvonne",
  "familyName":"Grahn",
  "photo": "",
  "present": true,
  "måndag": true,
  "tisdag":true,
  "onsdag":true, 
  "torsdag":true,
  "fredag":true
}];
let frånvaroList= [];
//print the personal and a checkbox when they are working. 
document.addEventListener('DOMContentLoaded', () => {

const personal = document.getElementById("personalList");

if(personal){

  personalList.forEach(person =>{
    let work = dayPåSvenska.toLowerCase();
  
    if(person.måndag === true && work === "måndag"
    || person.tisdag === true && work === "tisdag"
    || person.onsdag === true && work === "onsdag"
    || person.torsdag === true && work === "torsdag"
    || person.fredag === true && work === "fredag"
    ){
          personal.innerHTML += `
              <div class="personal"> 
                  <input id=${person.familyName} type="checkbox">
                  <strong>${person.firstName}</strong><br>
              </div>`
    }
  
    
  })
}
})

//If checkbox checked add the personal into the frånvaro list, if unchecked, remove it. 
document.addEventListener('DOMContentLoaded', () => {
          personalList.forEach(person => {
              const checkBox = document.getElementById(`${person.familyName}`);
              if (checkBox) { // Ensure the element exists
                  checkBox.addEventListener("change", () => {
                      if (checkBox.checked) {
                         frånvaroList.push({"firstName":person.firstName, "familyName":person.familyName});
                         document.getElementById("frånvaroList").innerHTML = ``;
                         frånvaroList.forEach(frånvaro =>{
                          
                      document.getElementById("frånvaroList").innerHTML += `<div>${frånvaro.firstName} ${frånvaro.familyName}`;
                         })
                      } else {
                        frånvaroList = frånvaroList.filter(frånvaro => !(frånvaro.firstName === person.firstName && frånvaro.familyName === person.familyName));
                        document.getElementById("frånvaroList").innerHTML = ``;
                          frånvaroList.forEach(frånvaro =>{
                            document.getElementById("frånvaroList").innerHTML += `<div>${frånvaro.firstName} ${frånvaro.familyName}`;
                             })
                      } 
                     
                  });
              } 
          });
});
      