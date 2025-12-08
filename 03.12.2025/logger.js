class Logger {
    constructor () {
        if (new.target === Logger) {
            throw new Error ("Cannot instantiate interface directly.");
        }
    }
    log(msg) {
        throw new Error ("Method log() must be implemented.");
    }
    warn(msg) {
        throw new Error ("Method warn() must be implemented.");
    }
    error(msg) {
        throw new Error ("Method error() must be implemented.");
    }
}
class ConsoleLogger extends Logger {
    log(msg) {
        console.log(`Log : ${msg}`);
    }
    warn(msg) {
        console.log(`Warn : ${msg}`);
    }
    error(msg) {
        console.log(`Error : ${msg}`);
    }
}
class MemoryLogger extends Logger {
    constructor() {
        super();
    this.logger = [];
}
log(msg) {
    this.logger.push({type: "log", msg});
}
error(msg) {
    this.logger.push({type: "error", msg});
}
}

const consl = new ConsoleLogger();
const memory = new MemoryLogger();

consl.log("Hallo");
memory.error("Error");
consl.warn("Warning");

console.log(memory.logger);
memory.warn("Warning");