/* 3. Color Mixer
Write a JavaScript program that takes in two strings representing colors and uses a switch statement to 
determine the resulting color when the two colors are mixed. The program should print the resulting color 
based on the following criteria:
• If colorl is "red" and color2 is "blue" or vice versa, print "purple".
• If colorl is "red" and color2 is "yellow" or vice versa, print "orange".
• If colorl is "blue" and 'color2" is "yellow" or vice versa, print "green".
• If any other combination of colors is input, the program should print "Invalid color combination". */

function mixColors() {
  const color1 = document.getElementById("color1").value.toLowerCase();
  const color2 = document.getElementById("color2").value.toLowerCase();
  let mixedColor;
  
  switch(color1) {
    case "red":
      switch(color2) {
        case "blue":
          mixedColor = "purple";
          break;
        case "yellow":
          mixedColor = "orange";
          break;
        default:
          mixedColor = "Invalid color combination";
          break;
      }
      break;
    case "blue":
      switch(color2) {
        case "red":
          mixedColor = "purple";
          break;
        case "yellow":
          mixedColor = "green";
          break;
        default:
          mixedColor = "Invalid color combination";
          break;
      }
      break;
    case "yellow":
      switch(color2) {
        case "red":
          mixedColor = "orange";
          break;
        case "blue":
          mixedColor = "green";
          break;
        default:
          mixedColor = "Invalid color combination";
          break;
      }
      break;
    default:
      mixedColor = "Invalid color combination";
      break;
  }
  
  const colorMixedDiv = document.getElementById("color-mixed");
  colorMixedDiv.style.backgroundColor = mixedColor;
}
