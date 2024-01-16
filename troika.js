// Напишите метод, который удаляет из коллекции все тройки, 
// для всех нечётных чисел, вызывает метод с побочным эффектом (пусть это будет печать в консоль),
// удаляет все семёрки, умножает всё на 2 и возвращает коллекцию-результат.



const array = [1,2,3,4,3,7]; //[2,4,8]

class Troika {

  constructor(collection) {
  this.collection = collection;
  }

  init() {
    this.collection.forEach((el) => { if (el % 2 === 0) console.log(el) })

    let newCollection = this.collection.filter((el) => el !== 7 && el !== 3).map((el) => el * 2);

    console.log(newCollection)
  }

}

let test = new Troika(array);
test.init();