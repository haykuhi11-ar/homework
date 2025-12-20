class Money {
    constructor(amount) {
        this.amount = amount;
    }
    [Symbol.toPrimitive](hint) {
        if ( hint === "number" || hint === "default" )  return this.amount;
        else if ( hint === "string" ) return this.amount + " USD";          
    }
}
const money = new Money(100);
console.log(+money);
console.log(money + 10);
console.log(`${money}`);
console.log(String(money));