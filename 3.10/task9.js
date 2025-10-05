
let str1 = "Hallo World";
let str2 = "dlroW";

function string(str1, str2) {
    
let size2 = str2.length;
let size1 = str1.length;

    for (let i = 0; i < size1 - size2; i++) {
        let flag = true;
        for (let j = 0; j < size2; j++) {
        if (str1[i + j] !== str2[i]) {
            flag = false;
                break;
            }
          
        }
        if ( flag ) {
            return true; 
        }
    } 
    return false;
 }
        

let res = string(str1, str2);
console.log( res );