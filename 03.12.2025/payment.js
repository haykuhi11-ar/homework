class PaymentProcess { 
    constructor() { 
        if (new.target  === PaymentProcess) {
            throw new Error('Cannot instantiate interface directly.');
        }
    }
    pay(amount) {
        throw new Error('Method pay() must be implemented.');
    }
    refund(id) {
        throw new Error('Method refund() must be implemented.');
    }
    getStatus(id) {
        throw new Error('Method getStatus() must be implemented.');
    }
}

class StripePayment extends PaymentProcess { 
    constructor() {
        super();
        this.Id = 1;
        this.transaction = {};
    }
    pay(amount) {
        const id = this.Id++;
        this.transaction[id] = { id, amount, status: "paid"};
        console.log(`Stripe Payment : Paid ${amount}`);
        return id;
    } 
    refund(id) {
        if (!this.transaction[id]) return false;
        this.transnaction[id].status = "refunded";
        console.log(`Stripe Payment : Refunded : ${id}`);
    } 
    getStatus(id) {
        return this.transaction[id] ? this.transaction[id] : "Transactions not found.";
    }
}
class PayPalPayment extends PaymentProcess {
    constructor() {
        super();
        this.store  = {};
        this.ID = 1;
    }
    pay(amount) {
        const id = this.ID++;
        this.store[id] = { id, amount, status: "paid"};
        console.log(`PayPal Payment: Paid ${amount}`);
        return id;
    } 
    refund(id) {
        if (!this.store[id]) return false;
        this.store[id].status = "refunded";
        console.log(`PayPal Payment : Refund : ID ${id}`);
    }  
    getStatus(id) {
        return this.store[id] ? this.store[id] : "store is not found";
    }
}
const stripe = new StripePayment();
const paypal = new PayPalPayment();

const id1 = stripe.pay(10_000);
const id2 = stripe.pay(12_000);
const ID1 = paypal.pay(1000);
const ID2 = paypal.pay(20_000);

paypal.refund(ID1);
console.log(paypal.getStatus(ID2));
console.log(paypal.getStatus(ID1));
console.log(stripe.getStatus(id1));
console.log(stripe.getStatus(id2));


