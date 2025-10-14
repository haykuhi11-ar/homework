/*let result = array.every( function ( num, index, array) {
    return num % 10 === 0;
});
*/
function fn( value ) {
    if ( value % 10 === 0 ) return true;
}
function every( array, fn ) {
    let result = 0;
    let flag = 0;
    for ( let i = 0; i < array.length; ++i ) {
         result = fn(array[i]);
         if(result) ++flag;
        }
        flag === array.length ? result = true : result = false;   
        return result;
}
const array = [ 10, 20, 30, 700];
let res = every(array,fn); 
console.log(res);