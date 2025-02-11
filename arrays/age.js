const students = [
  { name: "alex", age: 20 },
  { name: "mike", age: 24 },
  { name: "masha", age: 20 },
  { name: "stas", age: 18 },
];

const grouped = {};

students.forEach((s) => {
  if (!grouped[s.age]) {
    //Ключ с возрастом отсутствует
    grouped[s.age] = [s];
  } else {
    grouped[s.age].push(s);
  }
});
console.log(grouped);
// {
//   '18': [ { name: 'stas', age: 18 } ],
//   '20': [ { name: 'alex', age: 20 }, { name: 'masha', age: 20 } ],
//   '24': [ { name: 'mike', age: 24 } ]
// }
