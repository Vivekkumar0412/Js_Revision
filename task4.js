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