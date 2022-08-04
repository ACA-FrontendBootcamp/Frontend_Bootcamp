/* Write an Airplane constructor that initializes name from an argument.
● All airplanes built with Airplane should initialize with an isFlying of false.
● Give airplanes the ability to .takeOff() and .land():
○ If a plane takes off, its isFlying property is set to true.
○ If a plane lands, its isFlying property is set to false.  */


function Airplane (name) { 
    this.name  = name;
    this.isFlying = false;
}

airplane1.prototype.land= function (){
    this.isFlying = false;
}

airplane1.prototype.takeOff= function (){
    this.isFlying = true;
}

/*class Airplane{

    constructor(name){
        this.name = name;
        this.isFlying = false;
    }

    land(){
        this.isFlying = false;
    }

    takeOff(){
        this.isFlying = true;
    }
}  */


