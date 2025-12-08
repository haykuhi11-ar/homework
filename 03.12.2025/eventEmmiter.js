class EventEmitter {
    constructor() {
        this.events = {};
    } 
    on(event, handler) {
        if (!this.events[event]) this.events[event] = [];
        this.events[event].push(handler);
    } 
    emit(event, data) {
        if (!this.events[event]) return;
        for (const handler of this.events[event]) {
            handler(data);
        }
    } 
    off(event, handler) {
        if (!this.events[event]) return;
        this.events[event] = this.events[event].filter(h => h !== handler);
    }
}
class GameEngine extends EventEmitter {
    start() {
        console.log('START');
        this.emit("start");
    }
    update() {
        for (let i = 0; i < 10; ++i) {
            this.emit("update", i);
             if (i === 5) {
                 this.off("update", updateHandler);
                 console.log("updateHandler is deleting."); 
                 this.on("update", updateHandler);
            } 
        }
    }
}
const game = new GameEngine();
game.on("start", () => {
    console.log("Game is starting!");
});
const updateHandler = (tick) => {
    console.log("Tick:", tick);
};
game.on("update", updateHandler);
game.start();
game.update();

