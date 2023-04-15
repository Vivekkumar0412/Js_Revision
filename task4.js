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

