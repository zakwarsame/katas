// ## Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2004 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const nineteen = people.some((person) => {
  return person.year <= new Date().getFullYear() - 19;
});
console.log({ nineteen });
// Array.prototype.every() // is everyone 19 or older?
const everyNineteen = people.every((person) => {
  return person.year <= new Date().getFullYear() - 19;
}); // is everyone 19 or older?
console.log("is everyone nineteen or older?", { everyNineteen });
// Array.prototype.find()
const idC = comments.find((comment) => {
  return comment.id === 542328;
});
console.log(idC);
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

// Array.prototype.findIndex()
const getIndex = comments.findIndex((comment) => {
  return comment.id === 123523;
});

console.log("getIndex:", getIndex);

// Find the comment with this ID
// delete the comment with the ID of 823423
comments.splice(2,1)

const newComments = [
  ...comments.slice(0, 2),
  ...comments.slice(2)
]

console.log(newComments);
