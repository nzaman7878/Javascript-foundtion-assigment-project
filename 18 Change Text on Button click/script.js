/* 18.Change Text on Button click.
Create a simple HTML page with a heading and a button. The initial text must be "The most affordable learning 
platform", use JavaScript to change the heading text to "PW Skills" when the button is clicked. The button must 
toggle the text of a heading between "The most affordable learning platform" and "PW Skills" on each click. */




const heading = document.getElementById("heading");
    const toggleBtn = document.getElementById("toggleBtn");

    toggleBtn.addEventListener("click", function() {
      if (heading.textContent === "The most affordable learning platform") {
        heading.textContent = "PW Skills";
      } else {
        heading.textContent = "The most affordable learning platform";
      }
    });