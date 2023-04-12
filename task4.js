// Given an array of numbers,
// find the number and its index for
// a) equal to 10
// b) greater than 30
// c) multiple of 3

let ar = [
  1,
  2,
  3,
  4,
  5,
  6,
  6,
  6,
  7,
  788,
  9,
  9,
  908,
  65,
  5,
  53,
  3,
  32,
  ,
  34,
  5,
  5,
];
console.log(
  ar.find((elem) => {
    return elem > 10;
  })
);

console.log(
  ar.findIndex((elem) => {
    return elem > 10;
  })
);

console.log(
  ar.filter((elem) => {
    return elem > 10;
  })
);

// Given an array of numbers, filter the arraya
// a) equal to 10
// b) greater than 30
// c) multiple of 3

console.log(
  ar.filter((e) => {
    return e == 10;
  })
);

console.log(
  ar.filter((e) => {
    return e > 30;
  })
);

console.log(
  ar.filter((e) => {
    return e % 3 == 0;
  })
);

// Given an array of names, find the name and its index for
//  a) length of name is greater than 5
//  b) starts with P
//  c) starts with the character provided as a parameter

let ar2 = [
  "vivek",
  "divya",
  "pranav",
  "sikhar",
  "shreyansh",
  "akash",
  "pritam",
  "juhi",
  "kareena",
  "sahrukh",
];

let ch = "s";
console.log(
  ar2.find((e) => {
    return e.length > 4;
  })
);

console.log(
  ar2.find((e) => {
    return e[0] == ch;
  })
);

// iven an array of names, filter the array for
//  a) length of name is greater than 5
//  b) starts with s
//  c) starts with the character provided as a paramete

console.log(
  ar2.filter((e) => {
    return e.length > 5;
  })
);

console.log(
  ar2.filter((e) => {
    return e[0] == "s";
  })
);

console.log(
  ar2.filter((e) => {
    return e[0] == ch;
  })
);

// Given an array of employees where each employee is a JSON
// with name and age, findthe employee and its index for
// a) age less than 35
// b) name of the employee starts with S
// c) name of the employee starts with the character provided as parameter Create suitable test cases and test properlyTask

// 4.2Filter the abovearray of employees for
// a) age less than 35
// b) name of the employee starts with S

let employee = [
  { name: "vivek kumar", age: 24 },
  { name: "pranav gupta", age: 28 },
  { name: "sarthak sharma", age: 34 },
  { name: "shikhar joshi", age: 17 },
  { name: "nayanjyoti", age: 30 },
  { name: "ranveer brar", age: 39 },
  { name: "garima", age: 35 },
  { name: "vikas khanna", age: 40 },
];

console.log(
  employee.sort((a, b) => {
    if (a.age < b.age) {
      return -1;
    } else if (a.age > b.age) {
      return 1;
    } else {
      return 0;
    }
  })
);

console.log(
  employee.find((e) => {
    return e.age < 35;
  })
);

console.log(
  employee.findIndex((e) => {
    return e.age < 35;
  })
);

console.log(
  employee.filter((e) => {
    return e.name[0] == "s";
  })
);

console.log(
  employee.filter((e) => {
    return e.age > 35;
  })
);

// Given an array of string, find the first string whichendsin t.
// Also find its index.
// Also filter the array.For e.g. if the array was ['Hello', 'React', 'Java', 'Python', 'Hibernate', 'JavaScript']
//  the output should be React and index should be 1and the output of filter should be ['React','JavaScript']

let ar3 = ["Hello", "React", "Java", "Python", "Hibernate", "JavaScript"];

console.log(
  ar3.find((e) => {
    return e[e.length - 1] == "t";
  })
);

console.log(
  ar3.findIndex((e) => {
    return e[e.length - 1] == "t";
  })
);

console.log(
  ar3.filter((e) => {
    return e[e.length - 1] == "t";
  })
);

// Given a character ch, find the first string has thech in it.
//  Also finds its index and filter the array.
//  So, for the above array if ch = 'y', the output should be Python, 3 and ['Python']
//  If ch='a'the output should be React, 1 and ['React', 'Java', 'Hibernate', 'JavaScript'].
let ch2 = "v";
console.log(
  ar3.find((e) => {
    for (let i = 0; i < e.length; i++) {
      if (e[i] == ch2) {
        return e;
      }
    }
  })
);

console.log(
  ar3.filter((e) => {
    for (let i = 0; i < e.length; i++) {
      if (e[i] == "e") {
        return e;
      }
    }
  })
);

// Given an array of JSON representing students,

// Task 6.1
// Find the first student who has scored less than 50 in Maths. Also find its index.
// Task 6.2Find the first student whose total marks in more than 200. Also find its index.
// Task 6.3Find the first student who scored more in maths than english. Also find its index.
// Task 6.4 Given a number n, find the first student who scored more than n in all subjects. Also find its index.
// Task 6.5Filter the array for studentswho scored less than 50 in Maths.
// Task 6.6Filter the array for students with total marks more than 200. Also find its index.Task
//  6.7Filter the array for studentswho scored more in maths than english.
//  Task 6.8Given a number n, filter the array for students who scored more than n in all subjects.
//  Task 6.9Given two numbers n1 and n2 as input, filter the array for those whose marks in maths is more than n1 and marks in science is more than n2

