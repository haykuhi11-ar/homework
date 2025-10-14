/*   arr.forEach (function (num, index, array){
    array[index] = num * 2;
});   */ 
function fn(value) {
    let result = value * 2;
    console.log(result);
}

function forEach( array, fn ) {
    for ( let i = 0; i < array.length; ++i ) {
        fn(array[i]);
    }
    return;
}
const arr = [1,2,3,4];
forEach( arr, fn );