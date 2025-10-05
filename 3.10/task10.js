
const arr = [4, 8, 34, 20, 9, 3];

function sum_of_elements( arr ) {
    let sum = 0;
    for ( let i = 0; i < arr.length; ++i ) {
        sum += arr[i];
    }   
    return sum;
}

let result = sum_of_elements( arr );
console.log( result );