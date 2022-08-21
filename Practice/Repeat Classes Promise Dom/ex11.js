setTimeout( () => {
    
}, 0 );                             //3 task queue

Promise.resolve(1 ).then(res => {
    console.log(res);               //2  micro 
});

console.log(5);                     //1