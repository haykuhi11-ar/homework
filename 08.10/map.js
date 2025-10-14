const array = ['banana', 'apple','lemon', 'melon', 'cherry']; 
let fruit = []; 
/*
array.map(function(word, index, array1) {
    fruit[index] = word;
    return array1;
});  */
function foo(value) {
    return value + "**";
}
function map( array, fn ) {
    let arr = [];
    for ( let i = 0; i < array.length; ++i ) {
        arr.push(fn(array[i])); 
    }
    return arr;
}
console.log( map( array, foo) );