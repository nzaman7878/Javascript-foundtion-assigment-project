/* 20. Dynamically Adding List Items to an Ordered List
Visit https://pwskills.com/course/Full-Stack-web-development page and look for "What you II learn" section. 
The section consists of a list of information on what you will be learning in the course. You are required to write 
a JavaScript program that stores a pre-existing array of list items. On each button click, the program should 
add a new list item in sequential order. The program should verify if any remaining items are available in the list 
item array and add the next item to the list accordingly. If no items are left, the function should display a 
message indicating that all items have been added. */

const items = [
  'HTML/CSS',
  'JavaScript',
  'React',
  'Node.js',
  'Databases',
  'APIs',
];

const list = document.getElementById('list');
const addBtn = document.getElementById('add-btn');

let index = 0;

addBtn.addEventListener('click', () => {
  if (index < items.length) {
    const li = document.createElement('li');
    li.textContent = items[index];
    list.appendChild(li);
    index++;
  } else {
    alert('All items have been added!');
  }
});
