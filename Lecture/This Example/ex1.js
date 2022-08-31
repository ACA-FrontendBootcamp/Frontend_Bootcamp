const foo  = () => console.log(this.name)

const user = {
    name : 'Suren',
    foo,
}

user.foo()

//arrow function, this- determined by the place of creation,
// and log windows obj name