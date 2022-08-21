// 3) rewrite the following code using constructor functions


class BasicHero{
    constructor(name, armor) {
        this.name = name;
        this.armor = armor;
    }
    logName() {
        console.log(this.name, 'NAME IS LOGGED SUCCESSFULLY')
    }
}


class AdvancedHero extends BasicHero{
    constructor(name, armor, advancedLevel, additionalShoes) {
        super(name, armor);
        this.advancedLevel = advancedLevel;
        this.additionalShoes = additionalShoes;
    }
    logAdvancedLevel(){
        console.log(this.advancedLevel);
    }
}


let basic = new AdvancedHero("Manya", "asd" , 1 ,2)
console.log(basic)


function BasicHero1 (name, armor){
    this.name = name;
    this.armor = armor;
}

BasicHero1.prototype.logName = function (){
    console.log(this.name, 'NAME IS LOGGED SUCCESSFULLY');
}

function  AdvancedHero1(name, armor, advancedLevel, additionalShoes){
    BasicHero1.call(this, name, armor)
    
    this.advancedLevel = advancedLevel;
    this.additionalShoes = additionalShoes;
}

console.log(AdvancedHero1.prototype.__proto__)
AdvancedHero1.prototype.__proto__ =  BasicHero1.prototype;
AdvancedHero1.prototype.logAdvancedLevel= function(){
    console.log(this.advancedLevel);
}

let basic2 = new AdvancedHero1("Manya", "asd" , 1 ,2)
console.log(basic2)
basic2.logAdvancedLevel()