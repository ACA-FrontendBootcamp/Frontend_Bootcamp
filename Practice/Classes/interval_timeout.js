/*Create a function named myInterval, which takes two parameters, a callback function and an interval duration(milliseconds). After calling the myInterval function, the callback function must be executed every given interval duration.
Note: 
Don’t use the setInterval method

Create a function named myTimeout, which takes two parameters, a callback function and an interval duration(milliseconds). After calling the myTimeout function, the callback function must be executed after duration time has passed.
Note: 
Don’t use the setTimeout method  */


const myInterval = (cb, interval) => {
    setTimeout(() => {
        cb();
        myInterval(cb, interval);
    }, interval);
};

const myTimeout = (cb, interval) => {
    const stop = setInterval(() => {
        cb();
        clearInterval(stop);
    }, interval);
};