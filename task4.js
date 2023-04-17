// // how to chnage the title of web page when user is not on page;

//  let doc_title = document.title;
//  console.log(doc_title);
//  window.addEventListener("blur",()=>{
//     // document.style.title.color = "red";
//     document.title = "jaldi aa bhai 😢";
//  });

//  window.addEventListener("focus",()=>{
//     document.title = doc_title;
//  });

//    // Map in javascript
// let ar = [1,2,3,4,455,6,78,9];
// let ar2 = ar.map((elem)=>{
//     return elem + 100;
// });

// let srq_num = (num)=>{
//     return num * num;
// };

// console.log(ar.map((elem)=>{
//     return srq_num(elem);
// }))

// let ar3 = [1,2,4,-5,-7,-9,-10,10,11];
// let ar4 = ar3.map((elem)=>{
//     if(elem >= 0){
//         return elem;
//     }else{
//         return elem * -1;

//     }
// });

// console.log(ar4);
// // console.log(ar);
// // console.log(ar2);

// let names = ["vivek","sarthak","divya"];
// let name_in_string = names.map((elem)=>{
//     return `<p> ${elem} </p>`;
// });

// console.log(name_in_string);
// // console.log(names.map((elem)=>{
// //     return elem.toUpperCase();

// // }))

// // for(let i = 0; i<names.length; i++){
// //     // names[i][0] = names[i][0].toUpperCase();
// //     // names[i].toUpperCase();
// //     // console.log(names[i][0]);
// //     console.log(names[i]);
// //     names[i][0] = names[i][0].toUpperCase()

// // };

// // console.log(names);

// let products = [
//     {name : "perk", quantity : 20, price : 10},
//     {name : "munch", quantity : 200, price : 90},
//     {name : "5 star", quantity : 10, price : 70},
//     {name : "kit-kat", quantity : 40, price : 100},
//     {name : "dairy-milk", quantity : 80, price : 50}
// ];
// console.log(products.sort((a,b)=>{
//     return a.price - b.price;
// }));

// let products_value = products.map((elem)=>{
//     let json1 = {name : elem.name, value : elem.quantity * elem.price};
//     return json1;
// });
// products_value.sort((a,b)=>{
//     if(a.value < b.value){
//         return -1;
//     }else if(a.value > b.value){
//         return 1;
//     }else{
//         return 0;
//     }
// })
// console.log(products_value);
// for(let i = 0; i<products_value.length; i++){
//     let h1 = document.createElement("p");
// //     h1.setAttribute("class","h11");
// //     h1.append(`Product is ${products_value[i].name} and it's value is ${products_value[i].value}`);
// //     document.body.appendChild(h1);
// // }
// // // // console.log(products);

// let arr = [10, 2, 3, 40, 5, 6];
// let arr2 = arr.reduce((a, b) => {
//   return a + b;
// });

// let ar3 = arr.reduce((acc, crr) => {
//   // debugger;
//   if (crr > acc) {
//     return crr;
//   } else {
//     return acc;
//   }
// });
// console.log(ar3);

// arr.sort((a, b) => {
//   return a - b;
// });

// console.log(arr[arr.length - 1]);

// let sr = ["vivek", "om", "pranav"];
// let sr2 = sr.reduce((a, c) => {
//   if (a.length < c.length) {
//     return a;
//   } else {
//     return c;
//   }
// });

// console.log(sr2);

// let products = [
//   { name: "dove", price: 100, quant: 10 },
//   { name: "lux", price: 10, quant: 10 },
//   { name: "medimix", price: 10, quant: 10 },
//   { name: "pears", price: 800, quant: 10 },
// ];

// let valu = products.reduce((a, c) => {
//   let curr_val = c.price * c.quant;
//   let acc_val = a.price * a.quant;
//   if (acc_val < curr_val) {
//     return c;
//   } else {
//     return a;
//   }
// });

// console.log(valu);

