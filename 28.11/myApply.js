Function.prototype.myApply = function (context, arr) {
    if(context == null) context = globalThis;

    context.fn = this;
    const result = context.fn(...arr);
    delete context.fn;
    return result;
}
