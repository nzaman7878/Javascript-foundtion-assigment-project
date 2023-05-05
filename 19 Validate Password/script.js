/* 19.Validate Password
You are building a login form for a website and need to validate user input using JavaScript. The form has two 
input fields: email and password, and a submit button.
Your task is to implement JavaScript code that validates the email and password input fields. The email field 
should contain the symbol. The password field should have a minimum length of 8 characters. If either of 
these conditions is not met, an error message "Invalid email or password!" should be displayed in red color as a 
paragraph text below the form. If the password is valid the message "Valid email and password!" must be 
displayed in green color as a paragraph text below the form.
Your code should run when the user clicks the submit button and should prevent the form from submitting if 
the input is invalid. The input type of email must be text and the input type of password must be password 
without any minLength attribute specified. */



const form = document.querySelector('form');
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    const message = document.querySelector('#message');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting

      const email = emailInput.value;
      const password = passwordInput.value;

      // Check if email contains @ symbol and password is at least 8 characters long
      if (email.indexOf('@') === -1 || password.length < 8) {
        message.textContent = 'Invalid email or password!';
        message.style.color = 'red';
      } else {
        message.textContent = 'Valid email and password!';
        message.style.color = 'green';
      }
    });