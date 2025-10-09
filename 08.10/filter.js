const array1 = [15, 67, 98, 107, 111, 215, 224];
/*  let array2 = array1.filter ( function ( number, index, array1 ) {
  return  number % 2 === 0;
});  */
function filter( array ) {
    let result_arr = [];
    for ( let i = 0; i < array.length; ++i ) {
        if ( array[i] % 2 === 0 )  result_arr.push( array[i] ); 
    }
    return result_arr;
}
let array2 = filter( array1 );
console.log( array2 );

