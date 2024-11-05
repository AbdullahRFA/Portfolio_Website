function updateGreeting() {
    const greetingElement = document.getElementById("greeting");
    const currentHour = new Date().getHours();
    let greetingMessage;
  
    if (currentHour >= 5 && currentHour < 12) {
      greetingMessage = "Good morning!";
    } else if (currentHour >= 12 && currentHour < 18) {
      greetingMessage = "Good afternoon!";
    } else {
      greetingMessage = "Good evening!";
    }
  
    greetingElement.innerText = greetingMessage;
  }
  
  // Call the function to set the initial greeting
  updateGreeting();
  
  // Optional: Update greeting every hour (if the user keeps the page open)
  setInterval(updateGreeting, 3600000); // 3600000ms = 1 hour