
let numList = [3, 6, 9, 12];
var num = 9;

function arr_index( arr, num ) {
let i = 0;
while ( i < arr.length ) {
    if (num === arr[i]) {
        break;
    }
    else { return -1; }
    i++;
}
return i;
}
let index = arr_index(numList, num);
console.log(index);