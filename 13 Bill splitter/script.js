/* 13.Bill splitter
A restaurant wants to calculate the total bill for a table based on the cost of each dish and the number of 
people sharing it. They require a function that takes in the cost of each dish and the number of people sharing 
it and returns an object that contains the total bill and the bill to be paid by each person in the group. */

const calculateBill = (costPerDish, numPeople) => {
  const totalBill = costPerDish * numPeople;
  const billPerPerson = totalBill / numPeople;
  return { totalBill, billPerPerson };
};
const bill = calculateBill(25, 5);
console.log(bill); 
