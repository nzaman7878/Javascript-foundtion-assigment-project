/* 1.Password Validator
Write a JavaScript program that checks if the entered password matches the confirmed password. If the 
passwords match, the program should log "Password Matched. Password validation Successful." to the console. 
Otherwise, it should log "Password didn't match. Password validation unsuccessful" to the console. */

function validatePasswords() {
        const password = document.getElementById("password").value;
        const confirmedPassword = document.getElementById("confirm-password").value;
        
        if (password === confirmedPassword) {
          document.getElementById("message").innerHTML = "<p class='success'>Password matched. Password validation successful.</p>";
          return true;
        } else {
          document.getElementById("message").innerHTML = "<p class='error'>Password didn't match. Password validation unsuccessful.</p>";
          return false;
        }
      }