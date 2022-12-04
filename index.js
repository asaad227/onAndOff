const txt = document.querySelector(".msg");

window.addEventListener('load', () => {
    const handleNetworkChange = () => {
     navigator.onLine? txt.innerHTML = "You're connected 🔗": txt.innerHTML= "You're offline 😢" ;
     navigator.onLine? txt.className = "msgreen": txt.className = "msred";  
    }
    window.addEventListener('online', handleNetworkChange);
    window.addEventListener('offline', handleNetworkChange);
  });