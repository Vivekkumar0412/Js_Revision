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

let p1 = {
    code : "PX101",
    stock : 10,
    price : 300
};
let p2= {
    code : "PX102",
    stock : 0,
    price : 200
};
let p3 = {
    code : "PX103",
    stock : 30,
    price : 100
};
let p4 = {
    code : "PX104",
    stock : 4,
    price : 50
};

let incre = [
    {code : "PX101"},
    {code : "PX104"}
]
let shop = [p1,p2,p3];
shop.push(p4);

for(let i = 0; i<shop.length; i++){
    for(let j = 0; j<incre.length; j++){
        if(shop[i].code == incre[j].code){
            shop[i].price = shop[i].price + 1000;
        }
    }
};

for(let i = 0; i<shop.length; i++){
    // console.log("hi");
    if(shop[i].stock == 20){
        shop[i].price = shop[i].price + 2000;
    }
};

function totalStock(ob){
    let sum = 0;
    sum = sum + ob.stock;
    return sum;
};
let total = 0;
for(let i = 0; i< shop.length; i++){
    total  = total + totalStock(shop[i]);
    shop[i].totalStock = total;
};
for(let i = 0; i< shop.length; i++){
    // total  = total + totalStock(shop[i]);
    shop[i].totalStock = total;
};
console.log(total);
console.log(shop);
let he = document.getElementById("h");
he.innerText = total;

function ch(ob){
    if(ob.stock == 0){
        return true;
    };
    return false;
}
for(let i = 0; i<shop.length; i++){
    if(ch(shop[i])){
        shop.splice(i,1);
    }
};

console.log(shop);