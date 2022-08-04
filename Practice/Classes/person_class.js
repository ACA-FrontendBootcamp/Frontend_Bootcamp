
/*Create a method in the Person class which returns how another person's age compares.
Given the instances p1, p2 and p3, which will be initialized with the attributes name and
age, return a sentence in the following format:
{other person name} is {older than / younger than / the same age as} me.
Example:
p1 = Person("Samuel", 24)
p2 = Person("Joel", 36)
p3 = Person("Lily", 24)
p1.compareAge(p2) ➞ "Joel is older than me."
p2.compareAge(p1) ➞ "Samuel is younger than me."
p1.compareAge(p3) ➞ "Lily is the same age as me." */


 
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    
    comp(person){
        if (person === this){
            throw new Error ('same object')
        }
        if ( this.age > person.age){
            return `${person.name} is younger than me.`
        } else if (this.age < person.age){
            return `${person.name} is older than me`
        } else {
        return  `${person.name} is the same age as me.`
        }
    }
}

let person1 =new Person("Samuel", 24);
let person2 =new Person("Joel", 36);
let person3 =new Person("Lily", 24);

console.log(person1.comp(person2))   
console.log(person2.comp(person1))  
console.log(person1.comp(person3)) 