class Range {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    [Symbol.iterator]() {
        let next = Math.ceil(this.start);
        let to = this.end;
        return {
            next() {
                return (next <= to) 
                ? { value: next++,
                    done: false
                 }
                : { done: true };
            }
        }
    }
}
const range = new Range(5, 10);
for (let x of range) {
    console.log(x);
}
console.log([...range]);
console.log(Array.from(range));