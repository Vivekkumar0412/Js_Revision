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



// $$$$$$$$$$$$$$$$$$$$$$$$$ STRINGS $$$$$$$$$$$$$$$$$$$$$$$$


// // TASK 15
let str = "";
let n = 9;
for(let i = 1; i<=n; i = i+2){
    if(i%2 == 0){
        str = str + "#" + i;
    }else{
        str = str + i + "#";
    }
};
console.log(str);

task 2
let str = "hello world";
if (str.length > 5) {
  console.log("Long");
} else {
  console.log("Short");
}

TASK 3
let str = "Hello, world! This is a test string here is a m.";
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === "m") {
    count++;
  }
}

console.log("Number of m's in the string: " + count);

TASK 4
let str = "x+y+xy+4x=7";
let countX = 0;
let countY = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === "x") {
    countX++;
  } else if (str[i] === "y") {
    countY++;
  }
}

console.log("Number of x's in the string: " + countX);
console.log("Number of y's in the string: " + countY);

TASK 5
let str = "cdeghBannb";
let indexes = [];

for (let i = 0; i < str.length; i++) {
  if(str[i] == "a"){
    console.log("a at index : " + i)
  }else if(str[i] == "b"){
    console.log("b at index : " + i)
  }
}

TASK 6

let str = "Javascript";
let newStr = str.substring(1);

console.log(newStr);

TASK 7
let str = "zoom";
let newStr = "";

for (let i = 0; i < str.length; i++) {
  if (str[i] === "z") {
    newStr += "x";
  } else {
    newStr += str[i];
  }
}

console.log("New string with 'z' replaced by 'x': " + newStr);

let str = "bajabababa@###$$%$%^#&#&#&1285383969";

for(let i = str.length/2; i<str.length; i++){
    console.log(str[i]);
}
let count = 0;
let mount = 0;
for(let i = 0; i<str.length; i++){
    console.log("index of ab is : "+str.indexOf("ab",i));
if(str[i] == "ab"){
    console.log("a at the index of : " + i);
    count++;
}else if(str[i] == "b"){
    console.log("b at the index of : " + i);
    mount++;
}
}
console.log(count,mount);

for(let i = 0; i<str.length; i++){
    if(str[i] >= 'a' && str[i]<= 'z'){
        console.log(str[i] + " is a smallcase character");
    }else if(str[i] >= 'A' && str[i]<='Z'){
        console.log(str[i] + " is a uppercase character");
    }else if(str[i]>= '1' && str[i]<= '9'){
        console.log(str[i] + " is a number ");
    }else{
        console.log(str[i] + " is a  character");
    }
}

let str = "nono";
let count = 0;
for(let i = 0; i<str.length; i++){
    if(str.indexOf("no",i)){
        count++;
    }
}
console.log(count);

TASK 9

let str = "01234024";
let newStr = "";
for(let i = 0; i< str.length; i++){
    if(i%2 == 0){
        newStr = newStr + str[i];
    }
};
console.log(newStr);

TASK 10;

let str = "1267$52@abc";
let newStr = "";
for(let i = 0; i<str.length; i++){
    if(str[i]>= '1' && str[i]<= '9'){
        newStr = newStr + str[i];
    }
};
console.log(newStr);

TASK 11

let str = "qw23BN**45g";
let newStr = "";
for(let i = 0; i<str.length; i++){
    if(str[i]>= 'a' && str[i]<= 'z'){
        newStr = newStr + 'a';
    }else if(str[i]>= 'A' && str[i]<= 'Z'){
        newStr = newStr + 'A';
    }else if(str[i]>= '0' && str[i]<= '9'){
        newStr = newStr + '0';
    }else{
        newStr = newStr + str[i];
    }
};
console.log(newStr);

TASK 12

let str = "qw2B**5g";
let newStr = "";
for(let i = 0; i<str.length; i++){
    if(str[i]>= 'a' && str[i]<='z' || str[i]>='A' && str[i]<= 'Z'){
        newStr = newStr + str[i] + str[i];
    }else if(str[i]>= '0' && str[i]<= '9'){
        newStr = newStr + str[i] + str[i] + str[i];
    }
};
console.log(newStr);

TASK 13
let str = "9#a$M%2eP";
let numStr = "";
let lowerStr = "";
let upperStr = "";
for(let i = 0; i<str.length; i++){
    if(str[i]>= 'a' && str[i]<= 'z'){
        lowerStr = lowerStr + str[i];
    }else if(str[i]>= 'A' && str[i]<='Z'){
        upperStr = upperStr + str[i];
    }
    else if(str[i]>= '0' && str[i]<= '9'){
        numStr = numStr + str[i];
    }
};
console.log(lowerStr+numStr+upperStr);

TASK 14

let str = "9#a$M%2eP&$";
let newStr = "";
for(let i = 0; i<str.length; i++){
    if(str[i]>= 'a' && str[i]<='z' || str[i]>='A' && str[i]<='Z' || str[i]>= '0' && str[i]<= '9'){

    }else{
        newStr = newStr + str[i];
    }
};
console.log(newStr);

TASK 15

let str = "1234567890";
let newStr = "";
for(let i = 0; i<str.length/2; i++){
    newStr = newStr + str[i];
}
console.log(newStr);

TASK 16

let str = "1234567890";
let firstStr = "";
let secondStr = "";
for(let i = 0; i<str.length/2; i++){
    secondStr = secondStr + str[i];
}
// console.log(newStr);
for(let i = str.length/2; i<str.length; i++){
    firstStr = firstStr + str[i];
}
console.log(firstStr+secondStr);

TASK 17
let str = "12345";
let firstStr = "";
let secondStr = "";
for(let i = 0; i<str.length/2; i++){
    secondStr = secondStr + str[i];
}
// console.log(newStr);
for(let i = parseInt(str.length/2 ) +1; i<str.length; i++){
    firstStr = firstStr + str[i];
    // console.log(firstStr);
}
console.log(firstStr+secondStr);

TASK 18

