const myNumbers = [3, 5, -4, 8, 11, 1, -1, 6];
const sum = 4;

const findParis = (nums, target) => {
  // основной цикл
  for (let i = 0; i < nums.length; i++) {
    const numFirst = nums[i];
    // вложенный цикл
    for (let j = i + 1; j < nums.length; j++) {
      const numSecond = nums[j];
      // условие
      if (numFirst + numSecond === target) {
        // условие выполняется
        return [numFirst, numSecond];
      }
    }
  }
  //условие не выполняется
  return [];
};
const result = findParis(myNumbers, sum);
console.log(result);
