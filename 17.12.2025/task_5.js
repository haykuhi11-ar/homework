class Collection {
    constructor(data = []) {
        this.data = data;
    }
    add(elem) {
        if(elem) {
            this.data.push(elem);
        }
    }
    get [Symbol.toStringTag]() {
        return "Collection";
    }
}
const instance = new Collection();
console.log(Object.prototype.toString.call(instance));