let students = [
  { name: "Jack", maths: 55, english: 60, science: 62 },
  { name: "Anita", maths: 62, english: 65, science: 56 },
  { name: "Thomas", maths: 68, english: 72, science: 75 },
  { name: "Steve", maths: 51, english: 56, science: 68 },
  { name: "Julia", maths: 47, english: 77, science: 72 },
  { name: "Mary", maths: 72, english: 55, science: 81 },
];

console.log(students);

let totalMark = (ar) => {
  let total = 0;
  total = total + ar.maths + ar.english + ar.science;
  return total;
};

console.log(
  students.find((e) => {
    return e.maths < 50;
  })
);

console.log(
  students.findIndex((e) => {
    return e.maths < 50;
  })
);

console.log(
  students.find((e) => {
    return totalMark(e) > 200;
  })
);

console.log(
  students.findIndex((e) => {
    return totalMark(e) > 200;
  })
);

console.log(
  students.find((e) => {
    return e.maths > e.english;
  })
);

console.log(
  students.findIndex((e) => {
    return e.maths > e.english;
  })
);

let num = 60;
let num2 = 50;
console.log(
  students.find((e) => {
    return e.english > num && e.maths > num && e.science > num;
  })
);

console.log(
  students.filter((e) => {
    return e.maths < 50;
  })
);

// Task 6.6Filter the array for students with total marks more than 200. Also find its index.Task
//  6.7Filter the array for studentswho scored more in maths than english.
//  Task 6.8Given a number n, filter the array for students who scored more than n in all subjects.
//  Task 6.9Given two numbers n1 and n2 as input,
// filter the array for those whose marks in maths is more than n1 and marks in science is more than n2

console.log(
  students.filter((e) => {
    return totalMark(e) > 200;
  })
);

console.log(
  students.filter((e) => {
    return e.maths > num && e.science > num2;
  })
);

// Task 7.1Filter the array for those whose country is India.
// Also find and findIndex the first JSON whose country is India.
// Task 7.2Filter the array for those whose country is Indiaand age is less than 35.
// Also find and findIndex the first JSON whose country is Indiaand age is less than 35.Task
// 7.3Filter the array for those whose names has less than 6 characters
// .Also find and findIndex the first JSON whose names has less than 6 characters.
// Task 7.4Filter the array for those whose country is either Indiaor USA.
// Also find and findIndex the first JSON whose country is either India or USA.Task
// 7.5Given a number minAge, filter the array for those whose age is greater than minAge.
// Also find and findIndex the first JSON whose age is greater than minAge.Task
// 7.6Given a string str as input,filter the array for those whose country is one specified in str.

const data = [
  { name: "Jack", country: "USA", age: 35 },
  { name: "Amit", country: "India", age: 38 },
  { name: "Edward", country: "USA", age: 41 },
  { name: "Vishal", country: "India", age: 30 },
  { name: "Annie", country: "USA", age: 27 },
  { name: "Nick", country: "France", age: 32 },
  { name: "Francis", country: "France", age: 44 },
  { name: "Preeti", country: "India", age: 25 },
  { name: "Sophie", country: "France", age: 29 },
  { name: "Harpreet", country: "India", age: 48 },
  { name: "Bob", country: "USA", age: 21 },
];

console.log(
  data.sort((a, b) => {
    if (a.age < b.age) {
      return -1;
    } else if (a.age > b.age) {
      return 1;
    } else {
      return 0;
    }
  })
);

console.log(
  data.filter((e) => {
    return e.country == "India";
  })
);

console.log(
  data.find((e) => {
    return e.country == "India";
  })
);

console.log(
  data.findIndex((e) => {
    return e.country == "India";
  })
);

console.log(
  data.filter((e) => {
    return e.country == "India" && e.age > 30;
  })
);

console.log(
  data.filter((e) => {
    return e.name.length > 6;
  })
);

let str = "USA";
console.log(
  data.filter((e) => {
    return e.country == str;
  })
);

// Task 8.1Filter the array for those whose total marks is less than 250.
// Task 8.2Filter the array for those who have atleast 1 mark more than 70
// Task 8.3Filter the array for those who have scored 2 or more marks greater than 70.
// Task 8.4Given a number avg, filter the array for those whose average marks is greater than avg

const student2 = [
  { name: "Mary", marks: [72, 65, 55, 70] },
  { name: "Anita", marks: [66, 70, 75, 53] },
  { name: "Edward", marks: [44, 54, 64, 58] },
  { name: "Thomas", marks: [62, 55, 65, 81] },
  { name: "Robin", marks: [41, 44, 47, 49] },
  { name: "Sophia", marks: [71, 73, 67, 77] },
  { name: "Bruce", marks: [52, 57, 61, 64] },
];

