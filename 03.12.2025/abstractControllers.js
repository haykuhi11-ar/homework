class Controller {
    constructor() {
        if (new.target === Controller) {
            throw new Error("Cannot instantiate abstract class Controller directly.");
        }
    }
     handleRequest(request) {
            throw new Error("Abstract method handleRequest() must be implemented.");
        }
        validate(request) {
            throw new Error("Abstract method validate must be implemented.");
        }
        respond(data) {
            try {
                const json = JSON.stringify(data, null, 2);
                console.log(json);
                return json;
            } catch (error) {
                console.error("Response serialization error:", error);
            }
        }
}
class ServiceInterface  {
    constructor() {
        if (new.target === ServiceInterface) {
            throw new Error("Cannot instantiate class ServiceInterface directly.");
        }
    }
    execute(params) { 
        throw new Error("Method execute() must be implemented.");
    }
    getName() {
        throw new Error("Method getName() must be implemented.");
    }
}
const Loggable = Base => class extends Base {
    log(message) {
        const time = new Date().toString();
        const name = this.constructor.name;
        console.log(`${time} ${name} ${message}`);
    }
}
const Configurable = Base => class extends Base {
    config = {};

    setConfig(key, value) {
        this.config[key] = value;
    }
    getConfig(key) {
        return this.config[key];
    }
}
class UserService extends ServiceInterface  { 
    execute(param) {
        return [
            {id: 1, name: 'Annet'},
            {id: 2, name: 'Bob'},
            {id: 3, name: 'Alice'}
        ];
    }
    getName() {
        return "UserService";
    }

}
class ProductService extends ServiceInterface {
    execute(param) {
        return [
            {id: 1, name: 'Phone', price: 500},
            {id: 2, name: 'Mouse', price: 50}
        ];
    }
    getName() {
        return "ProductService";
    }
}
class UserController extends Loggable(Controller) {
    constructor(service) {
        super();
        this.service = service;
    }
    validate(request) {
        if (!request || !request.action) {
            throw new Error("Invalid request.")
        }
        if (request.action !== "getUsers") {
            throw new Error("Invalid request.");
        }
    }
    handleRequest(request) {
        this.validate(request);
        this.log('Request accepted:' + request.action);
        const users = this.service.execute();
        this.respond(users);
    }
}
class ProductController extends Loggable(Configurable(Controller)) {
    constructor(service) {
        super();
        this.service = service;
    }
    validate(request) {
         if (!request || !request.action) {
            throw new Error("Invalid request.")
        }
        if (request.action !== "getProducts") {
            throw new Error("Invalid request.");
        }
    }
    handleRequest(request) {
        this.validate(request);
        this.log('Request accepted' + request.action);
        const product = this.service.execute();
        console.log(this.config);
        return this.respond(product);
    }
}
console.log('---User Control---');
const user_service = new UserService();
const user_control = new UserController(user_service);
user_control.handleRequest({action:"getUsers"});

console.log('---Product Control---');
const product_service = new ProductService();
const product_control = new ProductController(product_service);
product_control.setConfig("id: 3", " name: 'Keyboard', price: 80" );
product_control.handleRequest({action: "getProducts"});