let str = "dada";
let firstStr = "";
let secondStr = "";
for(let i = 0; i<str.length/2; i++){
    secondStr = secondStr + str[i];
}
// console.log(newStr);
for(let i = str.length/2; i<str.length; i++){
    firstStr = firstStr + str[i];
}
// console.log(firstStr+secondStr);

if(firstStr == secondStr){
    console.log("YES");
}else{
    console.log("NO");
}

TASK 19
let str = "helloo";
let ch = str[str.length/2];
console.log("Middle character is : "+ ch);
console.log("Index is : "+str.indexOf(ch));

TASK 22
let str = "ab11cd22ef";
let newStr = "";
for(let i = 0; i<str.length; i++){
    if(str[i] == '1'){
        newStr = newStr + '@';
    }else if(str[i] == '2'){
        newStr = newStr + '#';
    }else{
        newStr = newStr + str[i];
    }
}
console.log(newStr);

1 by @,
2 by #,
 3 by &
 and 4-9 by $.
  0 and other characters appear as it is in the new string and are not changed.Test CasesInputExpected Output12049brt@#0$$brta1b9c3d4QWa@b$c&d$QW

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





// // console.log("New day !");
// let str = "12345";
// let len = str.length;
// let newStr = "";
// let middleStr = "";
// let firstStr = "";
// if(len %2 != 0){
//   middleStr = middleStr + str[parseInt(len/2)]
// };

// for(let i = parseInt(len/2) + 1; i<len; i++){
//   newStr = newStr + str[i];
// }
// for(let i = 0; i< parseInt(len/2); i++){
//   firstStr = firstStr + str[i];
// }
// console.log(middleStr);
// console.log(newStr);
// console.log(firstStr);

// if(middleStr != ""){
//   console.log(newStr + middleStr + firstStr);
// }else{
//   console.log(newStr + firstStr);
// }

// let str = "##ab##13###c##";
// let out = "";
// for(let i = 0; i<str.length; i++){
//   let ch = str[i];
//   let lastCh = str[i-1];
//   if(ch == "#"){
//     if(lastCh == "#"){
//       // nothing to do
//     }else{
//       out = out + ch;
//     }
//   }else{
//     out = out + ch;
//   }
// };
// console.log(out);


// let str = "yesnoyesnoyesno";
// let str2 = "yes";
// let count = 0;
// for(let i = 0; i<str.length; i++){
//   console.log(str.indexOf(str2 ,i));
// };
// console.log(count);

// TASK 24

// let str = "I GOT A BIRTHDAY CARD";
// let out = "";
// for(let i = 0; i<str.length; i++){
//   let ch = str[i];
//   if(ch == 'A'){
//     out = out + 'X';
//   }else if(ch == 'B'){
//     out = out + 'Y';
//   }else if(ch == 'C' || ch == 'D'){
//     // do noting 
//   }else{
//     out = out + ch;
//   };
// };
// console.log(out);


// TASK 25

// let str = "x+3+45+++";
// let out = "";
// for(let i = 0; i<str.length; i++){
//   let ch = str[i];
//   let lastCh = str[i-1];
//   if(ch == '+'){
//     if(lastCh == '+'){
//       //nothing to do
//     }else{
//       out = out + ch;
//     }
//   }else{
//     out = out + ch;
//   }
// };
// console.log(out);

//TASK 26

// let str = "AAXXXBBYYYCXXDYY";
// let out = "";
// for(let i = 0; i<str.length; i++){
//   let ch = str[i];
//   let lastCh = str[i-1];
//   if(ch == 'X'){
//     if(lastCh == 'X'){
//       //no
//     }else{
//       out = out + ch;
//     }
//   }else if(ch == 'Y'){
//     if(lastCh == 'Y'){
//       //no
//     }else{
//       out = out + ch;
//     }
//   }else{
//     out = out + ch;
//   }
// };
// console.log(out);

// TASK 27

// let str = "AB CD J ava";
// if(str.substring(0,4) == 'ABCD'){
//   console.log("Start with ABCD")
// }else{
//   console.log("does not start");
// }


// if(str[0] == 'A' && str[1] == 'B' && str[2] == 'C' && str[3] == 'D'){
//   console.log("Start with ABCD")
// }else{
//   console.log("Does not start")
// }

// task 28

// let str = "Perfect";
// let str2 = str.substring(1);
// console.log(str2);
// let count = 0;
// for(let i = 0; i<str.length; i++){
//   if(str.substring(0,i) == 'ABCD'){
//     count++;
//   }
// };
// console.log(count);



// TASK 28

// const str = "AB ABC ABCD ABCD ABC AB";
// let count = 0;
// for(let i = 0; i < str.length; i++){
//     if(str[i] === "A" && str[i+1] === "B" && str[i+2] === "C" && str[i+3] === "D"){
//         count++;
//     }
// }

// console.log(count);


// TASK 29

let str = "AB ABC ABCD ABCD ABC AB";
let result = "";
let i = 0;

while(i < str.length){
    if(str[i] === "A" && str[i+1] === "B" && str[i+2] === "C" && str[i+3] === "D"){
        result += "XYZ";
        i += 4;
    } else {
        result += str[i];
        i++;
    }
}

console.log(result);


// %%%%%%%%%%%%%%%%%%% FUNCTIONS %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// tASK 2
// function check(n){
//     let sum = 0;
//     for(let i = 1; i<=n; i++){
//         sum = sum + i;
//     };
//     console.log(sum)
// };
// check(20);

// TASK 3
// function check(str1,ch){
//     let str2 = "";
//     for(let i = 0; i<str1.length; i++){
//         if(str1[i] == ch){
//             // nothing to do here 
//         }else{
//             str2 = str2 + str1[i];
//         }
//     };
//     console.log(str2);
// };
// check("moomozm","m");

// TASK 6

// function rev(str){
//     let newstr = "";
//     for(let i = str.length-1; i>=0; i--){
//         newstr = newstr + str[i];
//     };
//     console.log(newstr);
// };
// rev("123456789");

