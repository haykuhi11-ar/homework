let array = [1, 2, 10, 20, 30, 700];

//let result = array.indexOf( 700, 4 );

function index_Of ( search_element, from_index ) {
for ( let i = from_index; i < array.length; ++i ) {
    if ( array[i] === search_element ){
        return i;
    }
}
return -1;
}
let result = index_Of( 700, 2 );
console.log( result );


