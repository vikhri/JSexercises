let reverseInt = (number) => {
  
  // Приводим исходное число к абсолютному значению
    let absnumber = Math.abs(number)
  
  // Число --> Строка --> Массив --> Переворот массива --> Строка --> Число
  let originString = String(absnumber);
  let originArray = Array.from(originString);
  let reverseArray = originArray.reverse();
  let reverseString = reverseArray.join('');
  let reverseNumber = Number(reverseString);

  // Проверяем знак исходного числа. Если минус - умножаем на -1;
  if (number < 0) { reverseNumber = -1 * reverseNumber};

  console.log(`Было: ${number}, стало: ${reverseNumber}`);

};

// console.assert(reverseInt(123) === 321);
// console.assert(reverseInt(-123) === -321);
// console.assert(reverseInt(111) === 111);
// console.assert(reverseInt(0) === 0);

reverseInt(-12345);
