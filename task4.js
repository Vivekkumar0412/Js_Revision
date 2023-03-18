// // // TASK 15
// let str = "";
// let n = 9;
// for(let i = 1; i<=n; i = i+2){
//     if(i%2 == 0){
//         str = str + "#" + i;
//     }else{
//         str = str + i + "#";
//     }
// };
// console.log(str);

// task 2
// let str = "hello world";
// if (str.length > 5) {
//   console.log("Long");
// } else {
//   console.log("Short");
// }

//TASK 3
// let str = "Hello, world! This is a test string here is a m.";
// let count = 0;

// for (let i = 0; i < str.length; i++) {
//   if (str[i] === "m") {
//     count++;
//   }
// }

// console.log("Number of m's in the string: " + count);

//TASK 4
// let str = "x+y+xy+4x=7";
// let countX = 0;
// let countY = 0;

// for (let i = 0; i < str.length; i++) {
//   if (str[i] === "x") {
//     countX++;
//   } else if (str[i] === "y") {
//     countY++;
//   }
// }

// console.log("Number of x's in the string: " + countX);
// console.log("Number of y's in the string: " + countY);

//TASK 5
// let str = "cdeghBannb";
// let indexes = [];

// for (let i = 0; i < str.length; i++) {
//   if(str[i] == "a"){
//     console.log("a at index : " + i)
//   }else if(str[i] == "b"){
//     console.log("b at index : " + i)
//   }
// }

//TASK 6

// let str = "Javascript";
// let newStr = str.substring(1);

// console.log(newStr);

//TASK 7
// let str = "zoom";
// let newStr = "";

// for (let i = 0; i < str.length; i++) {
//   if (str[i] === "z") {
//     newStr += "x";
//   } else {
//     newStr += str[i];
//   }
// }

// console.log("New string with 'z' replaced by 'x': " + newStr);

// let str = "bajabababa@###$$%$%^#&#&#&1285383969";

// for(let i = str.length/2; i<str.length; i++){
//     console.log(str[i]);
// }
// let count = 0;
// let mount = 0;
// for(let i = 0; i<str.length; i++){
//     console.log("index of ab is : "+str.indexOf("ab",i));
// if(str[i] == "ab"){
//     console.log("a at the index of : " + i);
//     count++;
// }else if(str[i] == "b"){
//     console.log("b at the index of : " + i);
//     mount++;
// }
// }
// console.log(count,mount);

// for(let i = 0; i<str.length; i++){
//     if(str[i] >= 'a' && str[i]<= 'z'){
//         console.log(str[i] + " is a smallcase character");
//     }else if(str[i] >= 'A' && str[i]<='Z'){
//         console.log(str[i] + " is a uppercase character");
//     }else if(str[i]>= '1' && str[i]<= '9'){
//         console.log(str[i] + " is a number ");
//     }else{
//         console.log(str[i] + " is a  character");
//     }
// }

// let str = "nono";
// let count = 0;
// for(let i = 0; i<str.length; i++){
//     if(str.indexOf("no",i)){
//         count++;
//     }
// }
// console.log(count);

//TASK 9

// let str = "01234024";
// let newStr = "";
// for(let i = 0; i< str.length; i++){
//     if(i%2 == 0){
//         newStr = newStr + str[i];
//     }
// };
// console.log(newStr);

//TASK 10;

// let str = "1267$52@abc";
// let newStr = "";
// for(let i = 0; i<str.length; i++){
//     if(str[i]>= '1' && str[i]<= '9'){
//         newStr = newStr + str[i];
//     }
// };
// console.log(newStr);

//TASK 11

// let str = "qw23BN**45g";
// let newStr = "";
// for(let i = 0; i<str.length; i++){
//     if(str[i]>= 'a' && str[i]<= 'z'){
//         newStr = newStr + 'a';
//     }else if(str[i]>= 'A' && str[i]<= 'Z'){
//         newStr = newStr + 'A';
//     }else if(str[i]>= '0' && str[i]<= '9'){
//         newStr = newStr + '0';
//     }else{
//         newStr = newStr + str[i];
//     }
// };
// console.log(newStr);

//TASK 12