// TASK 7
// function ch(str,ch1,ch2){
//     let ch1Count = 0;
//     let ch2Count = 0;
//     for(let i = 0; i<str.length; i++){
//         if(str[i] == 'ch1'){
//             ch1Count++;
//         }else if(str[i] == ch2){
//             ch2Count++;
//         }
//     };

//     if(ch1Count > ch2Count){
//         console.log("1");
//     }else if(ch1Count == ch2Count){
//         console.log("0");
//     }else{
//         console.log("-1");
//     }
// };

// ch("moozoom","m","o");

// TASK 8

// function ch(str){
//     let count1 = 0;
//     let count2 = 0;
//     for(let i = 0; i<str.length; i++){
//         if(str[i] == '('){
//             count1++;
//         }else if(str[i] == ")"){
//             count2++;
//         };
//     };
//     if(count1 == count2){
//         console.log("True");
//     }else{
//         console.log("False");
//     }
// };
// ch("(a+b+(c+d*e)-(d+e*f))+3");

// TASK 10
// function p(n){
//     let count = 0;
//     for(let i = 2; i<n; i++){
//         if(n%i == 0){
//             count++;
//             break;
//         }
//     };
//     if(count == 0){
//         console.log("Prime");
//     }else{
//         console.log("not a prime");
//     }
    
// };
// p(5);

// TASK 11
// function p(n){
//     let count = 0;
//     for(let i = 2; i<n; i++){
//         if(n%i == 0){
//             return false
//         };
//     };
//     return true;
// };
// let count = 0;
// let n = 150;
// for(let i = 2; i<n; i++){
//     if(p(i)){
//         count++;
//     }
// }
// console.log(count);





// TASK 4

// function r(n1,n2,n3){
//     let count = 0;
//     if(n1*n1 == n2*n2 + n3*n3){
//         count++;
//     }else if(n2*n2 == n1*n1 + n3*n3){
//         count++;
//     }else if(n3*n3 == n1*n1 + n2*n2){
//         count++;
//     };

//     if(count>0){
//         console.log("True");
//     }else{
//         console.log("False");
//     }
// };

// r(6,8,10);

// TASK 5

// function checkValidity(a, b, c) 
// { 
    
//     if (a + b <= c || a + c <= b || b + c <= a) 
//         return false; 
//     else
//         return true; 
// }
// console.log(checkValidity(7,2,5));


//  TASK 12
// function ch(str,c){
//     let count = 0;
//     for(let i = 0; i<str.length; i++){
//         if(str[i] == c){
//             count++;
//         }
//     };
//     console.log(count);
// };

// ch("abracadabra","a");



// TASK 13
function maxCharCount(str) {
    let charCount = {};
    countChars(str, charCount);
    return maxCount(charCount);
  }
  
  function countChars(str, charCount) {
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      charCount[char] = (charCount[char] || 0) + 1;
    }
  }
  
  function maxCount(charCount) {
    let maxCount = 0;
    for (const char in charCount) {
      if (charCount[char] > maxCount) {
        maxCount = charCount[char];
      }
    }
    return maxCount;
  }
  console.log(maxCharCount("abracadabra"));  
// TASK 14
function s(n){
    let sum = 0;
    for(let i = 1; i<=10; i++){
        let lastDigit = n%10;
        sum = sum + lastDigit;
        n = (n - lastDigit)/10;
        // n = n/10;
    };
    console.log(sum);
};
s(24681);


// $$$$$$$$$$$$$$$$$$$$$$$$ ARRAYS $$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// TASK 1
// let arr = [1,2,3,4,9,8,6,4];
// let count = 0;
// for(let i = 0; i<arr.length; i++){
//     if(arr[i] % 2 == 0){
//         count++;
//     }
    
// };
// console.log(count);

// TASK 2
// let arr = [1,20,30,4,9,8,6,4];
// let count = 0;
// for(let i = 0; i<arr.length; i++){
//     if(arr[i] % 5 == 0){
//         count = count + arr[i];
//     }
// };
// console.log(count);


//TASK 3

// let arr = ["vivek","kumar","singh"];
// for(let i = 0; i<arr.length; i++){
//     arr[i] = arr[i].toUpperCase();
// }
// console.log(arr);











// check wether is there any prime in an array
// TASK 4
// function isPrime(n){
//     for(let i = 2; i<n; i++){
//         if(n%i == 0){
//             return false;
//         }
//     };
//     return true;
// };
// let arr= [10,20,10,4];
// let count = 0;
// for(let i = 0; i<arr.length; i++){
//     if(isPrime(arr[i])){
//         count++;
//         break;
//     }
// };
// if(count>0){
//     console.log("True");
// }else{
//     console.log("False");
// }

// function arrPrime(num){
//     for(let i = 0; i<=num; i++){
//         if(isPrime(i)){
//             return true;
//         }
//     };
//     return false;
// };
// let arr = [1,2,3,4,5];
// console.log(arrPrime(arr));

// TASK 5


// let stringg = ['ab','zz','v','bi','B'];
// function b(s){
//     for(let i = 0; i<s.length; i++){
//         if(s[i] == 'b' || s[i] == 'B'){
//             return true;
//         }
//     };
//     return false;
// };


//     let count = 0;
//     for(let i = 0; i<stringg.length; i++){
//         if(b(stringg[i])){
//             count++;
//         }
//     };
//     console.log(count);


// ch(stringg);

// let stringg = ['ab','zz','v','bi'];
// let str = [1,2,3,4,5];
// let s = [0,9,8];
// let  n = stringg.concat(str).concat(s);
// console.log(n);
// let ar = [];
// for(let i = 0; i<stringg.length; i++){
//     ar.unshift(stringg[i]);
// };
// console.log(ar);

// TASK 6

// let arr = [1,2,3,4,5,6,7,8,9];
// let newArr= [];
// for(let i = 0; i<arr.length; i++){
//     if(arr[i]%3 != 0){
//         newArr.push(arr[i]);
//     }
// };
// console.log(newArr);


// TASK 8
// let str = [1,2,3,4,'hi','hello','no'];
// for(let i = 0; i<str.length; i++){
//     if(str[i] == 'hello'){
//         str.splice(i,1);
//     }
// };
// console.log(str);


