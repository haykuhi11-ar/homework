Function.prototype.myBind = function (context, ...args) {
    const fn = this;

   return function (...argss) {
    if(context == null) context = globalThis;
        context.fn = fn;
        const result = context.fn(...args, ...argss);
        delete context.fn;
        return result;
    }
}