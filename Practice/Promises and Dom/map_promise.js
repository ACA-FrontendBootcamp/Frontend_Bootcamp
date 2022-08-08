/* Create a function named  mapPromise that can take in a promise and a transformer function and return a new transformed promise that follows these rules:
If the first promise rejects with an error, the new promise rejects with that error.
If the first promise resolves with a result, it calls the transformer with the value as an argument.
If the transformer returns with a value, the new promise resolves with that value.
If the transformer throws an error, the new promise rejects with that error.   */


const myPromise = new Promise((resolve, reject) => { resolve(2) })
const timesTwo = (val) => val * 2

const mapPromise = (promise, mapper) =>{
    return new Promise((res,rej) => {
        promise.then((data) => res((mapper(data))).catch((err) => rej(err)))
    })
}

mapPromise(myPromise, timesTwo).then(result => console.log(result))