// TASK 9

// let str = [1,2,3,4,'hi','js','hello','no'];
// for(let i = 0; i<str.length; i++){
//     if(str[i] == 'js'){
//         str.splice(i+1,0,'Angular','React','Node');
//     }
// };
// console.log(str);


// TASK 2
// let arr = [1,2,3,4,5];
// let sum = 0;
// for(let i = 0; i<arr.length; i++){
//     sum = sum + arr[i];
// };
// console.log(sum);


// TASK 3
// let arr = [1,2,3,4,5,12];
// let sum = 0;
// let count = 0;
// for(let i = 0; i<arr.length; i++){
//     if(arr[i]%3 == 0){
//         count++;
//         sum = sum + arr[i];
//     }
// };
// console.log("count is : " + count + " and the sum is : "+ " " + sum);

// TASK 4

// let arr = [1,2,3,4,5,12];
// let sum = 0;
// let oddSum = 0;
// for(let i = 0; i<arr.length; i++){
//     if(arr[i]%2 == 0){
//         sum = sum + arr[i];
//     }else{
//         oddSum = oddSum + arr[i];
//     }
// };

// console.log("odd sum is : " + oddSum);
// console.log("even sum is : " + sum);


// TASK 5
// let arr = [100,200,10,20,50,64];
// let earr = [];
// let count = 0;
// for(let i = 0 ; i<arr.length; i++){
//     if(arr[i] > 21){
//         count++;
//         earr.push(arr[i]);
//     }
// };

// console.log("count is : "+ count);
// console.log("numbers  are : "+ earr);

// TASK 6
// let arr = [2,3,5,7];
// for(let i = 0; i<arr.length; i++){
//     arr[i] = arr[i] + 10;
// };
// console.log(arr);

//TASK 7

// let arr = ['jacxk','harry'];
// for(let i = 0; i<arr.length; i++){
//     arr[i] = 'hello ' + arr[i]; 
// };
// console.log(arr);

// TASK 8

// let arr = [5,18,23,30];
// for(let i = 0; i<arr.length; i++){
//     if(arr[i]%2 != 0){
//         arr[i] = arr[i] + 1;
//     }
// };
// console.log(arr);

// TASK 9

// let arr = [110,8,6,4,2,110];
// if(arr[0] > arr[arr.length - 1]){
//     console.log("First :" + arr[0]);
// }else if(arr[0]< arr[arr.length - 1]){
//     console.log("Last : " + arr[arr.length - 1])
// }else{
//     console.log("Equal : " + arr[0]);
// }


// TASK 10

// let arr1 = [50,100];
// let arr2 = [1,3,4,5,6];


// function findSum(arr){
//     let sum = 0;
//     for(let i = 0; i<arr.length; i++){
//         sum = sum + arr[i];
//     };
//     return sum;
// };

// let sum1 = findSum(arr1);
// let sum2 = findSum(arr2);
// if(sum1 > sum2){
//     console.log("Big1")
// }else if(sum1<sum2){
//     console.log("Big 2")
// }else{
//     console.log("Equal")
// }

// TASK 11

// let arr = [100,200,10,20,50,64];
// let lar = 0;
// for(let i = 0; i<arr.length; i++){
//     let fe = arr[i];
//     let ne = arr[i+1];
//     if(lar < ne){
//         lar = ne;
//         // console.log(`inside if : ${lar}`)
//     }
// };
// console.log(lar);       


// TASK 12

// let arr = [1,1,1,1,1];
// function ch(arr){
//     for(let i = 0; i<arr.length; i++){
//         if(arr[0] != arr[i]){
//             return false;
//         }
//     };
//     return true;
// };

// let ans = ch(arr);
// if(ans == 0){
//     console.log("not Equal");
// }else{
//     console.log("Equal");
// };

// TASK 13

// let arr = [1,2,3,4,5,6,7,8,9,10,11];
// let count = 0;
// for(let i = 0;i<arr.length; i++){
//     let c = arr[i];
//     if(c % 2 == 0 || c% 3 == 0 || c % 5 == 0 || c % 7 == 0 ){
//         count++;
//     }
// };
// console.log(count);



// TASK 16
// let str = "babbb";
// function findAb(str){
//     for(let i = 0; i<str.length; i++){
//         if(str[i] == 'a' && str[i + 1] == 'b'){
//             return true;
//         }
//     };
//     return false;
// };

// let ans = findAb(str);
// if(ans == 0){
//     console.log("AB not FOUND")
// }else{
//     console.log("AB FOUND")
// }

// TASK 14
// function printSequenceOrNot(arr) {
//     let isSequence = true;
//     let min = arr[0];
  
