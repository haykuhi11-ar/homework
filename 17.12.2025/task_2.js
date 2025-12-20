const PASSWORD = Symbol('password');

class User {
    constructor(name, password) {
        this.name = name;
        this[PASSWORD] = password;
    }
    checkPassword(input) {
        return (this[PASSWORD] === input)
    }
    changePassword(newPassword) {
        this[PASSWORD] = newPassword;
    }
}

const user = new User('John', 'secret');
console.log(user.checkPassword('123'));
console.log(user.checkPassword('secret'));

console.log(Object.keys(user));