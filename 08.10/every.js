const array = [ 1, 2, 10, 20, 30, 700];
/*let result = array.every( function ( num, index, array) {
    return num % 10 === 0;
});
*/
function every( array ) {
    let f = 0;
    for ( let i = 0; i < array.length; ++i ) {
        if ( array[i] % 10 === 0 ) f++;
        if ( f === array.length ) return true;
    }
    return false;
}
let result = every( array );
console.log( result );

