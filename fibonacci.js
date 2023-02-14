//  Функция вычисляет положительные числа Фибоначчи. Аргументом является порядковый номер числа, нумерация чисел в последовательности начинается с нуля.

let fibNumbers = (position) => {
  let sequence = [0, 1];

  for (let i = 2; i < position; i++) {
    sequence.push(sequence[i - 2] + sequence[i - 1]);
  }
  return sequence;
};

console.log(fibNumbers(15));
