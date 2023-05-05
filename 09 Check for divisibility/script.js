/* 9. Check for divisibility.
Write a program that takes an array of numbers and prints all the numbers that are divisible by 3, but not by 2. 
Use a for loop and continue statement. */


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Change this array to test with different numbers
      
      for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        
        if (number % 2 === 0) {
          continue; // Skip numbers that are divisible by 2
        }
        
        if (number % 3 === 0) {
          console.log(number); // Print numbers that are divisible by 3
        }
      }