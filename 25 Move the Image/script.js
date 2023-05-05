/* 25. Move the Image
The objective is to write a JavaScript program that enables an image to move according to the direction 
specified by the arrow keys. The program must be able to recognize and respond to the input from the arrow 
keys, and accordingly, update the position of the image on the screen. The program should be able to handle 
the movement of the image in all directions, including up, down, left, and right, in a smooth and responsive 
manner. Have a look at the event key codes before starting the project. */

const image = document.getElementById("image");

let xPosition = 0;
let yPosition = 0;

document.addEventListener("keydown", (event) => {
  const key = event.key;
  switch (key) {
    case "ArrowUp":
      yPosition -= 10;
      break;
    case "ArrowDown":
      yPosition += 10;
      break;
    case "ArrowLeft":
      xPosition -= 10;
      break;
    case "ArrowRight":
      xPosition += 10;
      break;
  }
  image.style.transform = `translate(${xPosition}px, ${yPosition}px)`;
  event.preventDefault();
});
