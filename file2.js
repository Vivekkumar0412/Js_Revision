// adding two numbers
let numOne = 1;
let numTwo = 58;
console.log(numOne + numTwo);

// program to concatenates two strings

let firstName = "Vivek";
let lastName = "Kumar";
console.log(firstName + " " + lastName);

// program to write name age and make sentence.

let myAge = 24;
console.log("Hello my name is "+ firstName + " "+ lastName + " and I am " +myAge + " years old.");

// A varriable is a entity which can change according to our command.
// while defining a varriable in js there are certain set of rules we need to keep in mind
// 1 : - A varriable name can never be satrt with a number .
// 2:- There should not be and - or space
// 3:- It is recommeded to use camel case naming convesion
// 4:- Js is a case sensative language means ( name != Name) both are different


// A constant is an entity which never change it is fixed.
// Basic difference betwwen a varriable and the constant is that varriable can be updated or changed but a constant can not.


// Primitive data types are those data types which use call by value method
// string "vivek"
// number 59
// Boolean 0 or 1 true or false
// undefined undefined
// null null
// Symbol


// TASK 2

// let a = 10;
// let b = 20;
// let c = a+b;
// console.log(`the sum of ${a} and ${b} is ${c}`);

// TASK 3

// let a = 10;
// let b = 20;
// let c = 30;
// let d = a +b+c;
// console.log(`the sum of ${a} + ${b} and ${c} is = ${d}`);

// TASK 4

let a = 10;
let b = 20;
let c = 30;
let d = a *(b +  c) -(b*c);
// console.log( a + "(${b} + ${c})" - " (b x c)  is = "   d);
console.log(a + "x" + "(" + b +"+"+ c+")"+ "-" + "("+ b+ "x"+ c + ")" +" is = "+ d);

// let str = "";
// for(let i = 1; i<=5; i++){
//     str = str+ 'A';
//     console.log(str);
// };

let count = 1;
let strr = "";
for(let i = 1; i<=5; i++){
    strr = strr + count;
    console.log(strr);
    count++;
}

for(let i = 1; i<=10; i++){
    console.log( 3 +" x "+ i + " = "+ 3*i);
}