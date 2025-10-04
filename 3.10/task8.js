
let expenses = [50, 75, 100]; 

function sum_arr( arr ){
var sum = 0;
for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
    }
    return sum;
}
console.log(sum_arr(expenses));