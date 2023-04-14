

// how to chnage the title of web page when user is not on page;

 let doc_title = document.title;
 console.log(doc_title);
 window.addEventListener("blur",()=>{
    document.title = "come back soon :(";
 });

 window.addEventListener("focus",()=>{
    document.title = doc_title;
 });

   // Map in javascript
let ar = [1,2,3,4,455,6,78,9];
let ar2 = ar.map((elem)=>{
    return elem + 100;
});


let srq_num = (num)=>{
    return num * num;
};

console.log(ar.map((elem)=>{
    return srq_num(elem);
}))

let ar3 = [1,2,4,-5,-7,-9,-10,10,11];
let ar4 = ar3.map((elem)=>{
    if(elem >= 0){
        return elem;
    }else{
        return elem * -1;
        
    }
});

console.log(ar4);
// console.log(ar);
// console.log(ar2);

let names = ["vivek","sarthak","divya"];
let name_in_string = names.map((elem)=>{
    return `<p> ${elem} </p>`;
});

console.log(name_in_string);
// console.log(names.map((elem)=>{
//     return elem.toUpperCase();
    
// }))

// for(let i = 0; i<names.length; i++){
//     // names[i][0] = names[i][0].toUpperCase();
//     // names[i].toUpperCase();
//     // console.log(names[i][0]);
//     console.log(names[i]);
//     names[i][0] = names[i][0].toUpperCase()
    
// };

// console.log(names);

let products = [
    {name : "perk", quantity : 20, price : 10},
    {name : "munch", quantity : 200, price : 90},
    {name : "5 star", quantity : 10, price : 70},
    {name : "kit-kat", quantity : 40, price : 100},
    {name : "dairy-milk", quantity : 80, price : 50}
];

let products_value = products.map((elem)=>{
    let json1 = {name : elem.name, value : elem.quantity * elem.price};
    return json1;
});
products_value.sort((a,b)=>{
    if(a.value < b.value){
        return -1;
    }else if(a.value > b.value){
        return 1;
    }else{
        return 0;
    }
})
console.log(products_value);
for(let i = 0; i<products_value.length; i++){
    let h1 = document.createElement("p");
    h1.setAttribute("class","h11");
    h1.append(`Product is ${products_value[i].name} and it's value is ${products_value[i].value}`);
    document.body.appendChild(h1);
}
// console.log(products);
