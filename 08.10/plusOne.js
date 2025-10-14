var plusOne = function(digits) {
for (let i = digits.length - 1; i >= 0; i--) {
  if (digits[i] < 9) {
    digits[i]++;
    return digits;
  }
  if (digits[i] === 9) { 
    digits[i] = 0;
  }
}
return [1, ...digits];
}
let digits = [9, 9, 3, 4];
console.log(plusOne(digits));