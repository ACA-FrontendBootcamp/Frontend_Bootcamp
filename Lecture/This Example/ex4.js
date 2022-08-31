const obj = {
    a: 777,
    foo
}

function foo(){
    console.log(this.a)
}

obj.foo()

//777