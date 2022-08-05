const BUTTON_ID = 'add';

let add_button = document.getElementById('add');
let input = document.getElementById('addToDo')
let container = document.querySelector('.container')

input.addEventListener("input", (event)=> {
    if (!event.target.value){
        add_button.disabled = true;
    } else {
        add_button.disabled = false;
    }
})

add_button.addEventListener("click", (event) => {
   // if (event.target.id === BUTTON_ID){
        if (input.value) {
            let todo = document.createElement('li');
            let icon = document.createElement('img')
            todo.setAttribute('id', `${Math.random()}`);
            icon.setAttribute('src', './assets/delete.svg')
            
            icon.classList.add('icon')
            todo.innerText = input.value;
            todo.appendChild(icon)
            container.appendChild(todo);
            input.value = "";
        }
   // }
})

let done = false;
container.addEventListener('click', (event) => {
   
            // if(done){
            //     event.target.style.textDecoration = 'none';
            //     done = false;
            // } else {
            //     event.target.style.textDecoration = 'line-through'
            //     done = true;
            // }
         if(event.target.hasAttribute('src')) {
                event.target.parentElement.remove();
           }
           event.target.classList.toggle('done')
})
