let isHappyTicket = (ticketNumber) => {

    if ((ticketNumber.length) % 2 === 0) {

        let halfLength = ticketNumber.length / 2;

        let strings = Array.from(ticketNumber);
        let numbers = strings.map(Number);

        let firstPartNumber = numbers.slice(0, halfLength);
        let secondPartNumber = numbers.slice(halfLength, ticketNumber.length);


        let firstPartSum = firstPartNumber.reduce(
            (accumulator, currentValue) => accumulator + currentValue, 0);

        let secondPartSum = secondPartNumber.reduce(
            (accumulator, currentValue) => accumulator + currentValue, 0);

        console.log(firstPartSum === secondPartSum);

        return (firstPartSum === secondPartSum);

    } else { console.log('Введите четное число') };

};

isHappyTicket('120102'); // true
