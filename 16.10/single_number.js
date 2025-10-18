const arr = [2,2,4];
function single_number(arr) {
let res = 0;
const size = arr.length; 
for (let i = 0; i < size; i++) {
    res ^= arr[i];
}
return res;
}
console.log(single_number(arr));

