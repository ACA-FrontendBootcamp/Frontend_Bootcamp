/*
Write a class called Name and create the following properties: firstName and lastName.
● A method called fullname which returns the first and last names.
● A method called initials which returns the first letters of the first and last name.
Put a . between the two letters   */


class Name{
    constructor(firstName, lastName) {
        this.firstName =  firstName;
        this.lastName = lastName;
    }
    fullname(){
        return this.firstName + " " + this.lastName
    }
    initials(){
        return this.firstName.slice(0,1) +"."+ this.lastName.slice(0,1)
    }
}

let name1 = new Name("manya", "42")
console.log(name1.initials())

