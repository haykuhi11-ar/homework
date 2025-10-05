
let num = 19;

function happy_number( num ) {

    let loop = 0;

    while ( num !== 1 && loop <= 5 ) {
   
        let digits = [];
        let number = num;
        
        while ( number > 0) {
            digits.push( number % 10 );
            number = Math.floor( number / 10 );
        }
        //digits = num.toString().split('').map(Number);  

            let sum = 0;
            for ( let i = 0; i < digits.length; ++i ) {
                sum += digits[i] * digits[i]; 
            }
            num = sum;
            loop++; 
    } 
    return num;
}
    let res = happy_number( num );
    console.log( res ); 