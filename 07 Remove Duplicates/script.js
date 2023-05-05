/* 7.  Remove Duplicates
In an online shopping application, customers can add multiple items to their cart. However, sometimes 
customers accidentally add the same item more than once, resulting in duplicate items in their cart. The 
duplicate items not only make it difficult for the customer to track the items they want to purchase but also 
affect the accuracy of the purchase order o solve this problem, the application needs to remove duplicate items from the customer's cart. The program 
should take the customer's cart with duplicates as input, and return a new cart without duplicates.
Write a program to solve the problem of duplicate items in the cart by removing duplicates. */

const cartItems = new Set(); // Using a Set to store unique items

      function addItem() {
        const itemInput = document.getElementById("item");
        const item = itemInput.value.trim(); // Removing leading/trailing white space
        if (item) { // Only add non-empty items to the cart
          cartItems.add(item);
          const cartList = document.getElementById("cart");
          cartList.innerHTML = ""; // Clearing the previous list of cart items
          for (const cartItem of cartItems) {
            const listItem = document.createElement("li");
            listItem.textContent = cartItem;
            cartList.appendChild(listItem);
          }
        }
        itemInput.value = ""; // Clearing the input field
      }