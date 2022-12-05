const txt = document.querySelector(".msg");
const item = document.querySelector(".item");
const title = document.querySelector(".title");
const network = document.querySelector(".network");
function handleNetworkChange() {
  navigator.onLine
    ? (network.src = "./connection.jpg")
    : (network.src = "./no-internet-connection.jpg");
    navigator.onLine
    ? (network.alt = "Connected")
    : (network.alt = "No internet connection");
  navigator.onLine
    ? (item.href = "./ahammedSaad_profile_pic.jpg")
    : (item.href = "./favicon.ico");
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
