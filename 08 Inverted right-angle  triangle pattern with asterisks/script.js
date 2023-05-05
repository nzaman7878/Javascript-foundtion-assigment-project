/* 8.  Inverted right-angled triangle pattern with asterisks
Write a program that takes an integer input i and prints an inverted right-angled triangle pattern of asterisks 
with i rows.
Inverted right-angled pattern:
If i=6
*/

function printInvertedRightTriangle(i) {
  let output = "";
  for (let row = i; row > 0; row--) {
    for (let col = 0; col < row; col++) {
      output += "*";
    }
    output += "\n";
  }
  console.log(output);
}


printInvertedRightTriangle(6);
