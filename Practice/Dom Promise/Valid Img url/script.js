/* create a page where should be an input and a button

input should accept image urls
you can add an image urls, you should create image elements on the page
which will be displayed under the input you can add multiple image urls  */


let inp = document.getElementById("url")
let btn = document.getElementById("btn")



btn.onclick = () => { 
  let img = document.createElement('img');
  document.body.appendChild(img);
  img.onload =() => { 
    console.log(img.onload)
  }
  img.onerror = () => {
    alert("Invalid img-url")
  }
  img.setAttribute('src', `${(inp.value)}`)
  inp.value = "";
}

