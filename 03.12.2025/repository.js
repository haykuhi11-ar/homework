class Repository {
    constructor() {
        if (new.target === Repository) {
            throw new Error("Cannot instantiate interface directly.");
        }
    }
    add(item) {
        throw new Error("Method add() must be implemented.");
    }
    remove(id) {
        throw new Error("Method remov() must be implemented.");
    }
    find(id) {
        throw new Error("Method find() must be implemented.");
    }
    findAll() {
        throw new Error("Method findAll() must be implemented.");
    }

}
class UserRepository extends Repository {
    constructor() {
        super();
        this.items = [];
    }
    add(...item) {
        this.items.push(...item);
        console.log('User added', ...item);
    }
    remove(id) {
        let remove_index = [];
        for(id of this.items) {
            remove_index = this.items.splice(id, 1)[0];
        }
       (!remove_index) ? console.log(`User with id ${id} not found`) : console.log('User removed:', remove_index);
    }
    find(id) {
        for(const item of this.items) {
           if (item.id === id) return item;
        }
        return null;
    }
    findAll() {
        return this.items;
    }
}
class ProductRepository extends Repository {
    constructor() {
        super();
        this.items = [];
    }
    add(...item) {
        this.items.push(...item);
         console.log('Product added', ...item);
    }
    remove(id) {
        let remove_index = [];
        for(id of this.items) {
            remove_index = this.items.splice(id, 1)[0];
        }
       (!remove_index) ? console.log(`Product with id ${id} not found`) : console.log('Product removed:', remove_index);
    }
      find(id) {
        for(const item of this.items) {
            if(item.id === id) return item; 
        }
        return null;
    }
     findAll() {
        return this.items;
    }
}
const user = new UserRepository();
const product = new ProductRepository();

user.add({id: 1, name: 'Annet'}, {id: 2, name: 'Bob'});
console.log(user.find(3));
user.remove(2);
console.log(user.findAll());

product.add({id: 11, name: 'Phone'}, {id: 22, name: 'Noutbook'});
console.log(product.find(22));
product.remove(11);
console.log(product.findAll());