let arr = [1,2,3,4,5,6,7,78,8,9];
let x = 4;
function all (elem,x){
    return elem > x;
};

let firstVal = arr.find(function(elem){
    // all(elem,x);
    return all(elem,x);
});

let firstIndex = arr.findIndex(function(elem){
    return all(elem,x);
})
let filterFirst = arr.filter(function(elem){
    return all(elem,x);
})

// let f = arr.find()
console.log(firstVal);
console.log(firstIndex);
console.log(filterFirst);

let ar2 = ["vivek","singh","rajput"];
let check = (arr,ch)=>{
    let f = arr.find((elem)=>{
        return elem[0] == ch;
    })
    return f;
};

let f = check(ar2,"s");
console.log(f);
