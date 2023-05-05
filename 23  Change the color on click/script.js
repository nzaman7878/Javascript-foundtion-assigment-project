/* 23. Change the color on click
Create a button that utilizes an array of colors and the Math.random method to change the background color 
of the page upon clicking. */

// Define an array of colors
const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff", "#ff00ff"];

// Get the button
const colorButton = document.getElementById("color-button");

// Add event listener to the button to change the background color upon clicking
colorButton.addEventListener("click", function() {
  // Generate a random index to select a color from the array
  const randomIndex = Math.floor(Math.random() * colors.length);
  // Set the background color of the page to the selected color
  document.body.style.backgroundColor = colors[randomIndex];
});
