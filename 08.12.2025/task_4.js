async function asyncDouble(n) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(n * 2);
        }, 300);
    });
}
asyncDouble(10).then(result => {
    console.log(result);
});