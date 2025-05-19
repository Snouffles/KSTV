let date = new Date();
let day = date.getDay();
let dayPåSvenska ="";
let lunchrast = ""
let morgonrast = ""
let timerMinute = 0;
let timerSeconds = 10;
let timerVideo = document.getElementById("timerVideo");
let currentTime;
let audioMusic = document.getElementById("backgroundMusic");
let displayPie = document.getElementById("chart-container");
let PieTimer = document.getElementById("chart");

switch(day){
  case 1:
    dayPåSvenska = "Måndag";
  break;
  case 2:
    dayPåSvenska = "Tisdag";
  break;
  case 3:
    dayPåSvenska = "Onsdag";
  break;
  case 4:
    dayPåSvenska = "Torsdag";
  break;
  case 5:
    dayPåSvenska = "Fredag";
  break;
  case 6:
    dayPåSvenska = "Lördag";
  break;
  case 7:
    dayPåSvenska = "Söndag";
  break;
  default:
   
  
}


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
      currentTime = `${hour}:${minute}:${seconds}`;
      time.innerHTML= `${hour}:${minute}:${seconds}`;
      playAudio(currentTime);
      

  },1000)
})
startAudio();
function startAudio(){
  audioMusic.currentTime = 24;
  audioMusic.play();
  setTimeout(()=>{
    audioMusic.pause();
    audioMusic.currentTime = 0;
  },43000)
}
function pieTimer(seconds){
  
  secondsToMilliseconds = seconds + 30 * 1000; //add 30 seconds to the milliseconds
  displayPie.style.display = "grid";
  PieTimer.style.animation = `timer ${seconds}s forwards linear`;
  setTimeout(()=>{
    displayPie.style.display="none";
  },secondsToMilliseconds)
}



function playAudio(time){
 
  if(dayPåSvenska == "Måndag" || dayPåSvenska == "Onsdag" || dayPåSvenska == "Torsdag"){
    if(time == "14:00:00"){
      pieTimer(300);
    }
    if(time == "14:04:30"){
      startAudio();
    }
 
  }
  if(dayPåSvenska == "Måndag"){
    if(time == "10:45:00"){
      pieTimer(900);
    }
    if(time == "10:59:30"){
      startAudio();
    }
  }
   
  if(dayPåSvenska == "Onsdag"){
   
    if(time =="10:20:00"){
      pieTimer(1200);
    }
    if(time =="10:39:30"){
      startAudio();
    }
    
  }
  
  if( dayPåSvenska =="Tisdag" || dayPåSvenska == "Torsdag" || dayPåSvenska == "Fredag" ){
    if(time == "10:30:00" || time == "8:45:00"){
      pieTimer(900);
    }
    if(time == "10:44:30" || time == "8:59:30"){
      startAudio();
    }
  }
  
  if(time == "12:49:30"){
    startAudio();
  }
 
  if(time === "11:55:00"){
    pieTimer(3300);
  }
  if(time == "8:59:30"){
    startAudio();
  }
 
  if(time === "8:40:00"){
    pieTimer(1200);
  }
  
}


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
  "firstName": "Lotta",
  "familyName":"Paulsen",
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
  "present": false,
  "måndag": false,
  "tisdag": false,
  "onsdag": false, 
  "torsdag": false,
  "fredag": false
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
  "måndag": true,
  "tisdag":true,
  "onsdag":false, 
  "torsdag":false,
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
  "tisdag":true,
  "onsdag":true, 
  "torsdag":true,
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
  "firstName": "Karin",
  "familyName":"Augustsson",
  "photo": "",
  "present": true,
  "måndag": false,
  "tisdag":false,
  "onsdag":true, 
  "torsdag":true,
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
  "firstName": "Peter",
  "familyName":"Kosenvoima",
  "photo": "",
  "present": true,
  "måndag": true,
  "tisdag":true,
  "onsdag":true, 
  "torsdag":true,
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
},
{
  "firstName": "Ersika",
  "familyName":"Simba",
  "photo": "",
  "present": true,
  "måndag": true,
  "tisdag":true,
  "onsdag":true, 
  "torsdag":true,
  "fredag":true
},
{
  "firstName": "Julieta",
  "familyName":"Cederlöf",
  "photo": "",
  "present": true,
  "måndag": true,
  "tisdag":true,
  "onsdag":false, 
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
                        if(frånvaroList){
                         frånvaroList.push({"firstName":person.firstName, "familyName":person.familyName});
                         document.getElementById("frånvaroList").innerHTML = ``;
                         console.log(frånvaroList);
                        }
                         
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
    frånvaroDisplay.innerHTML = "";
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
let lunchDisplayVeg = document.getElementById("lunchDisplayVeg");
let lunch = "";

function lunchEmpty(){
  if(lunchList.innerHTML == ""){
    alert("missing lunch");
    setTimeout(()=>{
      backToSetting();
    }, 100)
  }
}



if(lunchButton){
 // Add event listener to the button
 lunchButton.addEventListener("click", function() {
  // Get the value from the input field
  let lunch = `Inte vegetariskt: ${lunchInput.value}<br>Vegetariskt: ${lunchInputVeg.value}`; 
if(lunchInput.length > 20 || lunchInputVeg.length > 20){
  lunchDisplay.style.fontSize = "6vh";
}
  // Check if the input is not empty
  if (lunch !== "") {
    let veg = lunchInputVeg.value;
    let huvud = lunchInput.value

      if(huvud.length > 25 && veg.length <=25){
        console.log(1);
        lunchList.innerHTML = `${lunch}`;
        const split1 = lunchInput.value.split(" ");
        const firstPart = split1.slice(0,4).join(" ");
        const secondPart = split1.slice(4).join(" ");
        lunchDisplay.innerHTML += `Huvudrätt:<br>${firstPart}<br>${secondPart}`;
        lunchDisplayVeg.innerHTML = `Huvudrätt:<br>${lunchInputVeg.value}`;
      }
      if(huvud.length > 25 && veg.length >25){
        console.log(2);
        lunchList.innerHTML = `${lunch}`;
        const split1 = lunchInput.value.split(" ");
        const firstPart = split1.slice(0,4).join(" ");
        const secondPart = split1.slice(4).join(" ");
        const split1Veg = lunchInputVeg.value.split(" ");
        const firstPartVeg = split1Veg.slice(0,4).join(" ");
        const secondPartVeg = split1Veg.slice(4).join(" ");
        lunchDisplay.innerHTML += `Huvudrätt:<br>${firstPart}<br>${secondPart}`;
        lunchDisplayVeg.innerHTML = `Vegetarisk:<br>${firstPartVeg}<br>${secondPartVeg}`;
      }


      if(veg.length >25 && huvud.length <=25){
        console.log(3);
        lunchList.innerHTML = `${lunch}`;
        const split2 = lunchInput.value.split(" ");
        const firstPart = split2.slice(0,4).join(" ");
        const secondPart = split2.slice(4).join(" ");
        lunchDisplay.innerHTML = `Huvudrätt:<br>${lunchInput.value}`;
        lunchDisplayVeg.innerHTML += `Vegetarisk:<br>${firstPart}<br>${secondPart}`;
      }
      if(veg.length <=25 && huvud.length <=25){
        console.log(4);
        lunchList.innerHTML = `${lunch}`;
        lunchDisplay.innerHTML = `Huvudrätt:<br>${lunchInput.value}`;
        lunchDisplayVeg.innerHTML = `Vegetarisk:<br> ${lunchInputVeg.value}`;
      }
     
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

  function backToSetting(){
  clearInterval(displayTimer);
  boxes.forEach(box=>{
    box.style.display = "none";
  })
  settingDisplay.style.display = "flex";
}

backToSettings.addEventListener("click", backToSetting);

let timeoutId;

//show the back button when hovering the page
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
      }, 3000);
    }
  });


