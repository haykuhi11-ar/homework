
let array1 = [1, 2]; 
let array2 = [ 3, 4];
let arr = [array1.length, array2.length];

for(let i = 0; i < array1.length; i++) {
arr[i] = array1[i];
arr[i + array2.length] = array2[i];
}
console.log(arr);