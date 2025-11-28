Function.prototype.myCall = function (context, ...args) {
    if (context == null) context = globalThis;
    context.fn = this;
    const result = context.fn(...args);
    delete context.fn;
    return result;
}