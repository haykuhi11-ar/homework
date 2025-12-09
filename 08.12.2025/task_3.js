function ping() {
        for(let i = 0; i < 5; ++i) {
           setTimeout(() => { 
            console.log("Ping");
        }, i * 1000);
    }
}
ping();