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
