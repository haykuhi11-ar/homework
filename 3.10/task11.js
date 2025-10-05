
let number = 12;

function even_or_odd( number ) {
    if ( number % 2 === 0 ) {
        return "even";
    }
    else { return "odd"  }
}

let result = even_or_odd( number );
console.log( result );