//     // Find the minimum value in the array
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] < min) {
//         min = arr[i];
//       }
//     }
  
//     // Check if the numbers in the array are consecutive
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] !== (min + i)) {
//         isSequence = false;
//         break;
//       }
//     }
  
//     // Print "SEQUENCE" or "NOT"
//     if (isSequence) {
//       console.log("SEQUENCE");
//     } else {
//       console.log("NOT");
//     }
//   }
//   let arr = [12,13,14,15,16,17];
//   printSequenceOrNot(arr)







// TASK 14
// let arr = [12,13,14,15,16,17];
// function ch(arr){
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i + 1] == arr[i] + 1 ){
//             return true;
//         }
//     };
//     return false;
// };
// let count = 0;
// for(let i = 0; i<arr.length; i++){
//     if(ch(arr[i])){
//         count = count + 0;
//     }else{
//         count++;
//     }
// }

// // let ans = ch(arr);
// if(count == 0){
//     console.log("yyo")
// }else{
//     console.log("ne")
// }

// TASK 17

// let arr = [5,18,26,30,40,6,9];
// let newArr = [];
// for(let i = 0; i<arr.length; i++){
//     if(arr[i] %2 == 0){
//         newArr.push(arr[i]);
//     }
// };
// console.log(newArr);


// TASK 18

// let arr = [5,18,26,30,40,6,9];
// let newArr = [];
// for(let i = 0; i<arr.length; i++){
//     if(arr[i] %2 == 0){
//         newArr.unshift(arr[i]);
//     }
// };
// console.log(newArr);



// TASK 19
// let arr = [5,18,26,30,40,6,9];
// for(let i = 0; i<arr.length; i++){
//     console.log(arr.pop());
// }

// TASK 20

// let arr = [5,18,26,30,40,6,9];
// for(let i = 0; i<arr.length; i++){
//     console.log(arr.shift());
// }


// TASK 21

// let arr = ['Jack','Bob','Ed','Steve'];
// let ch = "Steve";
// for(let i = 0; i<arr.length; i++){
//     if(arr[i] == ch){
//         arr.splice(i,1);
//     }
// };
// console.log(arr);


// TASK 22
// let arr = [5,18,26,30,40,6];
// let lar = 0;
// for(let i = 0; i<arr.length; i++){
//     let fe = arr[i];
//     let ne = arr[i + 1];
//     if(ne > fe){
//         lar = ne;

//     }
// };
// // console.log(lar);
// let ans = arr.indexOf(lar);
// arr.splice(ans,1);
// console.log(arr);


// TASK 23

// let arr = [5,18,26,30,40];
// let num = 32;
// for(let i = 0; i<arr.length; i++){
//     if(num> arr[i] && num <arr[i + 1]){
//         arr.splice(i + 1,0,num);
//         break;
//     }
// };
// console.log(arr);

// TASK 24

// let arr = [100,10];
// let arr2 = [20,50,64,200];
// console.log(arr.concat(arr2));


// TASK 25
let arr = [2,3,4,5];
let arr2 = [10,20,30,90,100,78];
let len = (arr.length) + (arr2.length);


for(let i = 0; i<=len; i++){
  if(arr.length == 0){
    console.log(arr2);
    break;
  }
    if(i % 2 == 0){
        if(arr2.length  >0){
          arr.splice(i + 1,0,arr2.shift())

        }
    }
};
console.log(arr);

















// function repeatChar(char, count) {
//     let result = '';
//     for (let i = 0; i < count; i++) {
//       result += 'x';
//     }
//     return result;
//   }
  
//   function insertXAfterChars(str, count) {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//       result += str[i] + repeatChar(str[i], count);
//     }
//     return result;
//   }
  
//   // Example usage
//   const str = 'abc';
//   const result = insertXAfterChars(str, 1);
//   console.log(result); // Output: Axbxxcxxx
  
// let str = "Human";
// let output = "";

// for (let i = 0; i < str.length; i++) {
//   output += str[i]; // Add the current character to the output string
//   for (let j = 0; j <= i; j++) {
//     output += "x"; // Add the appropriate number of x's
//   }
// }

// console.log(output); // Outputs "Axbxxcxxx"

// cy +	d =	m or	cy - d =	m

// let equation = "5y + 10 = 40"; // example equation
// let c = 0, d = 0, m = 0, y = 0;
// let isPositive = true, isYFound = false;

// // Loop through each character of the equation string
// for (let i = 0; i < equation.length; i++) {
//   let currentChar = equation[i];

//   if (currentChar >= '0' && currentChar <= '9') {
//     // If the current character is a number, add it to the appropriate variable
//     if (!isYFound) {
//       c = c * 10 + parseInt(currentChar);
//     } else if (isPositive) {
//       m = m * 10 + parseInt(currentChar);
//     } else {
//       d = d * 10 + parseInt(currentChar);
//     }
//   } else if (currentChar === '+') {
//     // If the current character is '+', set isPositive to true
//     isPositive = true;
//   } else if (currentChar === '-') {
//     // If the current character is '-', set isPositive to false
//     isPositive = false;
//   } else if (currentChar === 'y') {
//     // If the current character is 'y', set isYFound to true
//     isYFound = true;
//   }
// }

// if (equation.includes("+")) {
//   // equation is of the form "cy + d = m"
//   y = (m - d) / c;
// } else {
//   // equation is of the form "cy - d = m"
//   y = (m + d) / c;
// }

// console.log(parseInt(y)); // Outputs the value of y











//task 6
// let str = "hiiiihihvihh"; // example string
// let count = 0; // initialize count to zero

// for (let i = 0; i < str.length; i++) {
//   let char = str[i];
//   let isDuplicate = false;

//   // compare this character with all the characters that come after it
//   for (let j = i+1; j < str.length; j++) {
//     if (char === str[j]) {
//       // if the characters match, this is a duplicate
//       isDuplicate = true;
//       break; // no need to continue comparing
//     }
//   }

//   if (!isDuplicate) {
//     // if we didn't find any duplicates, increment the count
//     count++;
//   }
// }

// console.log(count); // Outputs the number of different characters


// Given	the	marks	of	4 subjects	Maths,	English, Computers and	Science	as	input.	
// On	the	console	print	the	marks	in	each	subject	along	with	its	grade. Grades	are	
// defined	as	>=80	is	A,	<80	and	>=60	is	B	and	<60 and	>=40	is	C	and	<40	is	D.
// Also	print	the	subject	in	which	the	highest	was	scored.

// Maths	:	82	:	A
// English	:	70	:	B
// Computers	:	66	:	B
// Science	:	84	:	A
// Highest marks	:	Science

// function ch(n){
//     if(n>=80){
//         return 'A';
//     }else if(n>= 60){
//         return 'B';
//     }else if(n >= 40){
//         return 'C';
//     }else{
//         return 'D';
//     }
// };

// let math = 8;
// let Science = 84;
// let english = 70;
// let computers = 606;


// console.log("Maths : " + math + " : " + ch(math))
// console.log("Science : " + Science + " : " + ch(Science))
// console.log("English : " + english + " : " + ch(english))
// console.log("Computers : " + computers + " : " + ch(computers))
// if(math> Science){
//     if(math>english){
//         if(math>computers){
//             console.log("Heighest marks : Maths")
//         }
//     }
// }
// if(Science> math){
//     if(Science>english){
//         if(Science>computers){
//             console.log("Heighest marks : Science")
//         }
//     }
// }
// if(english> math){
//     if(english>Science){
//         if(english>computers){
//             console.log("Heighest marks : english")
//         }
//     }
// }
// if(computers> math){
//     if(computers>Science){
//         if(computers>english){
//             console.log("Heighest marks : computers")
//         }
//     }
// }

// let str1	=	"456789456789456";
// let str2	=	"456780009899765";


// function sum(str){
//     let ans = 0;
//     for(let i = 0; i<str.length; i++){
//         ans = ans + str[i];
//     };
//     return ans;
// };

// let ans1 = sum(str1);
// let ans2 = sum(str2);

// if(ans1> ans2){
//     console.log(str1);
// }else if(ans1<ans2){
//     console.log(str2);
// }else{
//     console.log("Equal")
// }

// let str = "hi@hi.com";
// let count = 0;
// let count2 = 0;
// for(let i = 0; i<str.length; i++){
//     if(str[0] >= '0' && str[0] <= '9'){
//         console.log("NOT PROPER");
//         break;
// }else if(str[0] == '@'){
//     console.log("NOT PROPER");
//     break;
// }else{
//     if(str[i] == '@'){
//         count++;
//     };

//     if(str.includes('.com') == 1){
//         count2++;
//     }
// }
// };

// if(count > 0 && count2 > 0){
//     console.log("PROPER")
// }else{
//     console.log("NOT PROPER")
// }

// // task 6
// let str = "a+b+c+d+e"; // example string
// let count = 0; // initialize count to zero

// for (let i = 0; i < str.length; i++) {
//   let char = str[i];
//   let isDuplicate = false;

//   // compare this character with all the characters that come after it
//   for (let j = i+1; j < str.length; j++) {
//     if (char === str[j]) {
//       // if the characters match, this is a duplicate
//       isDuplicate = true;
//       break; // no need to continue comparing
//     }
//   }

//   if (!isDuplicate) {
//     // if we didn't find any duplicates, increment the count
//     count++;
//   }
// }

// console.log(count); // Outputs the number of different characters



// %%%%%%%%%%%%$$$$$$$$$$$$$$$ JSON &&&&&&&&&&&&&&&^%%%%%%%%%%%%%%%%%$$$$$$$$$$$$$$$

// // let me = {
// //     name : "Vivek Kumar",
// //     age : 25,
// //     completed : ['Array','If-Else'],
// //     pending : true
// // };

// // let me2 = {
// //     name : "Pranav",
// //     age : 25,
// //     completed : ['Array','If-Else'],
// //     pending : true
// // };
// // let me3 = {
// //     name : "sarthak",
// //     age : 25,
// //     completed : ['Array','If-Else'],
// //     pending : true
// // };
// // let me4 = {
// //     name : "Hii",
// //     age : 25,
// //     completed : ['Array','If-Else'],
// //     pending : true
// // };

// // // console.log(me);
// // // me.name = "Vivek Singh Rajput";
// // // console.log(me);
// // // me.completed.push("functions");
// // // console.log(me);

// // // for(let i = 0; i< me.completed.length; i++){
// // //     console.log(me.completed[i]);
// // // }
// // let prof = {
// //     name : 'Manoj Dhuan',
// //     age : 35
// // };

// // let meArr = [me,me2,me3,me4];
// // console.log(meArr);
// // for(let i = 0 ; i<meArr.length; i++){
// //     meArr[i].facualty = prof;
// //     console.log(meArr[i]);

// // };

// let emp1 = {
//     name : "Vivek",
//     dept : "Software Engineering",
//     designation : "SDE",
//     salary : 200,
//     raise : true
// };
// let emp2 = {
//     name : "S",
//     dept : "UPsc",
//     designation : "IAS",
//     salary : 200,
//     raise : false
// };
// let emp3 = {
//     name : "pARI",
//     dept : "Queen",
//     designation : "Queen",
//     salary : 200,
//     raise : true
// };
// let emp4 = {
//     name : "Lala",
//     dept : "Engineering",
//     designation : "Kabadi",
//     salary : 200,
//     raise : false
// };
// let emp5 = {
//     name : "Prikshit",
//     dept : "Police",
//     designation : "SI",
//     salary : 200,
//     raise : true
// };

// let empolyee = [emp1,emp2,emp3,emp4];
// console.log(empolyee);

// let company = {
//     compName : "Private Technologies",
//     website : "www.PrivateTechnologies.com",
//     empolyee : empolyee
// }
// company.empolyee.push(emp5);
// console.log(company);
// // let total = 0;
// // for(let i = 0; i< company.empolyee.length; i++){
// //     total = total + company.empolyee[i].salary;
// // };
// // console.log(total);

// // for(let i = 0; i<company.empolyee.length; i++){
// //     if(company.empolyee[i].raise == true){
// //         company.empolyee[i].salary = company.empolyee[i].salary * 10;
// //         company.empolyee[i].raise = false;
// //     }
// // };
// let names = ['vivek','s'];
// // let wfh = {
// //     wfh : true
// // }
// for(let i = 0; i<company.empolyee.length; i++){
//     let empArr = company.empolyee;
//     if(isPres(empArr.name, names)){
//         empArr[i].wfh = true;
//     }else{
//         empArr[i].wfh = false;
//     }
// };

// function isPres(val,arr){
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] == val){
//             return true;
//         }
//     };
//     return false;
// };
// console.log(company);

// TASK 2

// let data1 = {
//     name : "Mark",
//     email : "mark@email",
//     salary : 8000
// };
// console.log(data1);

// TASK 3.1

// let data2 = {
//     billid : 45661,
//     amount : 2500
// };

// console.log(data2);

// // TASK 3.2
// data2.amount = 2700;
// console.log(data2);

// TASK 4

// let data1 = {
//     billid : 401,
//     amount: 200
// };
// let data2 = {
//     billid : 401,
//     amount: 500
// };

// console.log(data1.amount + data2.amount);

// TASK 5

// let data = {
//     id : "EMP1223",
//     email : "emp1223@email.com",
//     company : "EMP Inc"
// };

// console.log(data);

// TASK 6
// let p1 = {
//     code : "PX101",
//     stock : 15,
//     price : 30
// };
// let p2 = {
//     code : "PX102",
//     stock : 24,
//     price : 20
// };
// let p3 = {
//     code : "PX103",
//     stock : 33,
//     price : 10
// };

// let p4 = {
//     code : "PX104",
//     stock : 10,
//     price : 40
// };
// // console.log(p1,p2,p3);
//  let prodArr = [p1,p2,p3];

// // TASK 6.2
// let shop = {
//     poducts : prodArr
// };
// // console.log(shop);

// // TASK 6.3

// function totalQuantity(shop){
//     let prod = shop.poducts;
//     let sum = 0;
//     for(let i = 0; i<prod.length; i++){
//         sum = sum + prod[i].stock;
//     };

//     return sum;
// };

// // TASK 6.4

// shop.poducts.push(p4);
// let totalStock = totalQuantity(shop);
// shop.totalStock = totalQuantity(shop);
// // console.log(totalStock);
// // console.log(shop);

// // let totalStock = totalQuantity(shop);
// // shop.totalStock = totalQuantity(shop);
// // console.log(totalStock);
// // console.log(shop);

// // TASK 6.5
// function checkfun(code, name){
//     for(let i = 0; i<name.length; i++){
//         if(code == name[i]){
//             return true;
//         }
//     };
//     return false;
// }

// let newprice = ['PX102','PX103'];
// let prod = shop.poducts;
// for(let i = 0; i< prod.length; i++){
//     if(checkfun(prod[i].code , newprice)){
//         prod[i].price = prod[i].price + 100;
//     }
// };

// console.log(shop);

// TASK 7.1

let st1 = {
    name: "Mark",
    math: 80,
    english: 75,
    science: 63,
  };
  let st2 = {
    name: "Bob",
    math: 90,
    english: 81,
    science: 88,
  };
  let st3 = {
    name: "Julia",
    math: 88,
    english: 87,
    science: 89,
  };
  let st4 = {
    name: "Anthony",
    math: 60,
    english: 64,
    science: 61,
  };
  
  let students = [st1, st2, st3, st4];
  // students[0].computer = 89;
  console.log(students);
  
  // TASK 7.2
  
  let a = [
    { name: "Anthony", Computers: 70 },
    { name: "Mark", Computers: 90 },
    { name: "Julia", Computers: 88 },
    { name: "Bob", Computers: 81 },
  ];
  // let count = 0;
  for (let i = 0; i < students.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (students[i].name == a[j].name) {
        students[i].Computers = a[j].Computers;
      }
    }
  }
  
  // TASK 7.3
  
  function totalMarks(s){
      let sum = 0;
      sum = sum + s.Computers + s.english + s.math + s.science;
      // console.log(sum);
      return sum;
  }
  
  // TASK 7.4
  
  function avgMarks(s){
      let avg = 0;
      avg = s.Computers + s.english + s.math + s.science /4;
      // console.log()
      return avg;
  }
      function maxMarks(s){
          let max = s.english;
          if(s.math > max){
              max = s.math;
          };
  
          if(s.science > max){
              max = s.science;
          };
  
          if(s.Computers > max){
              max = s.Computers;
          }
  
          return max;
      }
  // 
  for(let i = 0; i< students.length; i++){
      students[i].total = totalMarks(students[i]);
      students[i].Average = avgMarks(students[i]);
      students[i].Max = maxMarks(students[i]);
  }
  // console.log(students.total);
  for(let i = 0; i<students.length; i++){
      console.log("Total marks of "+ students[i].name +"  "+ students[i].total)
      console.log("Average marks of "+ students[i].name +"  "+ students[i].Average)
      console.log("Maximum marks of "+ students[i].name +"  "+ students[i].Max)
  }
  // TASK 7.3
  // function totalMarks(students) {
    
    
  // Bob has left the school. Find the JSON corresponding to Bob and use splice to remove it from the array.
  
  
  // for(let i = 0; i<students.length; i++){
  //     // students[i].totalmarks = totalMarks(students);
  //     let total = 0;
  //     for (let j = 0; j < j; i++) {
  //         total =
  //           total +
  //           students[i].english +
  //           students[i].math +
  //           students[i].science +
  //           students[i].Computers;
  //       }
  //       console.log(total);
        
  // }
  
  // function ch(cn,a){
  //     for(let i = 0; i<a.length; i++){
  //         if(cn == a[i].name){
  //             return true;
  //         }
  //     };
  //     return false;
  // };
  
  // TASK 7.5
  // for(let i = 0; i<students.length; i++){
  //     if(students[i].name == 'Bob'){
  //         students.splice(i,1);
  //     }
  // }
  
  // console.log(students);

  

  // ARRAY METHODS #######################################################################################
  // TASK 1
