// TASK 1 A
console.log("hi");
for (let i = 0; i <= 3; i++) {
  console.log(i);
}

// TASK 1 B
for (let i = 1; i <= 3; i++) {
  console.log("Hello");
}


// TASK 1 C (I)

for(let i = 1; i<=6;i++){
    console.log(i);
}

// TASK 1 C (II)

let str = "";
for(let i = 1;i<=5; i++){
    str = str + 'A';
    console.log(str);
}

// TASK 1 C (III)

// let count = 1;
let mtr = "";
for(let i = 1; i<=5; i++){
    mtr = mtr + i;
    console.log(mtr);
};

// TASK 1 C (IV)
for(let i = 1; i<=10; i++){
    console.log("3 x "+ i + " = "+ 3*i);
}


// TASK 1 D
// the three parts of loop are 1 :- Initializer 2:- Condition and 3:- Counter/Update statement
// Initilizer is used to initialize a statement
// Condition is basically used to check the condition that until when we need to run our program
// counter is used to update the statement.


//TASK 2
for(let i = 1; i<=10; i++){
    console.log(i);
};

//TASK 3
let jsString = "JavaScript";
for(let i = 1; i<=6; i++){
    console.log(jsString);
}

//TASK 4

for(let i = 1; i<=5; i++){
    console.log("EmployeeId :: "+ i)
}

//TASK 5
for(let i = 1; i<= 11; i++){
    let cube = (i * i * i);
    console.log("number = " + i + " cube = "+ cube);
}

// TASK 6
for(let i = 1; i<=10; i++){
    console.log(i + " " + i*10 + " " + i*20);
}

// TASK 7
for(let i = 1; i<=8; i++){
    console.log(i + " " + (i + 10) + " " + (i + 100) + " " + (i + 1000));
}


//TASK 8
for(let i = 1; i<=5; i++){
    // xStr = xStr + i;
    // console.log(xStr);
    console.log("X"+i);
}

//TASK 9
for(let i = 1; i<=5;i++){
    console.log("A"+i + "B" + i);
}

//TASK 10

for(let i= 1; i<=5; i++){
    let sq = (i * i);
    console.log(sq);
}

// TASK 11

let aStr = "";
let cStr = "";
for(let i = 1; i<=5; i++){
    str ='A' + i;
    cStr = cStr + str;
    console.log(cStr);
}

// tASK 12

let countHere = 2;
for(let i = 1; i<=5; i++){
    console.log(i + " + " + countHere + " = " + (i +countHere))
    countHere++;
};

// TASK 13
let str1 = "";
let mainStr = "";
let firstNum = 1;
let secondNum = 2;
for(let i = 1; i<= 4; i++){
    
    str1 = 'XY' + firstNum + (++firstNum);
    mainStr = mainStr + str1;
    
    // firstNum = secondNum;
    firstNum ++;
    // secondNum++;
}
console.log(mainStr);



// task 14
let str2 = "";
let mainStrr = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    str2 = "@";
    mainStrr = mainStrr + str2;
    // console.log(mainStr)
  }
  mainStrr = i + mainStrr;
}
console.log(mainStr);


// TASK 16

for(let i = 1 ; i<= 10; i++){
    console.log(i*3);
}

// TASK 17

for(let i = 1 ; i<= 10; i = i+3){

    console.log(i);
}

// TASK 18
for(let i = 5; i>=1; i--){
    console.log(i);
}

// TASK 19
let numStr = "";
for(let i = 5; i>=1; i--){
    numStr = numStr + i;
}
console.log(numStr);



// $$$$$$$444$$$$$$$$$$$$$$$$$$$$$$$$$ if else %%%%%%%%%%%%%%%%%%

// TASK 1
let n = 21;
if(n%2 == 0){
    console.log(n);
}else{
    console.log(n+1);
}

// TASK 1 A 2
let num = 17;
if(num%6 == 0){
    console.log("Divided by 6");
}else if(num % 3 == 0){
    console.log("Divided by 3");
}else if(num %2 == 0){
    console.log("Divided by 2");
}else{
    console.log("Nither divided by 6 nor by 2 and 3");
}

//TASK 1 A 3

let str = "";
for(let i = 1; i<=5; i++){
    if(i % 2==0){
        str = str + "K";
    }else{
        str = str + "J";
    }
}
console.log(str);

// TASK 1 A 4