console.log(student2);
let totalMark2 = (ar) => {
  let total = 0;
  for (let i = 0; i < ar.marks.length; i++) {
    total += ar.marks[i];
  }
  return total;
};

console.log(
  student2.filter((e) => {
    return totalMark2(e) < 250;
  })
);

console.log(
  student2.filter((e) => {
    for (let i = 0; i < e.marks.length; i++) {
      if (e.marks[i] > 70) {
        return e;
      }
    }
  })
);

const avgMarks = (obj) => {
  let avg = 0;
  let total = totalMark2(obj);
  avg = total / (obj.marks.length - 1);
  return avg;
};

console.log(
  student2.filter((e) => {
    return avgMarks(e) > 80;
  })
);

// 9Define a function that takes an array of JSON,
// a string and a boolean as parameters.
// If the the boolean is true, filter and return the array whose name match the given string.
// If the boolean is false, filter and return the array who tech match the given string

const data3 = [
  { name: "Jack", tech: "Android" },
  { name: "Mary", tech: "React" },
  { name: "Bob", tech: "Angular" },
  { name: "Steve", tech: "Spring" },
  { name: "James", tech: "Android" },
  { name: "Julia", tech: "Android" },
  { name: "Michel", tech: "React" },
  { name: "Bill", tech: "Angular" },
  { name: "Sonny", tech: "Spring" },
  { name: "Martins", tech: "React" },
  { name: "Bruce", tech: "Angular" },
  { name: "Sam", tech: "Spring" },
];

const mixData = (arr, str, isTrue) => {
  let ans;
  if (isTrue == true) {
    ans = arr.filter((e) => {
      return e.tech == str;
    });
  } else {
    return false;
  }
  return ans;
};

let d = mixData(data3, "Spring", true);
console.log(d);

// Given an array of string, create a string as shown.
//  Use join.Test CasesInputExpected Output["Hi","Hello","Bye"]Hi#Hello#Bye
//  ["A","B","C","X","Y"]A#B#C#X#Y["AB","!2","EF"]AB#12#EF

console.log(ar3.join(" $ "));

let seprator = (ar, sep) => {
  return ar.join(sep);
};

console.log(seprator(ar3, " ^ "));

// Task 12Given an array of numbers like [12,5,-6,10,-9,4,0,-23,34]
// a) Sort the numbers in ascending order
// b) sort the numbers in descending order
// c) sort the numbers based on their absolute valuein ascending orderCreate suitable test cases and test properl
const numarr = [12, 5, -6, 10, -9, 4, 0, -23, 34];
console.log(
  numarr.sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  })
);

// Task14.1Sort the array in ascending order of name.
// Task14.2Sort the array in descendingorder of name.
// Task14.3Sort the array in ascending order of total marksin 3 subjects.
// Task14.4Sort the array in descendingorder marks in maths

const st = [
  { name: "Jack", maths: 55, english: 60, science: 62 },
  { name: "Anita", maths: 62, english: 65, science: 56 },
  { name: "Thomas", maths: 68, english: 58, science: 54 },
  { name: "Steve", maths: 51, english: 56, science: 68 },
  { name: "Julia", maths: 47, english: 77, science: 72 },
  { name: "Mary", maths: 72, english: 55, science: 60 },
];

// let totalMark = (ar) => {
//     let total = 0;
//     total = total + ar.maths + ar.english + ar.science;
//     return total;
//   };
for (let i = 0; i < st.length; i++) {
  st[i].total_marks = totalMark(st[i]);
}
console.log(st);

console.log(
  st.sort((a, b) => {
    if (a.total_marks < b.total_marks) {
      return -1;
    } else if (a.total_marks > b.total_marks) {
      return 1;
    } else {
      return 0;
    }
  })
);
// Task 15.1 Sort the array in ascendingorder of name
// Task15.2  Sort the array in descendingorder of age
const country = [
  { name: "Jack", country: "USA", age: 35 },
  { name: "Amit", country: "India", age: 38 },
  { name: "Edward", country: "USA", age: 41 },
  { name: "Vishal", country: "India", age: 30 },
  { name: "Annie", country: "USA", age: 27 },
  { name: "Preeti", country: "India", age: 25 },
  { name: "Sophie", country: "France", age: 29 },
  { name: "Harpreet", country: "India", age: 48 },
  { name: "Bob", country: "USA", age: 21 },
];

console.log(country.sort((a,b)=>{
  if(a.name[0] < b.name[0]){
    return -1;
  }else if(a.name[0]>b.name[0]){
    return 1;
  }else{
    return 0;
  }
}))

console.log(country.sort((a,b)=>{
  if(a.age < b.age){
    return 1;
  }else if(a.age > b.age){
    return -1;
  }else{
    return 0;
  }
}))
