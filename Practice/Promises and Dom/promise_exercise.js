/* Write a function which returns a Promise object that is resolved
 with the string 'Hooray!!! She said "Yes"!', if true is passed,
  resolved with the string 'Oh no, she said "No".' 
  if false is passed, and rejected with an error 'Wrong parameter is passed! Ask her again.', 
  if the passed value type is not boolean.   */


  function foo(a){
    return new Promise((res,rej) => {
        if (typeof a ==  'boolean'){
            if (a){
                res('Hooray!!! She said "Yes"!')
            }
            res('Oh no, she said "No".')
   
        } 
    rej( 'Wrong parameter is passed! Ask her again.')
    }
    )
}
    
foo(true)
.then(data => console.log(data))
.catch(err => console.log(err))

// foo(true)
// .then(data => console.log(data))
// .then(error => console.error)

