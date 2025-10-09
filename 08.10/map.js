const array = ['banana', 'apple','lemon', 'melon', 'cherry']; 
let fruit = []; 
/*
array.map(function(word, index, array1) {
    fruit[index] = word;
    return array1;
});  */
function map( array1, array2 ) {
    for ( let i = 0; i < array1.length; ++i ) {
        array2[i] = array1[i];
    }
    return array2;
}
console.log( map( array, fruit ) );