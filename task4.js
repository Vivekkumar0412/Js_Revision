// let arr = [1,2,3,4,5,6,7,78,8,9];
// let x = 4;
// function all (elem,x){
//     return elem > x;
// };

// let firstVal = arr.find(function(elem){
//     // all(elem,x);
//     return all(elem,x);
// });

// let firstIndex = arr.findIndex(function(elem){
//     return all(elem,x);
// })
// let filterFirst = arr.filter(function(elem){
//     return all(elem,x);
// })

// // let f = arr.find()
// console.log(firstVal);
// console.log(firstIndex);
// console.log(filterFirst);

// let ar2 = ["vivek","singh","rajput"];
// let check = (arr,ch)=>{
//     let f = arr.find((elem)=>{
//         return elem[0] == ch;
//     })
//     return f;
// };

// let f = check(ar2,"s");
// console.log(f);

// let allii = [...ar2,...arr];
// console.log(allii);

// allii.find(elem=> console.log(elem))

// let j = arr.join(" & ");
// for(let i = 0; i<j.length; i++){
//     console.log(j[i]);
//     // console.log(j[i]);
// }

let arr = [2,3,5,75,31,234,57,8,9,4322,1,2,3];
let s = (a,b)=>{
    if(a>b){
        return 1;
    }else if(b>a){
        return -1;
    }else{
        return 0;
    }
};

console.log(arr.sort(s));

let ar =[
    {name : "vivek" , age : 24},
    {name : "akash" , age : 24},
    {name : "pranav" , age : 40},
    {name : "sarthak" , age : 34},
    {name : "lala" , age : 19},
    {name : "prikshit" , age : 90},
    {name : "shreyansh" , age : 10},
    {name : "binaod" , age : 10},
];

// console.log(ar.sort((a,b)=>{
//     if(a.name[0]< b.name[0]){
//         return -1;
//     }else if(a.name[0]>b.name[0]){
//         return 1;
//     }else{
//         return 0;
//     }
// }));
console.log(ar.sort((a,b)=>{
    if(a.name[0]<b.name[0]){
        return -1;
    }else if(a.name[0]>b.name[0]){
        return 1;
    }else{
        return 0;
    }
}))
// console.log(ar.sort((a,b)=>{
//     return b.age-   a.age ;
// }))

// let name = ["vivek","akasj","jia","vipul"];

// console.log(name.sort((a,b)=>{
//     if(a[0]<b[0]){
//         return -1;
//     }else if(a[0]>b[0]){
//         return 1;
//     }else{
//         return 0;
//     }
// }))

let sales = [
    {name : "pepsi", price : 30, quantity : 10},
    {name : "coke", price : 50, quantity : 10},
    {name : "limca", price : 40, quantity : 100},
    {name : "maza", price : 30, quantity : 100},
    {name : "frooty", price : 35, quantity : 100},
    {name : "mountain dew", price : 90, quantity : 1000}
];

for(let i = 0; i<sales.length; i++){
    sales[i].value = sales[i].price * sales[i].quantity;
}

console.log(sales.sort((a,b)=>{
    if(a.quantity * a.price < b.quantity * b.price){
        return -1;
    }else if(a.quantity * a.price > b.quantity * b.price){
        return 1;
    }else{
        return 0;
    }
}));