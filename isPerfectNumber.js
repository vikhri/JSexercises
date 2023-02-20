let sumDividers = (number) => {
  
  let i = 1;
  let sum = 0;

  while (i <= number / 2) {
      
    if (number % i === 0) {
      sum += i;     
    } 
    i++;
  };
  
  return sum;
 };


 let isPerfect = (candidate) => {

  (candidate === sumDividers(candidate)) ?
  console.log(`${candidate} is perfect`) :
  console.log(`${candidate} is not perfect`);
  
 };

 isPerfect(12); // is not perfect
 isPerfect(6); // is perfect
 isPerfect(28); // is perfect
 isPerfect(9) // is not perfect