// let str = "qw2B**5g";
// let newStr = "";
// for(let i = 0; i<str.length; i++){
//     if(str[i]>= 'a' && str[i]<='z' || str[i]>='A' && str[i]<= 'Z'){
//         newStr = newStr + str[i] + str[i];
//     }else if(str[i]>= '0' && str[i]<= '9'){
//         newStr = newStr + str[i] + str[i] + str[i];
//     }
// };
// console.log(newStr);

// TASK 13
// let str = "9#a$M%2eP";
// let numStr = "";
// let lowerStr = "";
// let upperStr = "";
// for(let i = 0; i<str.length; i++){
//     if(str[i]>= 'a' && str[i]<= 'z'){
//         lowerStr = lowerStr + str[i];
//     }else if(str[i]>= 'A' && str[i]<='Z'){
//         upperStr = upperStr + str[i];
//     }
//     else if(str[i]>= '0' && str[i]<= '9'){
//         numStr = numStr + str[i];
//     }
// };
// console.log(lowerStr+numStr+upperStr);

//TASK 14

// let str = "9#a$M%2eP&$";
// let newStr = "";
// for(let i = 0; i<str.length; i++){
//     if(str[i]>= 'a' && str[i]<='z' || str[i]>='A' && str[i]<='Z' || str[i]>= '0' && str[i]<= '9'){

//     }else{
//         newStr = newStr + str[i];
//     }
// };
// console.log(newStr);

// TASK 15

// let str = "1234567890";
// let newStr = "";
// for(let i = 0; i<str.length/2; i++){
//     newStr = newStr + str[i];
// }
// console.log(newStr);

//TASK 16

// let str = "1234567890";
// let firstStr = "";
// let secondStr = "";
// for(let i = 0; i<str.length/2; i++){
//     secondStr = secondStr + str[i];
// }
// // console.log(newStr);
// for(let i = str.length/2; i<str.length; i++){
//     firstStr = firstStr + str[i];
// }
// console.log(firstStr+secondStr);

// TASK 17
// let str = "12345";
// let firstStr = "";
// let secondStr = "";
// for(let i = 0; i<str.length/2; i++){
//     secondStr = secondStr + str[i];
// }
// // console.log(newStr);
// for(let i = parseInt(str.length/2 ) +1; i<str.length; i++){
//     firstStr = firstStr + str[i];
//     // console.log(firstStr);
// }
// console.log(firstStr+secondStr);

// TASK 18

// let str = "dada";
// let firstStr = "";
// let secondStr = "";
// for(let i = 0; i<str.length/2; i++){
//     secondStr = secondStr + str[i];
// }
// // console.log(newStr);
// for(let i = str.length/2; i<str.length; i++){
//     firstStr = firstStr + str[i];
// }
// // console.log(firstStr+secondStr);

// if(firstStr == secondStr){
//     console.log("YES");
// }else{
//     console.log("NO");
// }

// TASK 19
// let str = "helloo";
// let ch = str[str.length/2];
// console.log("Middle character is : "+ ch);
// console.log("Index is : "+str.indexOf(ch));

//TASK 22
// let str = "ab11cd22ef";
// let newStr = "";
// for(let i = 0; i<str.length; i++){
//     if(str[i] == '1'){
//         newStr = newStr + '@';
//     }else if(str[i] == '2'){
//         newStr = newStr + '#';
//     }else{
//         newStr = newStr + str[i];
//     }
// }
// console.log(newStr);

// 1 by @,
// 2 by #,
//  3 by &
//  and 4-9 by $.
//   0 and other characters appear as it is in the new string and are not changed.Test CasesInputExpected Output12049brt@#0$$brta1b9c3d4QWa@b$c&d$QW

// TASK 23

let str = "a1b9c3d4QW";
let newStr = "";
for (let i = 0; i < str.length; i++) {
  if (str[i] == "1") {
    newStr = newStr + "@";
  } else if (str[i] == "2") {
    newStr = newStr + "#";
  } else if (str[i] == "3") {
    newStr = newStr + '&';
} else if (str[i] >= "4" && str[i] <= "9") {
    newStr = newStr + "$";
  } else {
    newStr = newStr + str[i];
  }
}
console.log(newStr);
