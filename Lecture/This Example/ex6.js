function foo (fn) {
    fn(this)
}

function logger(arg){
    console.log(arg)
}

const obj = {
    word: 'hello',
    foo,
}

obj.foo(logger); //{word: 'hello', foo: ƒ}