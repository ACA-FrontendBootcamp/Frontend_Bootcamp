const button = document.getElementById('button')
const text = document.getElementById('text')

button.addEventListener('click', () => {
    let p = new Promise ((res, rej) =>  {
        setTimeout(() => res('hello word') , 1000)  
    }).then((res) =>   text.innerHTML = res)
})


    
    
 

