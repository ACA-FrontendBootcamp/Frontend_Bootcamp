class Character{
    constructor(name, type){
        if (name.length <=2 || name.length >=10){
            throw new Error("The name length must be 2 to 10")
        } else {    
            this.name = name;
        }
        if (type === "Bowerman" ||  type == "Swordsman"  || type == "Magician" 
        || type == "Daemon"  || type == "Undead"  || type == "Zombie"){
            this.type = type; 
        } else {
            throw new Error("Type is no correct")
        }
        this.health = 100;
        this.level = 1;
    }
    
    levelUp(){
        if(this.health > 0){   
            this.level = this.level+1;
            this.attack = this.attack + this.attack*0.2;
            this.defense =   this.defense + this.defense*0.2;
        } else {
            throw new Error("The character is deceased ")
        }
    }
    
    damage(points){
        if(this.health > 0){
            this.health = (this.health - points * (1 - this.defense / 100));
        } else {
            throw new Error("The character is deceased ")
        }
    }
}

class Bowerman extends Character{
    constructor(name, type,health, level){
        super(name,type,health, level)
        this.attack = 25;
        this.defense = 25;
    }
}

class Swordsman extends Character{
    constructor(name, type,health, level){
        super(name, type,health, level)
        this.attack = 40;
        this.defense = 10;
    }
}

class Magician extends Character{
    constructor(name, type,health, level){
        super(name, type,health, level)
        this.attack = 10;
        this.defense = 40;
    }
}

class Daemon extends Character{
    constructor(name, type,health, level){
        super(name, type,health, level)
        this.attack = 10;
        this.defense = 40;
    }
}

class Undead extends Character{
    constructor(name, type,health, level){
        super(name, type,health, level)
        this.attack = 25;
        this.defense = 25;
    }
}

class Zombie extends Character{
    constructor(name, type,health, level){
        super(name, type,health, level)
        this.attack = 40;
        this.defense = 10;
    }
}


let bowerman1= new  Bowerman("Man", "Bowerman")

//console.log(bowerman1)
bowerman1.levelUp();
//console.log(bowerman1)
bowerman1.damage(5)
//console.log(bowerman1)
bowerman1.damage(120)
console.log(bowerman1)


