let numbers = (begin, end) => {
  for (let i = begin; i <= end; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log("делится на 3");
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log("делится на 5");
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log("делится на 3 и 5");
    } else {
      console.log(i);
    }
  }
};

numbers(11, 20);
