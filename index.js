const txt = document.querySelector(".msg");

function handleNetworkChange() {
  navigator.onLine
    ? (txt.innerHTML = "You're connected 🔗")
    : (txt.innerHTML = "You're offline 😢");
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
