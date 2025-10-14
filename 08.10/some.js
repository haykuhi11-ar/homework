const array = [1, 2, 10, 20, 30, 700];
/* let result = array.some( function ( num, index, array) {
    return num % 10 === 0;
});
*/

 function fn (value) {
     if ( value % 10 === 0 ) return true;
    return false;
}
function some(array, fn) {
    for ( let i = 0; i < array.length; ++i ) {
        let res = fn(array[i]);
        if (res)  return true;
    }
return false;
}
console.log(some(array, fn));