let isPrime = 16;
let count = 0;
for(let i = 2; i<isPrime; i++){
    if(isPrime % i == 0){
        count++;
    }
};
if(count == 0){
    console.log("Prime")
}else{
    console.log("Composite")
}


//TASK 2

let numm = 9;
if(numm<= 0){
    console.log("Negative number");
}else{
    console.log("Positive number");
}

// TASK 3
let multipleOfTen = 990;
if(multipleOfTen % 10 == 0){
    console.log("Multiple of 10 ");
}else{
    console.log("Not a multiple of 10")
}


//TASK 4
let mNum = 10;
let nNum = 10;
if(mNum  >nNum){
    console.log("Greater")
}else if(mNum < nNum){
    console.log("Smaller")
}else{
    console.log("Equal")
}

//TASK 5
let num = 16;
for(let i = 2; i<= 5; i++){
    if(num % i == 0){
        console.log("YES " + i);
    }else{
        console.log("No " + i)
    }
}

//TASK 6

for(let i = 1; i<=15; i++){
    if(i%5 == 0){
        console.log("Hello");
    }else{
        console.log(i);
    }
}

// TASK 7

for(let i = 1; i<=10; i++){
    if(i%2 == 0){
        console.log(i + " : Even")
    }else{
        console.log(i + " : Odd")
    }
}

//TASK 8

for(let i = 1; i<= 17; i++){
    if(17% i == 0){
        console.log(i)
    }
}

// TASK 9

for(let i = 1; i<=10; i++){
    let srq = (i * i);
    if(i%2 == 0){
        console.log("Square of " + i + " = " + (i * i) + " Even")
    }else{
        console.log("Square of " + i + " = " + (i * i) + " Odd")
    }
}

// TASK 10
let marks = 0;
if(marks >= 75){
    console.log("Good");
}else if(marks >= 50){
    console.log("Average")
}else{
    console.log("poor");
}

//TASK 11
let n = 56;
if(n >= 90){
    console.log("Grade " +"A");
}else if(n>=75){
    console.log("Grade " +"B");
}else if(n>=50){
    console.log("Grade " +"C")
}else{
    console.log("Grade " +"D")
}

//TASK 12
let str = "";
for(let i = 1; i<=5; i++){
    if(i%2 == 0){
        str = str + 'X';
    }else{
        str = str + 'Y';
    }
}
console.log(str);

//TASK 12
let str = "";
for(let i = 1; i<=5; i++){
    if(i%2 == 0){
        str = str + 'Y';
        console.log(str);
    }else{
        str = str + 'X';
        console.log(str);
    }
}
// console.log(str);


// TASK 13
let n = 3;
str = "";
for(let i = 1; i<=n; i++){
    if(n== 1){
        str = str + "A";
    }else if(n == 2){
        str = str + "AB";
        break;
    }else{
        str = str + "ABC";
    }
}
console.log(str);
console.log(str);

// TASK 20
let sum = 0;
let n = 9999;
for(let i = 1; i<= n; i++){
    let lastDigit = Math.floor(n%10);
    sum = sum + lastDigit;
    n = Math.floor(n/10);
}
console.log(sum);


// TASK 19

let str1 = "";
let str2 = "";
let n = 9;
for(let i = 1; i<=n; i++){
    if(n%i == 0){
        str1 = str1 + i + "#";
    }else{
        str2 = str2 + i + "#";
    }
}
console.log("Divide : "+str1 + " " +"Not Divide: "+str2)


// // TASK 15
// let str = "";
let n = 6;
// for(let i = 1; i<=n; i = i+2){
//     str = str + i + "#";
// };
// console.log(str);

// TASK 16

let str1 = "";
let n = 9;
for(let i = 1; i<=n; i++){
    if(i%2 == 0){
        str1 = str1 + "+"+ i;
    }else{
        str1 = str1 + "-" + i;
    }
};
console.log(str1);

// TASK 17

let str1 = "";
let str2 = "";
let n = 6;
for(let i = 1; i<=n; i++){
    if(i%2 == 0){
        str1 = str1 + "+"+ i;
        str2 = str2 + i;
    }else{
        str1 = str1 + "-" + i;
        str2 = str2 - i;
    }
};
console.log(str1+ " "+ " " +str2);


// TASK 20
let sum = 0;
let num = 9999;
for(let i = 1; i<= num; i++){
    let lastDigit = (num%10);
    sum = sum + lastDigit;
    num = num - lastDigit;
    num = (num/10);
}
console.log(sum);