// let data = [
//   { name: "Jack", country: "USA", age: 35 },
//   { name: "Amit", country: "India", age: 38 },
//   { name: "Edward", country: "USA", age: 41 },
//   { name: "Vishal", country: "India", age: 30 },
//   { name: "Annie", country: "USA", age: 27 },
//   { name: "Nick", country: "France", age: 32 },
//   { name: "Francis", country: "France", age: 44 },
//   { name: "Preeti", country: "India", age: 25 },
//   { name: "Sophie", country: "France", age: 29 },
//   { name: "Harpreet", country: "India", age: 48 },
//   { name: "Bob", country: "USA", age: 21 },
// ];
// console.log(data.filter((elem)=>{

//     return elem.country == "USA" && elem.age > 27;
// }));

// Task 2 Given an array of numbers,
// create a new array whose numbers are twice the number of the input array. Use map

let arr = [10, 2, 3, 40, 5, 6];
console.log(
  arr.map((elem) => {
    return elem * 2;
  })
);

// Task 3 Given an array of numbers,
// create a new array whose numbers are the squares of the number of the input array. Use map

let arr2 = [10, 2, 3, 40, 5, 6];
console.log(
  arr2.map((elem) => {
    return elem * elem;
  })
);

// Task  4 an array of numbers, create a new array whose numbers the same if even and zero if odd. Use map

let arr3 = [10, 2, 3, 5, 9, 1, 7, 17, 40, 5, 6];
console.log(
  arr3.map((elem) => {
    if (elem % 2 == 0) {
      return elem;
    } else {
      return 0;
    }
  })
);

// Given an array of numbers,
// create a new array whose has the string Even if the number is even, and Odd if the number is Odd. Use map.
let arr4 = [10, 2, 3, 5, 9, 1, 7, 17, 40, 5, 6];
console.log(
  arr3.map((elem) => {
    if (elem % 2 == 0) {
      return "Even";
    } else {
      return "Odd";
    }
  })
);

// Task 6 Given an array of string, create a new array whose strings are double the string in the array. Use map.
let arr5 = ["vi", "hi", "gi", "di"];
console.log(
  arr5.map((elem) => {
    return elem + elem;
  })
);

// Task7 Given an array of JSON, create a new array of strings as shown.
// Use map.So, if the JSON array is
// the output array is ["Mark is 23 years old", "Steve is 28 years old", "Mary is 25 years old", "Bill is 34 years old"]

let arr6 = [
  { name: "Mark", age: 23 },
  { name: "Steve", age: 28 },
  { name: "Mary", age: 25 },
  { name: "Bill", age: 34 },
];
console.log(
  arr6.map((elem) => {
    let str = `${elem.name} is ${elem.age} years old`;
    return str;
  })
);

// TASK 8 Given an array of names, create a string using map and join as shown below.
// So, if the array was ["Mark","James","Martha"]
// the string should be <ul><li>Mark</li><li>James</li><li>Martha</li></ul>

let arr7 = ["Mark", "James", "Martha"];
let new_arr7 = arr7.map((elem) => {
  return `<li>${elem}</li>`;
});
let list = `<ul>${new_arr7.join("")}</ul>`;
console.log(new_arr7);
console.log(list);

// Task 9 Given an array of JSONs, create a string using map and join as shown below.
// So, if the array was [{"id" : 101, "name" : "Mark},{"id" : 105, "name" : "Steve},{"id" : 78, "name" : "James"}]
// the string should be
/* <button onClick=clicked(101)>Mark</button> <button onClick=clicked(105)>Steve</button><button onClick=clicked(78)>James</button> */
let arr8 = [
  { id: 101, name: "Mark" },
  { id: 105, name: "Steve" },
  { id: 78, name: "James" },
];

let new_arr8 = arr8.map((elem) => {
  let str = `<button onClick=clicked(${elem.id})>${elem.name}</button>`;
  return str;
});

let list2 = new_arr8.join("");
console.log(list2);
console.log(new_arr8);

let arr9 = [
  { name: "Mary", marks: 72 },
  { name: "Anita", marks: 75 },
  { name: "Thomas", marks: 81 },
  { name: "Bruce", marks: 64 },
];
let new_arr9 = arr9.map((elem) => {
  let str = `<tr><td>${elem.name}</td><td>${elem.marks}</td><td><button onClick=show(${elem.name})>Show More</button></td></tr>`;
  return str;
});

let list3 = new_arr9.join("");
console.log(new_arr9);
console.log(list3);

// let t = document.getElementById("t");
// t.append(list3);

