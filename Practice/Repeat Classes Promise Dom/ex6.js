//1) The function job must return a promise object (you are in a NodeJS environment, you can use new Promise)
//The promise must resolve itself 2 seconds after the call to job and must provide hello world in the data




function job(){
    return new Promise((res,rej)  => setTimeout(() => {
        res('Hello world')
    }, 2000))
}

job().then(result => {
    console.log(result);
})