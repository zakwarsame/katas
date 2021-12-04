const instructorWithLongestName = function (instructors) {
  // Put your solution here
  let instructorList = { name: "" };
  for (let i of instructors) {
    if (i.name.length > instructorList.name.length) {
      instructorList = i;
    } else if (i.name.length === instructorList.length) {
      instructorList = instructorList;
    }
  }
  return instructorList;
};


console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
])
);


  // https://gist.github.com/zakwarsame/0d9316327e1ecd9f7c53a6cdda028f39