// Function to update the content of the div
function updateDiv() {
  const divElement = document.getElementById('myDiv');
  // Update the content of the div with a new value (e.g., a timestamp)
  divElement.textContent = new Date().toLocaleTimeString();
}

// Set up an interval to call the updateDiv function every 10ms
setInterval(updateDiv, 10);
