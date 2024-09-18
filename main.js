
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
    let timerOver = document.getElementById("timer");
    if(timerOver){
      timerOver.innerHTML = "Over";
      clearInterval(cooldown);
    }  
      
      // Handle full screen and play video logic
      if(timerVideo){

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
        timerVideo.play();
      }
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
  "måndag": true,
  "tisdag":true,
  "onsdag":true, 
  "torsdag":true,
  "fredag":true,
  
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
const rastPersonnal = document.getElementById("lunchPersonal");
//print the personal and a checkbox when they are working. 
//Give the personal as option depending of the day for activity
document.addEventListener('DOMContentLoaded', () => {
const rastPersonnal = document.querySelectorAll(".lunchPersonal");

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
          rastPersonnal.forEach(select => {
            select.innerHTML += `<option>${person.firstName} ${person.familyName}</option>`;
          });
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
                         console.log(frånvaroList);
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

//Add frånvaro list to the display box_3
function getFrånvaro(){
  let frånvaroDisplay = document.getElementById("frånvaro_display");
  if(frånvaroList.length === 0){
    frånvaroDisplay.innerHTML =`<div class="personal">Alla är på plats!</div>`
     
  }else{
    frånvaroList.forEach( person =>{
    frånvaroDisplay.innerHTML +=`<div class="personal">${person.firstName} ${person.familyName}</div>`
    })
  }
}


//save the lunch and display

let lunchInput = document.getElementById("lunchName");
let lunchInputVeg = document.getElementById("lunchName_veg");
let lunchButton = document.getElementById("lunchOk");
let lunchList = document.getElementById("lunchList");
let lunchDisplay = document.getElementById("lunchDisplay");
let lunch = "";

if(lunchButton){
 // Add event listener to the button
 lunchButton.addEventListener("click", function() {
  // Get the value from the input field
  let lunch = `${lunchInput.value}<br>${lunchInputVeg.value}`; 

  // Check if the input is not empty
  if (lunch !== "") {
     lunchList.innerHTML = `${lunch}`;
     lunchDisplay.innerHTML = `${lunch}`;
  }else{
    console.log("Skriv lunchen")
  }
});
}

//Display the lunch

//Activities

  let buttonStart = document.getElementById("button_start");
  let settingDisplay = document.getElementById("setting");
  let box_1Display = document.getElementById("box_1");
  let boxes = document.querySelectorAll(".box");
  let displayTimer = "";




  let backToSettings = document.getElementById("backToSettings");

  backToSettings.addEventListener("click", ()=>{
    clearInterval(displayTimer);
    boxes.forEach(box=>{
      box.style.display = "none";
    })
    settingDisplay.style.display = "flex";

  })

let timeoutId;

document.addEventListener('mouseover', () => {
  if(settingDisplay.style.display == "flex" || settingDisplay.style.display == "" ){
    backToSettings.style.display="none"
  }else{
    backToSettings.style.display = 'block';
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
      timeoutId = setTimeout(() => {
          backToSettings.style.display = 'none';
      }, 3000); // 10000 milliseconds = 10 seconds
    }
  });


const activitiesObj = [
  {måndag:[
    {personal: "Roni Ali", activity: "Basket"},
    {personal: "Donovan Payan", activity: "Badminton"},
    {personal: "Ersika Simba", activity: "Switch"},
    {personal: "Yvonne Grahn", activity: "Hundromenad"},
  ]},
  {tisdag:[
    {personal: "Seidi Can", activity: "Spel"},
    {personal: "Donovan Payan", activity: "Switch"},
    {personal: "Yvonne Grahn", activity: "Promenad"},
    {personal: "Ersika", activity: ""},
  ]},
  {onsdag:[
    {personal: "Matthias Petersson", activity: "Pingis"},
    {personal: "Donovan Payan", activity: "Rita"},
    {personal: "Ersika Simba", activity: "Switch"},
    {personal: "Lisa Norming", activity: "Promenad"},
    {personal: "Joel Strandberg", activity: "Spel"},
  ]},
  {torsdag:[
    {personal: "Olof Lövdén", activity: "Idrott"},
    {personal: "Donovan Payan", activity: "Koda"},
    {personal: "Sandra", activity: "Slöjd"},
    {personal: "Yvonne", activity: "Promenad"},
    {personal: "Ersika", activity: "Switch"},
  ]},
  {fredag:[
    {personal: "Viktor Elander", activity: "Quiz"},
    {personal: "Ersika Simba", activity: "Switch"},
    {personal: "Göran Christersson.Mahlin", activity: "Spel"},
    {personal: "Lisa Norming", activity: "Promenad"},
  ]},
];

const personalOptions = [
  "Roni Ali",
  "Seidi Can",
  "Göran Christersson.Mahlin",
  "Melina Do.Rosario",
  "Monia Dgachi",
  "Viktor Elander",
  "Sandra Hiredal",
  "Olof Lövdén",
  "Ersika Simba",
  "Stefan Schöning",
  "Joel Strandberg",
  "Lisa Norming",
  "Matthias Petersson",
  "Lisa Tradefelt",
  "Yvonne Grahn"]



const activityOptions = 
[ "Basket",
  "Badminton", 
  "Switch", 
  "Promenad", 
  "Spel", 
  "Pingis", 
  "Rita", 
  "Idrott", 
  "Koda", 
  "Slöjd", 
  "Quiz", 
  "Fotboll", 
  "Kortspel", 
  "Sola", 
  "Hundpromenad", 
  "Innebandy"];
const img =[
  {basket: "basket.gif"},
  {badminton: "badminton.gif"},
  {hundpromenad : "hundpromenad.gif"},
  {pingis:"pingis.gif"},
  {promenad: "promenad.gif"},
  {spel: "spel.gif"},
  {rita: "rita.gif"},
  {idrott: "idrott.png"},
  {koda: "koda.gif"},
  {slöjd: "slöjd.gif"},
  {quiz: "quiz.gif"},
  {fotboll: "fotboll.gif"},
  {sola: "sola.gif"},
  {kortspel: "kortspel.gif"},
  {innebandy: "innebandy.png"}

]

let activitiesOfTheDay = activitiesObj.find(day => day[dayPåSvenska.toLowerCase()])[dayPåSvenska.toLowerCase()];

function renderActivities() {
    const activityList = document.getElementById("activityList");
    activityList.innerHTML = "";

    activitiesOfTheDay.forEach((activity, index) => {
        const activityItem = document.createElement("div");
        activityItem.className = "activity-item";
        activityItem.innerHTML = `
            <span>${activity.personal}: ${activity.activity}</span>
            <button class="editBtn">Edit</button>
            <button class="deleteBtn">Delete</button>
        `;

        activityList.appendChild(activityItem);

        const editBtn = activityItem.querySelector(".editBtn");
        const deleteBtn = activityItem.querySelector(".deleteBtn");

        // Edit button functionality
        editBtn.addEventListener('click', () => {
            showEditForm(activity, index);
        });

        // Delete button functionality
        deleteBtn.addEventListener('click', () => {
            activitiesOfTheDay.splice(index, 1);
            console.log(activitiesOfTheDay);
            renderActivities();
        });
    });
}

function showEditForm(activity, index = null) {
    const modal = document.getElementById("activityModal");
    const personalSelect = document.getElementById("personalSelect");
    const activitySelect = document.getElementById("activitySelect");
    const customInput = document.getElementById("customInput");
    
    personalSelect.innerHTML = personalOptions.map(person => 
        `<option value="${person}" ${person === activity.personal ? 'selected' : ''}>${person}</option>`
    ).join('');

    activitySelect.innerHTML = activityOptions.map(act => 
        `<option value="${act}" ${act === activity.activity ? 'selected' : ''}>${act}</option>`
    ).join('') + '<option value="annat">Annat</option>';

    modal.style.display = "block";

    activitySelect.addEventListener('change', function() {
        if (this.value === 'annat') {
            customInput.style.display = "block";
        } else {
            customInput.style.display = "none";
        }
    });

    const saveBtn = document.getElementById("saveActivityBtn");
    saveBtn.onclick = function() {
        const selectedPersonal = personalSelect.value;
        const selectedActivity = activitySelect.value === "annat" ? customInput.value : activitySelect.value;

        if (index !== null) {
            activitiesOfTheDay[index] = { personal: selectedPersonal, activity: selectedActivity };
        } else {
            activitiesOfTheDay.push({ personal: selectedPersonal, activity: selectedActivity });
        }

        modal.style.display = "none";
        console.log(activitiesOfTheDay);
        renderActivities();
    };

    const cancelBtn = document.getElementById("cancelActivityBtn");
    cancelBtn.onclick = function() {
        modal.style.display = "none";
    };
}

document.getElementById("addActivityBtn").addEventListener("click", function() {
    showEditForm({ personal: "", activity: "" });
});

// Initial rendering of activities for the day
renderActivities();
function getImageForActivity(activity) {
  const imageObj = img.find(image => image[activity.toLowerCase()]);
  return imageObj ? imageObj[activity.toLowerCase()] : null;
}

function ActivitiesDisplay(){
  console.log(activitiesOfTheDay)
  p = document.getElementById("box_activity");
  p.innerHTML ="";
  if(activitiesOfTheDay.length != 0){
    let i = 0;
    activitiesOfTheDay.forEach(person =>{
      newDiv = document.createElement("div");
      newDiv.setAttribute("class", "box");
      i++;
      let img = getImageForActivity(person.activity.toLowerCase());
      console.log(img)
      newDiv.innerHTML += 
      `<h2>Aktivitet ${i}</h2>
      <div class="activity_name">${person.activity}</div>
      <img class="img_activity" src="./asset/activity_img/${img}"/>
      <div>med ${person.personal}</div>`
      p.appendChild(newDiv);
    })

  }else{

  }
}


//end of the pause

if(time){

}

buttonStart.addEventListener("click", ()=>{
  settingDisplay.style.display = "none";
  box_1Display.style.display = "flex";
  getFrånvaro();
  ActivitiesDisplay();
  const boxes = document.querySelectorAll('.box');
  let currentIndex = 0;

  function showBox(index) {
    boxes.forEach((box, i) => {
      box.style.display = i === index ? 'block' : 'none'; // Show the current box, hide others
    });
  }

  displayTimer = setInterval(() => {
      showBox(currentIndex); // Show the current box
      currentIndex = (currentIndex + 1) % boxes.length; // Move to the next box, looping back to the start
  }, 3000); 

  // Initially show the first box
  showBox(currentIndex);
}); 



let tvspel =[
  "Gang Beasts",
  "Super Mario Bros Wonder",
  "Mario Chase",
  "Battle Quest",
  "Metroid Blast",
  "Luigi's Ghost Mansion",
  "Sweet Day",
  "Wii u Party",
  "Wii Sports Resorts",
  "Elevval"
]