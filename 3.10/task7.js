
let numList = [3, 6, 9, 12];
var num = 3;

function arr_index( arr, num ) {
let i = 0;
while ( i < arr.length ) {
    if (num === arr[i]) {
        return i;
        break;
    }
    i++;
}
return -1;
}
let index = arr_index(numList, num);
console.log(index);