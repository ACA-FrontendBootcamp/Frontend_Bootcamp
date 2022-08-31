let woman = {
    name : 'Elis',
}

let man = {
    name: 'John',
}

function Family (woman, man){
    this.wife = woman;
    this.husband = man;
    this.wife.husband = man;
    this.husband.wife = woman;
}

let family1 = new Family(woman, man)
console.log(family1)