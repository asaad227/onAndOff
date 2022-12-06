const txt = document.querySelector(".msg");
const item = document.querySelector(".item");
const title = document.querySelector(".title");
const network = document.querySelector(".network");
function handleNetworkChange() {
  navigator.onLine
    ? (network.src = "./Assets/connection.jpg")
    : (network.src = "./Assets/noConnection.jpg");
    navigator.onLine
    ? (network.alt = "Connected")
    : (network.alt = "No internet connection");
  navigator.onLine
    ? (item.href = "./Assets/ahammedSaad_profile_pic.jpg")
    : (item.href = "./Assets/favicon.ico");
  navigator.onLine ? (title.innerHTML = "🔗") : (title.innerHTML = "😞");
  navigator.onLine
    ? (txt.innerHTML = "You're connected 🔗")
    : (txt.innerHTML = "You're offline 😞");
  //passing the txt according to user selction
  navigator.onLine ? (txt.className = "msgreen") : (txt.className = "msred");
  //swaping the class according to user selection
}

window.addEventListener("load", () => {
  handleNetworkChange();
  //default function which will show last change
  window.addEventListener("online", handleNetworkChange);
  window.addEventListener("offline", handleNetworkChange);
  //this will listen according to user selection
});

function showTime(){
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds()
  var session = "AM";

  if(h === 0){
    h = 12
  }

  if(h > 12){
    h = h - 12
    session = "PM"
  }

  h = (h < 10)? "0" + h : h;
  m = (m < 10)? "0" + m : m;
  s = (s < 10)? "0" + s : s;

  var time = `${h}:${m}:${s} ${session}`;
  
 document.querySelector("#MyClockDisplay").innerHTML = `${time}`;
//  document.querySelector("#MyClockDisplay").textContent = `${time}`;


 setTimeout(showTime, 1000)
}

showTime();