const activitiesObj = [
  {måndag:[
    {personal: "Roni Ali", activity: "Pingis"},
    {personal: "Donovan Payan", activity: "Pokemon Go"},
    {personal: "Ersika Simba", activity: "Switch"},
    {personal: "Yvonne Grahn", activity: "Hundpromenad"},
    {personal: "Lotta Paulsen", activity: "Rita"}
  ]},
  {tisdag:[
    {personal: "Seidi Can", activity: "Spel"},
    {personal: "Donovan Payan", activity: "Rita"},
    {personal: "Yvonne Grahn", activity: "Hundpromenad"},
    {personal: "Ersika Simba", activity: "Pico Park"},
  ]},
  {onsdag:[
    {personal: "Mattias Petersson", activity: "Pingis"},
    {personal: "Donovan Payan", activity: "Among Us"},
    {personal: "Lisa Norming", activity: "Promenad"},
    {personal: "Karin Augutsson", activity: "Spel"},
    {personal: "Yvonne Grahn", activity: "Hundpromenad"},
  ]},
  {torsdag:[
    {personal: "Julieta Cederlöf", activity: "Pingis"},
    {personal: "Donovan Payan", activity: "Fotboll"},
    {personal: "Sandra Hiredal", activity: "Slöjd"},
    {personal: "Ersika Simba", activity: "Switch"},
    {personal: "Lotta Paulsen", activity: "Spel"}
  ]},
  {fredag:[
    {personal: "Viktor Elander", activity: "Quiz"},
    {personal: "Ersika Simba", activity: "Switch"},
    {personal: "Julieta Cederlöf", activity: "Spel"},
    {personal: "Lisa Norming", activity: "Promenad"},
  ]},
];

