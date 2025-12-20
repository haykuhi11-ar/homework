class GenRange {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    *[Symbol.iterator]() {
        const to = this.end;
        let current = this.start;
        
        while (current <= to) {
            yield current;
            current++;
         }
    }
}
const range = new GenRange(1, 6);
console.log([...range]);
console.log(Array.from(range));

for (let i of range) {
    console.log(i);
}