/* 2) In this code, your function receives a parameter data. You must modify
 the code below based on the following rules:

Your function must always return a promise
If data is not a number, return a promise rejected instantly and give the data "error" (in a string)
If data is an odd number, return a promise resolved 1 second later and give the data "odd" (in a string)
If data is an even number, return a promise rejected 2 seconds later and give the data "even" (in a string)
*/

function foo(num){
    return new Promise((res, rej) =>{
        if (typeof num === 'number'){
            res(num).then((res, rej) => {
                if (res %2 ==0) {
                    setTimeout(() =>  {
                        res("even")
                    },1000)
                } else {
                    setTimeout(() => {
                        rej('odd')  
                    },2000)
                }
            })
        }
        else {rej( new Error (error)) }
})
}