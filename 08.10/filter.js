/*  let array2 = array1.filter ( function ( number, index, array1 ) {
  return  number % 2 === 0;
});  */
function fn(value) {
  if ( value % 2 === 0 ) return true;
}
function filter( array, fn ) {
    let result_arr = [];
    for ( let i = 0; i < array.length; ++i ) {
      let res = fn(array[i]);
         if(res) result_arr.push( array[i] ); 
    }
    return result_arr;
}
const array1 = [15, 67, 98, 107, 111, 215, 224];
let array2 = filter( array1, fn );
console.log( array2 );

