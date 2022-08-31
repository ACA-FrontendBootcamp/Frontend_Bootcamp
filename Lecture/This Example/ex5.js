const obj = {
    age: 22,
    showAge(){ //  ~ function  keyword
        console.log(this.age) // 22
        const arrowAge = () => {
            console.log(this.age) // 22
        }
        arrowAge()
    },
    showArrowAge: () => {
        console.log(this.age) //  => arrow function -> window.age -> undefined
    }
}

obj.showAge()
obj.showArrowAge()