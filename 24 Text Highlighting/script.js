/* 24. Text Highlighting
Using the Document Object Model (DOM), highlight all words in a paragraph element that are greater than 8 
characters. The highlighted words should be with a yellow background color.*/

// Get the paragraph element
const textElement = document.getElementById("text");

// Split the text into an array of words
const words = textElement.innerText.split(" ");

// Loop through the array of words and highlight the ones greater than 8 characters
for (let i = 0; i < words.length; i++) {
  if (words[i].length > 8) {
    words[i] = "<span class='highlight'>" + words[i] + "</span>";
  }
}

// Join the array of words back into a string and update the innerHTML of the paragraph element
textElement.innerHTML = words.join(" ");
