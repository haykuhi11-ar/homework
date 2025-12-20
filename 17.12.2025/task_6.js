class Range {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    [Symbol.iterator]() {
        const from = this.start;
        let current = from;
        const to = this.end;
        return  {
            next() {
           return (current <= to) 
                   ? { value: current++, 
                       done: false }
                   : { done: true };                
            }
        }
    }
}
const range = new Range(1, 5);
for (let num of range) {
    console.log(num);
}
for (let n of range) {
    console.log(n);
}