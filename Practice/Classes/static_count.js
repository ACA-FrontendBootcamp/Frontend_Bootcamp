/*
Exercise 3
Create a class named User and create a way to check the number of users (number of
instances) that were created, so that the value can be accessed as a class attribute.
Example:
u1 = new User("johnsmith10")
User.userCount ➞ 1
u2 = new User("marysue1989")
User.userCount ➞ 2
u3 = new User("milan_rodrick")    */ 



class User{
    static userCount = 0;
    constructor(name) {
        this.name = name;
        User.userCount += 1;
    }
}

u2 = new User("marysue1989")
u1 = new User("johnsmith10")
console.log(User.userCount)  