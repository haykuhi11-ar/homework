const array = [1, 2, 10, 20, 30, 700];
/* let result = array.some( function ( num, index, array) {
    return num % 10 === 0;
});
*/
function some( array ) {
for ( let i = 0; i < array.length; ++i ) {
    if ( array[i] % 10 === 0 ) return true;
}
return false;
}
let result = some( array );
console.log(result);