const personalOptions = [
  "Roni Ali",
  "Seidi Can",
  "Julieta Cederlöf",
  "Melina Do.Rosario",
  "Monia Dgachi",
  "Viktor Elander",
  "Sandra Hiredal",
  "Olof Lövdén",
  "Ersika Simba",
  "Peter Kosenvoima",
  "Joel Strandberg",
  "Lisa Norming",
  "Mattias Petersson",
  "Lisa Tradefelt",
  "Yvonne Grahn",
  "Donovan Payan",
  "Lotta Paulsen",
  "Karin Augutsson"];



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
  "Innebandy",
  "Mario Kart 8 Deluxe",
  "Super Mario Party",
  "Mario Party Superstars",
  "Super Mario Bros. Wonder",
  "Super Smash Bros. Ultimate",
  "Overcooked",
  "Plate Up",
  "Moving Out 2",
  "Tricky Towers",
  "Pocket Mini Golf",
  "Gang Beasts",
  "Stick Fight The Game",
  "Ring Fit Aventure",
  "Bread & Fred",
  "Biped",
  "Keep Talking And Nobody Explodes",
  "Mario Party 10",
  "Sweet Day",
  "Mario Chase",
  "Luigi's Ghost Mansion",
  "Battle Quest",
  "Wii Party U",
  "Wii Party",
  "Wii Sports Resort",
  "Super Mario 3D World",
  "Mario and Sonic at the London Olympic Games",
  "Metroid Blast",
  "Pummel Party",
  "Move or Die Unleashed",
  "Boomerang Fu",
  "Runbow",
  "Pico Park",
  "Pokemon Go",
  "Among Us"
];
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
  {innebandy: "innebandy.png"},
  {switch: "switch.png"},
  {supermariobroswonder: "supermariobroswonder.gif"},
  {supermarioparty: "supermarioparty.gif"},
  {mariopartysuperstars:"mariopartysuperstars.gif"},
  {supersmashbrosultimate:"supersmashbrosultimate.gif"},
  {overcooked:"overcooked.gif"},
  {plateup:"plateup.gif"},
  {movingout2:"movingout2.gif"},
  {trickytowers:"trickytower.gif"},
  {pocketminigolf:"pocketminigolf.avif"},
  {stickfightthegame:"stickfightthegame.gif"},
  {ringfitadventure:"ringfitadventure.gif"},
  {breadfred:"breadfred.gif"},
  {biped:"biped.gif"},
  {keeptalkingandnobodyexplodes:"keeptalkingandnobodyexplodes.gif"},
  {marioparty10:"marioparty10.gif"},
  {sweetday:"sweetday.jpg"},
  {mariochase:"mariochase.gif"},
  {luigisghostmansion:"luigisghostmansion.gif"},
  {battlequest:"battlequest.gif"},
  {wiipartyu:"wiipartyu.gif"},
  {wiiparty:"wiiparty.gif"},
  {wiisportsresort:"wiisportresorst.gif"},
  {supermario3dworld:"supermario3dworld.gif"},
  {marioandsonicathelondonolympicgames:"marioandsonic.gif"},
  {metroidblast:"metroidblast.gif"},
  {gangbeasts: "gangbeast.gif"},
  {mariokart8deluxe: "mariokart.gif"},
  {pummelparty:"pummelparty.gif"},
  {moveordieunleashed:"moveordie.jpeg"},
  {boomerangfu:"boomerangfu.gif"},
  {runbow:"runbow.jpg"},
  {picopark: "picopark.gif"},
  {pokemongo: "pokemongo.gif"},
  {amongus: "amongus.gif"}

];

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
  let activityCleaned = activity.replace(/[ .'&]/g, '');
  const imageObj = img.find(image => image[activityCleaned.toLowerCase()]);
  console.log(imageObj);
  return imageObj  ? imageObj [activityCleaned.toLowerCase()] : null;
}

function ActivitiesDisplay(){
 
  p = document.getElementById("box_activity");
  p.innerHTML ="";
  if(activitiesOfTheDay.length != 0){
    let i = 0;
    activitiesOfTheDay.forEach(person =>{
      newDiv = document.createElement("div");
      newDiv.setAttribute("class", "box");
      i++;
      let img = getImageForActivity(person.activity.toLowerCase());
      console.log(img);
      newDiv.innerHTML += 
      `<h2>Aktivitet ${i}</h2>
      <div class="activity_name" id="activityToLong${i}">${person.activity}</div>
      <img class="img_activity" src="./asset/activity_img/${img}"/>
      <div class="personalName">med ${person.personal}</div>`
      p.appendChild(newDiv);
      if(person.activity.length > 15){
        document.getElementById(`activityToLong${i}`).style.fontSize = "6vh";
      }
    })

  }else{

  }
}


//end of the pause

buttonStart.addEventListener("click", ()=>{
 
 
  settingDisplay.style.display = "none";
  lunchEmpty();
  getFrånvaro();
  ActivitiesDisplay();
  goFullscreen();
  requestWakeLock();
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
  }, 6000); 

  // Initially show the first box
  showBox(currentIndex);
}); 


function goFullscreen() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) { // Firefox
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, Opera
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
    document.documentElement.msRequestFullscreen();
  }
}

// Variable to store the wake lock instance
let wakeLock = null;

// Function to request a wake lock
async function requestWakeLock() {
  try {
    wakeLock = await navigator.wakeLock.request('screen');
    console.log('Wake Lock is active');
  } catch (err) {
    console.error(`${err.name}, ${err.message}`);
  }
}