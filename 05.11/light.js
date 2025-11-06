class LightState {
    next(light) {}
    getColor()
    {
        return this.constructor.name;
    }
    action() {}
}
class TrafficLight {
    constructor() 
    {
        this.state = new Redlight();
    }
    setState(state) 
    {
        this.state = state;
    }
    next() 
    {
        this.state.next(this);
    }
    show() 
    {
        this.state.action();
    }


}
class Redlight extends LightState {
    next(light) 
    {
        light.setState(new GreenLight());
    }
    action() 
    {
        console.log(" STOP — Cars must wait.");
    }

}
class GreenLight extends LightState{
    next(light) 
    {
        light.setState(new YelowLight);
    }
    action() 
    {
        console.log("GO — Cars may drive.");
    }

}
class YelowLight extends LightState {
     next(light) 
     {
        light.setState(new Redlight());
     }
     action() 
     {
        console.log("SLOW DOWN — Prepare to stop.");
     }
}
const light = new TrafficLight();
light.show();
light.next();
light.show();
light.next();
light.show();
light.next();
light.show();