let num = [1,3,5,7,16,18,29,0,14,2,3,4];
let x = 3;

function gr(num,x){
   return num > x;
}
let firstg = num.find(function(elem){
  return  gr(elem,x);
})

let firstI = num.findIndex(function(elem){
    return gr(elem,x);
})

let ar = num.filter(function(elem){
    return gr(elem,x)
})
console.log(firstg);
console.log(firstI);
console.log(ar);


// let val = num.findIndex(function(numi){
//     return numi %2 == 0;
// });

// let val = num.find((elem)=>{
//     console.log("va" + elem)
//     return elem > 116;
// })
// console.log(val);
// console.log(num.find(num%2 == 0));


// TASK 2
// let names = ['vivek','shiv','aka','vijay'];
// let ch = 'v';

// function findEvery(arry,charr){
//     return arry[0] == ch;
// }

// let f = names.find(function(n){
//     return findEvery(n,ch);
// });

// let inde = names.findIndex(function(elem){
//     return findEvery(elem,ch);
// })

// let fil = names.filter(function(elem){
//     return findEvery(elem,ch)
// })
// console.log(fil);
// console.log(inde);

// console.log(f);


// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ JSON $$$$$$$$$$$$$$$$$$$$$$$

// // // Mark scored 80, 75 and 63 in Maths, English and Science.

