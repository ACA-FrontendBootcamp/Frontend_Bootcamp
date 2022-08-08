/* Create a function named squarePromise, that takes a promise that resolves with a number or a string.
 Function should return a promise such that:
If the input promise resolves with a number, the output promise resolves with the square of that number.
If the input promise resolves with a string that we can turn into a number (like "1234"),
 the output promise resolves with the square of that number (1522756 in this example)
If the input promise resolves with a string that we cannot turn into a number (like "asdf"),
 then we reject with a message like "Cannot convert 'asdf' to a number!"
If the input promise rejects with an error, the output promise rejects with the same error   */




const myPromise = Promise.resolve(25)

function squarePromise(promise){
    return new Promise((resolve, reject) => {
    promise
    .then((data) => {
        if(Number.isNaN(data*data)){
            reject(`Cannot convert ${data} to a string`)
        } else {
            resolve(data*data)
        }
    }).catch((err) => reject(err));
})
}
squarePromise(myPromise).then((data) => console.log(data));