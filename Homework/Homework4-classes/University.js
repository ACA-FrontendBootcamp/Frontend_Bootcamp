/*Exercise 1. University
Create a class named University.
● It should contain two properties
○ teachers([]asdefault)
○ students([]asdefault)
● It should contain 3 methods
○ addMember(member
○ removeMember(member)
○ startLesson() (description below)
Formembersyoushouldcreatetwoclasses,Teacher andStudentwhichwillbeinherited from the class UniversityMember.
Members should contain 4 properties
● name
● age
● role
● energy(24asdefault)
And one method named info() which will return all 4 properties of it.
After calling the University class startLesson() method, students get -2 of energy
and teachers get -5 of energy.   */


class University{
    constructor(teachers=[], students =[])
    {
        this.teachers = teachers;
        this.students = students;
    }
    addMember(member){
        let newPerson;
        newPerson = new UniversityMember(member);
        if (newPerson.role == "student"){
            this.students.push(newPerson)
        }
        else if (newPerson.role == "teacher"){
            this.teachers.push(newPerson)
        }
    }
    removeMember(name){
        this.students = this.students.filter((item) => item.name !== name);
        this.teachers = this.teachers.filter((item) => item.name !== name);
    }
    startLesson(){
        for (let  i =0; i< this.teachers.length; i++){
            this.teachers[i].energy = this.teachers[i].energy -5;
        }   
        for (let  i =0; i< this.students.length; i++){
            this.students[i].energy = this.students[i].energy -2;
        }  
    }
}

class UniversityMember{
    constructor(props){
        this.name = props.name;
        this.age = props.age;
        this.role = props.role;
        this.energy = props.energy || 26;
    }
    info(){
        return `Name: ${this.name}, age: ${this.age}, role: ${this.role}, energy: ${this.energy}`
    }
}



let class1 = new University();

class1.addMember({
    name: 'David',
    age: 25,
    role: 'teacher',
    energy : 10,
})
class1.addMember({
    name: 'Vardges',
    age: 25,
    role: 'teacher',
    energy : 10,
})

class1.addMember({
    name: 'Elmira',
    age: 25,
    role: 'teacher',
    energy : 10,
})

class1.addMember({
    name: 'Narek',
    age: 26,
    role: 'student',
    energy : 9,
})

class1.addMember({
    name: 'Manya',
    age: 25,
    role: 'student',
})
//console.log(class1)
class1.startLesson();
console.log(class1.students[1].info())
//console.log(class1.removeMember("Manya"));
class1.removeMember("Vardges")
console.log(class1)



