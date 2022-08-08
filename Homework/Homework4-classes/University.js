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
        if (member.role == "student"){
            this.students.push(member)
        }
        else if (member.role == "teacher"){
            this.teachers.push(member)
        }
    }
    removeMember(member){
        this.students = this.students.filter((item) => item.name !== member.name);
        this.teachers = this.teachers.filter((item) => item.name !== member.name);
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
}


class Student extends UniversityMember{
    constructor(name, age, role, energy){
        super(name, age,role, energy );
        this.role = 'student';
        }
    info(){
        return `Name: ${this.name}, age: ${this.age}, role: ${this.role}, energy: ${this.energy}`
    }
}

class Teacher extends UniversityMember{
    constructor(name, age, role, energy){
        super(name, age,role, energy );
        this.role = 'teacher';
        }
    info(){
        return `Name: ${this.name}, age: ${this.age}, role: ${this.role}, energy: ${this.energy}`
    }
}



let student1 = new Student({
        name: 'Narek',
        age: 26,
        role: 'student',
        energy : 9,
})

let student2 = new Student({
        name: 'Manya',
        age: 25,
        role: 'student',
})

let teacher1 = new Teacher({
        name: 'Elmira',
        age: 25,
        role: 'teacher',
        energy : 10,
})

let teacher2 = new Teacher({
        name: 'Vardges',
        age: 25,
        role: 'teacher',
        energy : 10,
})

let teacher3 = new Teacher({
        name: 'David',
        age: 25,
        role: 'teacher',
        energy : 10,
})



let class1 = new University();
class1.addMember(student1)
class1.addMember(student2)
class1.addMember(teacher1)
class1.addMember(teacher2)
class1.addMember(teacher3)

console.log(class1)


class1.startLesson();
console.log(class1.students[1].info())
class1.removeMember(teacher2);
class1.removeMember(student1)
console.log(class1)



