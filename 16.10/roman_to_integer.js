function romanToInt(s) {
    const roman_integer = {I : 1, V : 5, X : 10, L : 50, C : 100, D : 500, M : 1000}; 
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (roman_integer[s[i]] < roman_integer[s[i+1]]) {
            result -= roman_integer[s[i]];
        } else {
            result += roman_integer[s[i]];
        }
    }
    return result;
};
