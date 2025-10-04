/*
function to_upper( str ) { 
    var i = 0;
    let string = "";
    let alphabet = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"

    while( str[i] !== undefined){

    let f = 0;
    for(let j = 0; j < alphabet.length; j += 2) {

    if(str[i] === alphabet[j]){
    
        string += alphabet[j+1];
        f = 1;
        break;
    }
        
}
    if (f == 0) { string += str[i]; }
    i++;
}
return string;
}         

let str = "homework";
console.log(to_upper(str));
*/



function to_upper( str ) {
    let i = 0;
    let upper = "";
    var size = str.length; 


    while (i < size){
        let flag = 0;
        if( str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
            upper += String.fromCharCode(str.charCodeAt(i) - 32);
            flag = 1;
        }
       
         if ( flag == 0) {
            upper += str[i];
        }
        i++;
    }
    return upper;
}

let str = "homework";
console.log(to_upper(str));