// // // Bob scored 90, 81 and 88 in Maths, English and Science.
// // // Julia scored 88, 87 and 89 in Maths, English and Scienc

// // let s1 = {
// //   name :"Mark",
// //   Maths : 80,
// //   English : 75,
// //   science : 63
// // };
// // let s2 = {
// //   name :"Bob",
// //   Maths : 90,
// //   English : 81,
// //   science : 88
// // };
// // let s3 = {
// //   name :"Mark",
// //   Maths : 88,
// //   English : 87,
// //   science : 89
// // };
// // let s4 = {
// //   name :"Anthony",
// //   Maths : 87,
// //   English : 67,
// //   science : 60
// // };

// // let students = [s1,s2,s3];
// // students.push(s4)
// // // console.log(students);

// // let computer =  [{name:'Mark', Computers:90},
// // {name:'Anthony', Computers:70},
// // {name:'Julia', Computers:88},
// // {name:'Bob', Computers:81}]


// // for(let i = 0; i< students.length; i++){
// //   for(let j = 0; j<computer.length; j++){
// //     if(students[i].name == computer[j].name){
// //       students[i].computer = computer[j].Computers;
// //     }
// //   }
// // }

// // function maxi(s){
// //   console.log(s);
// //   console.log(s.name);
// // }

// // function totalMarks(s){
// //   let total = 0;
// //   total = total + s.Maths + s.English + s.science + s.computer ;
// //   console.log(total);
// //   return total;
// // }
// // for(let i = 0; i<students.length; i++){
// //   students[i].totalMark = totalMarks(students[i]);
// //   students[i].MaximunMark = maxi([students[i]]);
// // }

