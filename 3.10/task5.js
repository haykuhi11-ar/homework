
let array1 = [1, 2]; 
let array2 = [ 3, 4];
let size1 = array1.length;
let size2 = array2.length;
let arr = [size1 + size2];
for ( let i = 0; i < size1; ++i) {
    arr[i] = array1[i];
}
for ( let j = 0; j < size2; ++j) {
    arr[size1 + j] = array2[j];
}

console.log(arr);