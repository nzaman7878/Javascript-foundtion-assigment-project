/* 22. Progress Bar
Create a progress bar that fills up as the user scrolls down the page */

// Get the progress bar
const progressBar = document.getElementById("progress-bar");

// Calculate the total height of the page
const totalHeight = document.body.scrollHeight - window.innerHeight;

// Add event listener to the window to update the progress bar as the user scrolls
window.addEventListener("scroll", function() {
  // Calculate the percentage of the page that the user has scrolled through
  const progress = (window.pageYOffset / totalHeight) * 100;
  // Update the width of the progress bar
  progressBar.style.width = progress + "%";
});