// // console.log(students);
// // TASK 1

// // let arr = [1,2,3,4,5,6,7,8,9,10];
// // let x = 6;
// // function check3(num,x){
// //   return num > x;
// // };

// // let firsts = arr.find((n)=>{
// //   return check3(n,x);
// // });

// // let firstI = arr.findIndex((n)=>{
// //   return check3(n,x);
// // });

// // let firarr = arr.filter((n)=>{
// //   return check3(n,x);
// // })

// // console.log(firstI + "  " + firsts);
// // console.log(firarr);


// // TASK 2

// // let names = ['vivek','jaya','sarthak','amit','di','vi','hi'];
// // let ch = 'v';

// // function checkch(c){
// //   return c[0] == ch;

// // }

// // let f = names.find(function(elem){
// //   return checkch(elem);
// // });

// // let fi = names.findIndex((elem)=>{
// //   return checkch(elem);
// // })

// // let fa = names.filter((elem)=>{
// //   return checkch(elem);
// // })
// // console.log(f);
// // console.log(fi);
// // console.log(fa);


// // TASK 3

// // let emp = [
// //   {name : "vivek", city : "gaya" , dept : "tech"},
// //   {name : "sarthak", city : "sonipat" , dept : "no tech"},
// //   {name : "pranav", city : "sirsa" , dept : "kabadi"},
// //   {name : "divya", city : "gazipur" , dept : "govt"},
// //   {name : "singh", city : "gaya" , dept : "tech"}
// // ];

// // let cityy = "gaya";
// // let deptt = "tech";

// // function ch(ob,c,d){
// //   return ob.city == c && ob.dept == d;
// // }
// // let f = emp.find(function(elem){
// //   // console.log(elem.name)
// //   return ch(elem,cityy,deptt);
// // });

// // let ar = emp.filter((elem)=>{
// //   return ch(elem,cityy,deptt);
// // })

// // console.log(f);
// // console.log(ar);


// let names = ['vivek','jaya','sarthak','amit','di','vi','hi'];
// let name2 = ['divya'];

// let al = [...name2,...names];
// console.log(al);
// console.log(names.join(' $ '))



//  APNA TIME AA GAYA 

// console.log("Got placed in april with a pakage of 22 lpa");

// let p1 = {
//     code : "PX101",
//     stock : 10,
//     price : 300
// };
// let p2= {
//     code : "PX102",
//     stock : 0,
//     price : 200
// };
// let p3 = {
//     code : "PX103",
//     stock : 30,
//     price : 100
// };
// let p4 = {
//     code : "PX104",
//     stock : 4,
//     price : 50
// };

// let incre = [
//     {code : "PX101"},
//     {code : "PX104"}
// ]
// let shop = [p1,p2,p3];
// shop.push(p4);

// for(let i = 0; i<shop.length; i++){
//     for(let j = 0; j<incre.length; j++){
//         if(shop[i].code == incre[j].code){
//             shop[i].price = shop[i].price + 1000;
//         }
//     }
// };

// for(let i = 0; i<shop.length; i++){
//     // console.log("hi");
//     if(shop[i].stock == 20){
//         shop[i].price = shop[i].price + 2000;
//     }
// };

// function totalStock(ob){
//     let sum = 0;
//     sum = sum + ob.stock;
//     return sum;
// };
// let total = 0;
// for(let i = 0; i< shop.length; i++){
//     total  = total + totalStock(shop[i]);
//     shop[i].totalStock = total;
// };
// for(let i = 0; i< shop.length; i++){
//     // total  = total + totalStock(shop[i]);
//     shop[i].totalStock = total;
// };
// console.log(total);
// console.log(shop);
// let he = document.getElementById("h");
// he.innerText = total;

// function ch(ob){
//     if(ob.stock == 0){
//         return true;
//     };
//     return false;
// }
// for(let i = 0; i<shop.length; i++){
//     if(ch(shop[i])){
//         shop.splice(i,1);
//     }
// };

// console.log(shop);

let n = ["vivek","vinay","akash","vikas","pranav","sarthak"];
let ch = 'v';
function re(elem,c){
    return elem[0] == c;
}
function findName (nameArr,tofine){
    let f = nameArr.filter(function(elem){
        return elem[0] == tofine;
    });
    return f;
};

console.log(findName(n,ch));
// let fi = n.filter(function(elem){
//     return elem[0] == ch;
// });

// console.log(f);
// console.log(fi);