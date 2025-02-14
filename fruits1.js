const fruits = ["kiwi", "apple", "kiwi", "orange", "kiwi", "apple"];

/*1. We use the Set constructor */
const fruitsUnique1 = new Set(fruits);
//Set(3) { 'kiwi', 'apple', 'orange' }

const fruitsUnique = Array.from(new Set(fruits));
//[ 'kiwi', 'apple', 'orange' ]

console.log(fruitsUnique);

/*2. Use an empty object and a forEach loop */
const myFruits = ["kiwi", "apple", "kiwi", "orange", "kiwi", "apple"];

const unique = {};

myFruits.forEach((item) => {
  unique[item] = true;
});

// console.log(unique);
//  Object { kiwi: true, apple: true, orange: true }

// Чтобы получить массив из ключей объекта можно использовать метод Object.keys():
const uniqueArray = Object.keys(unique); // Получаем массив из уникальных ключей
console.log(uniqueArray);
// Array(3) [ "kiwi", "apple", "orange" ];

const uniqueItems = (list) => {
  const unique = {};

  list.forEach((item) => {
    unique[item] = true;
  });

  return Object.keys(unique);
};

const fruitsUnique2 = uniqueItems(fruits);
console.log(fruitsUnique2);
