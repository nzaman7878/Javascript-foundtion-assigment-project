/* 2. Calculator
Create a javascript program that takes in two numbers and a string operator. Make use of a switch statement 
to perform the operation on the two numbers.
The calculator function should:
• Take in two numbers, numl and num2, and a string representing a mathematical operator, operator.
• Use a switch statement to determine which operation to perform based on the value of the operator.
• If the operator is one of the four valid operators (+,     *, /), perform the corresponding mathematical 
operation and store the result in a variable called result.
• If the operator is not one of the valid operators, log "Invalid operator" to the console. */

let result = document.getElementById("result");

function appendValue(value) {
  result.value += value;
}

function clearResult() {
  result.value = "";
}

function calculate() {
  let expression = result.value;

  if (expression === "") {
    return;
  }

  try {
    result.value = eval(expression);
  } catch (error) {
    alert("Invalid Expression");
    result.value = "";
  }
}
