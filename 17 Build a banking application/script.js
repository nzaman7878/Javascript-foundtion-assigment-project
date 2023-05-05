/* 17.Build a banking application
A banking application needs to manage customer accounts and transactions. The user detail is stored in an 
object with a keys name and balance. Write functions using object methods to update a customer's account 
balance based on a deposit or withdrawal */

// Customer object with name and balance properties
const customer = {
  name: "John",
  balance: 10000
};

// Function to deposit an amount into the customer's account
function deposit(amount) {
  this.balance += amount;
  console.log(`Deposit of ${amount} successful. New balance is ${this.balance}.`);
}

// Function to withdraw an amount from the customer's account
function withdraw(amount) {
  if (amount > this.balance) {
    console.log(`Insufficient funds. Current balance is ${this.balance}.`);
  } else {
    this.balance -= amount;
    console.log(`Withdrawal of ${amount} successful. New balance is ${this.balance}.`);
  }
}

// Example usage of the deposit and withdraw functions
deposit.call(customer, 5000);
withdraw.call(customer, 2000);
