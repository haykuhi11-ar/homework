
let string = "Learninf JavAcJavaript";
let str = "Java";

function java( str1, str2) {
    let f = "";
for (let i = 0; i < str.length; i++) {
    for(let j = 0; j < string.length; j++) {
        if (str[i] === string[j]) {
            f += str[i];
            break;
        }
        
    }
}
if( str.length === f.length) {
    return true;
}
}
let res = java(string, str);
console.log(res);