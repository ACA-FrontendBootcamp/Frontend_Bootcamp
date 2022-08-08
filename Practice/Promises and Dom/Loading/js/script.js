let image = document.createElement('img');
image.setAttribute('src','./assets/Loading_icon.gif');
document.body.appendChild(image)
console.log(image)
let container = document.createElement('div');
document.body.appendChild(container);
container.classList.add('container');


let a = setTimeout(() => {
    get().then((res) => 
res = res.json()).then((res) => res.map(item => {
let element = document.createElement('div');
element.classList.add('element')
element.innerText = item.name;
container.appendChild(element);
image.remove()
}
)
)
},3000)






