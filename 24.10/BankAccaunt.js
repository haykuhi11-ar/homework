class BancAccaunt {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        return this.balance += amount;
    }
    withdraw(amount) {
        if ( amount > this.balance) {
            return 'Insufficient funds.';
        }
        return this.balance -= amount;
    }
}
let accaunt = new BancAccaunt ('Bob', 40_000);
let deposit_amount = accaunt.deposit(50_000);
let withdraw_amount = accaunt.withdraw(60_000);
let acc_balance = accaunt.balance;
console.log('deposit:',deposit_amount, 'withdraw:', withdraw_amount, 'balance:',acc_balance);
