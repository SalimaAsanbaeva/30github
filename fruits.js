/*Task 1. Определить сколько раз каждый элемент встречается в массиве */

const fruits = ["kiwi", "apple", "kiwi", "orange", "kiwi", "apple"]; //  there is an initial array

const countItems = (list) => {
  const count = {};

  list.forEach((f) => {
    if (!count[f]) {
      //The current element is absent in the count object. (Текущий элемент отсутствует в объекте count)
      count[f] = 1;
    } else {
      //The current element was previously added to the count object. (Текущий элемент ранее был добавлен в объект count)
      count[f]++;
    }
  });

  return count;
};

const countResult = countItems(fruits);

console.log(countResult);
