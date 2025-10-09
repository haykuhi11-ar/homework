let arr = [1,2,3,4];

/*   arr.forEach (function (num, index, array){
    array[index] = num * 2;
});   */ 
function forEach( array ) {
    for ( let i = 0; i < array.length; ++i ) {
        array[i] *= 2;
    }
    return array;
}
console.log( forEach(arr) );
