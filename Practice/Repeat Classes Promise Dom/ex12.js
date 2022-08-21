function imageProcessing(cb) {
    setTimeout(() => {
        let result = 1
        cb(null, result);
    })
}

function foo(imageProcessing) {
    return new Promise((res, rej) => {
        imageProcessing((err, result) => {
            if(err) {
                rej(err);
            } else {
                res(result);
            }
        })
    })
}

foo(imageProcessing).then(function(result) {
    console.log(result)
});