//   Task 12 Given an array of JSON, use map to create an array of cities.So, the new array should be ["London","Amsterdam","Paris","Rome"]
let arr10 = [
  { fname: "Jack", lname: "Smith", city: "London" },
  { fname: "Mary", lname: "Markle", city: "Amsterdam" },
  { fname: "Ed", lname: "May", city: "Paris" },
  { fname: "Tim", lname: "Gates", city: "Rome" },
];
console.log(
  arr10.map((elem) => {
    return elem.city;
  })
);

// Task 13 Given an array of JSON Create a new array of JSON which has an additional field fullname in it.
//  For the first JSON the fullname is "Jack Smith"

let arr11 = [
  { fname: "Jack", lname: "Smith", city: "London" },
  { fname: "Mary", lname: "Markle", city: "Amsterdam" },
  { fname: "Ed", lname: "May", city: "Paris" },
  { fname: "Tim", lname: "Gates", city: "Rome" },
];

console.log(
  arr11.map((elem) => {
    let str = `fname : ${elem.fname} , lname : ${elem.lname} , city : ${
      elem.city
    } , fullname : ${`${elem.fname}  ${elem.lname}`}`;
    return str;
  })
);

// Task14 Given an array of numbers, use reduce to
// a) compute the sum of the numbers
// b) product of numbers
// c) max number
// d) min number
// e) count the numbers greater than 10

let arr12 = [2, 3, 3, 567, 4, 222, 5, 666, 543, 2114, 5, 4646, 64, 57];
console.log(
  arr12.reduce((acc, crr) => {
    return acc + crr;
  })
);

console.log(
  arr12.reduce((acc, crr) => {
    return acc * crr;
  })
);

console.log(
  arr12.reduce((a, b) => {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  })
);

console.log(
  arr12.reduce((a, b) => {
    let count = 0;
    if (b > 100) {
      count++;
      a += count;
    }

    return a;
  }, 0)
);

let doc_title = document.title;

window.addEventListener("blur", () => {
  document.title = "Jaldi wapas aa bhai mere 😒";
});

window.addEventListener("focus", () => {
  document.title = doc_title;
});

// Task 10 Given an array of JSONs, create a string using map and join as shown below.So,
//  if the array was the string should be
//  <p class='id101'>Mark</p> <p class='id105'>Steve</p> <p class='id78'>James</p>
//  Google and read about how to use escape character and put a quote

let arr13 = [
  { id: 101, name: "Mark" },
  { id: 105, name: "Steve" },
  { id: 78, name: "James" },
];

let new_arr13 = arr13.map((a) => {
  let str = `<p class = 'id${a.id}'> ${a.name}</p>`;
  return str;
});

console.log(new_arr13);
console.log(new_arr13.join(""));

let arr14 = ["vivek", "sarthak", "pranav", "raj"];
const new_arr142 = arr14.reduce((a, b) => {
  return `${a}::${b}`;
});

console.log(new_arr142);
let new_arr14 = arr14.map((elem) => {
  let str = `${elem}::`;
  return str;
});
console.log(new_arr14.join(""));

// Task15 Given an array of string, use reduce to
// a) concatenate all the strings with :: between them
// b) compute the sum of the length of all the strings
// c) concatenate the first character of all the strings

let arr15 = ["vivek", "singh", "rajput"];
let new_arr15 = arr15.reduce((a, c) => {
  return `${a}::${c}`;
});


let new_arr151 = arr15.reduce((a, c) => {
  // let sum = a.length;
  // console.log(a);
  return a + c.length;
}, 0);

let new_arr152 = arr15.reduce((a, c) => {
  return a + c[0];
}, "");
console.log(new_arr152);


// ask 16 Given an array of JSON,
// a) compute the sum of ages
// b) Countthe number of persons who are more than 27 years of age
// c) Compute the youngest person
// d) Compute the oldest person
// e) Count the number of people whose name starts with 'M'

let arr16 = [
  { name: "Mark", age: 23 },
  { name: "Steve", age: 28 },
  { name: "Mary", age: 25 },
  { name: "Bill", age: 34 },
];

let new_arr16 = arr16.reduce((a, c) => {
  return a + c.age;
}, 0);
