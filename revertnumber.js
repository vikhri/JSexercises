let origin = -123;

let reverseInt = (number) => {
  // Приводим исходное число к абсолютному значению
  let absnumber = Math.abs(number)

  // Переводим число в строку
  let stringFromNumber = absnumber.toString();

  // Делаем из стоки массив символов
  let array = Array.from(stringFromNumber);
 
  // Создаем пустой массив и записываем в него символы с последнего до первого из первого массива
  let reverseArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reverseArray.push(array[i]);    
  }
  
  // Из массива собираем строку без пробелов
  let stringFromArray = reverseArray.join('');
  
  // Преобразуем строку в число
  let reverseNumber = parseInt(stringFromArray)
    
  // Проверяем знак исходного числа. Если минус - умножаем на -1;
  if (number < 0) { reverseNumber = -1 * reverseNumber};

  return reverseNumber;
};

console.log(`Было: ${origin}, стало: ${reverseInt(origin)}`);

console.assert(reverseInt(123) === 321);
console.assert(reverseInt(-123) === -321);
console.assert(reverseInt(111) === 111);
console.assert(reverseInt(0) === 0);
