/* 
Create a function named myInterval, which takes two parameters, a callback function
and an interval duration(milliseconds). After calling the myInterval function, the
callback function must be executed every given interval duration.
Note:
Don’t use the setInterval method   */

    class Animals{
        
        constructor(energy = 10){
        this.energy = energy;
    }
    sound(){
    this.energy = this.energy - 3;

    }

    sleep(){
    this.energy = this.energy +10;

    }

    eat(){
    this.energy  = this.energy+5;
    }
    }


    class Jungle{
        constructor(animallist){
    this.animals = animallist;
        }
        soundOff(){
            this.animals.forEach(animal => {
                animal.sound()
            
            })
        }
    }

    class Tiger extends Animals  {
        constructor(){
        super()
        }
        sleep(){
            this.energy = this.energy +15;
        
        }
        eat(food){
            if (food.type === "grain"){
                console.log("I cant eat that")
            } else {
                super.eat()
            }   
        }
        }
    class Food{
    constructor(type){
        this.type = type;
    }

    }
    class Grain extends Food{
        constructor(type){
            super(type)
        }
    }




    class Monkey extends Animals {
        constructor(){
        super()

    }
    eat(){
        this.energy = this.energy + 2;
    }
    sound(){
        this.energy = this.energy -4
    }
    play(){
        if (this.energy < 8){
            console.log("I am tired")
        }
        else  {
            console.log("oooo ooo ")
            this.energy = this.energy -8;
        }
    }
    }

    class Snake extends Animals{
        constructor(){
            super()
            }
    }




    let tiger1 = new Tiger()
    let monkey1 = new Monkey()
    let snake1 = new Snake()
    let grain = new Grain("grain")

    const animallist = [tiger1, monkey1, snake1]
    const amazonJungle = new Jungle(animallist);
    console.log(amazonJungle)
    tiger1.eat(grain)
