// -------1--------

class MyPromise {
    constructor(executor) {
            this.PENDING = "pending";
            this.FULFILLED = "fulfilled";
            this.REJECTED = "rejected";
            this.state = this.PENDING;
        
        this.value = null;
        this.reason = null;

        this.onFulfilledCallback = [];
        this.onRejectedCallback = [];

        this.resolve = (value) => {
            if (this.state === this.PENDING) {
                this.state = this.FULFILLED;
                this.value = value;

                this.onFulfilledCallback.forEach(fn => fn(this.value));
                this.onFulfilledCallback = [];
                this.onRejectedCallback = [];
            }
        }
        this.reject = (reason) => {
            if (this.state === this.PENDING) {
                this.state = this.REJECTED;
                this.reason = reason;

                this.onRejectedCallback.forEach(fn => fn(this.reason));
                this.onRejectedCallback = [];
                this.onFulfilledCallback = [];
            }
        }
        try {
            executor(this.resolve, this.reject);
        } catch (error) {
            this.reject(error);
        }
    } 
    // ---------5/6--------
    
    then(onFulfilled, onRejected) {
        onFulfilled = (typeof onFulfilled === 'function') ? onFulfilled : value => value;
        onRejected = (typeof onRejected === 'function') ? onRejected : reason => {throw reason};

        const promise = new MyPromise((resolve, reject) => {
           const handleFulfilled = () => {
            queueMicrotask(() => {
                try {
                    const x = onFulfilled(this.value);
                    resolvePromise(promise, x, resolve, reject);
                } catch (error) {
                    reject(error);
                }
            })
        }
           const handleRejected = () => {
            queueMicrotask(() => {
                try {
                    const x = onRejected(this.reason);
                    resolvePromise(promise, x, resolve, reject);
                } catch (error) {
                    reject(error);
                }
            });
           }
            if (this.state === this.FULFILLED) {
            handleFulfilled();
            }
            else if (this.state === this.REJECTED) {
            handleRejected();
            }
            else if (this.state === this.PENDING) {
            this.onFulfilledCallback.push(handleFulfilled);
            this.onRejectedCallback.push(handleRejected);
            }
        })
        return promise;
    }
}

// --------2--------
// const p = new MyPromise((resolve, reject) => { 
//     resolve(20);  
// });
// console.log(p);
// const prom = new MyPromise((resolve, reject) => {
//     reject("Error");
// });
// console.log(prom);

// ---------3---------
// MyPromise.prototype.then = function(onFulfilled, onRejected) {
//     if (this.state === this.FULFILLED) {
//             onFulfilled(this.value);
//         }
//         else if (this.state === this.REJECTED) {
//             onRejected(this.reason);
//         }
//         else if (this.state === this.PENDING) {
//             this.onFulfilledCallback.push( onFulfilled(this.value));
//             this.onRejectedCallback.push( onRejected(this.reason));
//         }
// }

// --------4-------- 
// MyPromise.prototype.then = function(onFulfilled, onRejected) {
//         onFulfilled = (typeof onFulfilled === 'function') ? onFulfilled : value => value;

//         onRejected = (typeof onRejected === 'function') ? onRejected : reason => {throw reason};
//         if (this.state === this.FULFILLED) {
//             onFulfilled(this.value);
//         }
//         else if (this.state === this.REJECTED) {
//             onRejected(this.reason);
//         }
//         else if (this.state === this.PENDING) {
//             this.onFulfilledCallback.push( onFulfilled(this.value));
//             this.onRejectedCallback.push( onRejected(this.reason));
//         }
// }

// -------7--------
function resolvePromise(promise, x, resolve, reject) {
    if (promise === x) return reject(new TypeError("Cannot resolve promise with itself"));

    if (x instanceof MyPromise) {
        return x.then(
            value => resolvePromise(promise, value, resolve, reject),
            reason => reject(reason)
        );
    }

    if (x && (typeof x === 'object' || typeof x === 'function')) {
        let called = false;

        try {
            const then = x.then;
            if (typeof then === 'function') {
                then.call( 
                    x,
                    (y) => {
                        if(called) return;
                        called = true;
                        resolvePromise(promise, y, resolve, reject);
                    },
                    (r) => {
                        if(called) return;
                        called = true;
                        reject(r);
                    }
                );
                return;
            }
        } catch (error) {
            if (!called) {
                called = true;
               return reject(error);
            }
        }
    } 
    else { resolve(x); }
}

// -------8--------
 MyPromise.prototype.catch = function(onRejected) {
        return this.then(null, onRejected);
    }

// -------9--------

// const p = new MyPromise((resolve) => {
//     resolve(20);
// });
// p.then((resolve) => {
//     console.log(resolve);
// });

// new MyPromise((_, reject) => reject("error"))
// p.catch(e => console.log(e));

// console.log('A');
// p.then(() => {
//     console.log('B');
// });
// console.log('C');

// p.then(res => res * 2)
// .then(res => console.log(res));

// p.then(res => res - 50)
// .then(() => { throw 'Error'; })
// .catch(e => console.log(e));

// new MyPromise(res => res(20))
// .then(() => new MyPromise(res => res(100)))
// .then(res => console.log(res));

// new MyPromise(res => res(10))
// .then(res => {
//     console.log(res);
//     return res * 10;
// })
// .then(result => {
//     console.log('result:', result);
// });

// new MyPromise(res => {
//     res(10);
//     res(20);
// })
// .then(v => console.log(v));

const p = new MyPromise(res => res());
const promise = p.then(() => promise);
promise.catch(err => console.log(err));