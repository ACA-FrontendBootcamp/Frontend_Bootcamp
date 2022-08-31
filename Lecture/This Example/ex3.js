const obj = {
    age: 24,
    foo: function () {
        let self = this;
        ((num) => {
            self.age = num
        })(17);
        console.log(this.age)
    }
}

obj.foo();