
let str = "hello";
function reverse(str){
    let res = "";
    let i = str.length - 1;
    while(i >= 0){
        res += str[i];
        i--;
    }
    return res;
}
console.log(reverse(str));
