let isHappyTicket = (ticketNumber) => {

let halfLength = ticketNumber.length / 2;

let strings = Array.from(ticketNumber);
let numbers = strings.map(Number);

let firstPartNumber = numbers.slice(0, halfLength);
let secondPartNumber = numbers.slice(halfLength, ticketNumber.length);


let firstPartSum = firstPartNumber.reduce(
  (accumulator, currentValue) => accumulator + currentValue, 0);
 
let secondPartSum = secondPartNumber.reduce(
  (accumulator, currentValue) => accumulator + currentValue, 0);

  
return (firstPartSum === secondPartSum);

};

isHappyTicket('123123'); // true
isHappyTicket('123023'); // false
