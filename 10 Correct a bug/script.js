/* 10.Correct a bug
You are working on an e-commerce website where customers can add items to their cart. The cart stores the 
quantity of each item that the customer wants to purchase in an array of numbers. However, the website is 
currently experiencing a bug where the quantity of each item is being recorded incorrectly by reducing it to 
half. As a result, you need to write a JavaScript function that can double the quantity of each item in the cart 
array to correct the bug. */

let cart = [2, 4, 6, 8]; // Example cart array with incorrect quantities
      
      function fixCartBug(cart) {
        for (let i = 0; i < cart.length; i++) {
          cart[i] *= 2; // Double the quantity of each item
        }
      }
      
      fixCartBug(cart); // Call the function to fix the cart bug
      
      console.log(cart); // Output the fixed cart array to the console