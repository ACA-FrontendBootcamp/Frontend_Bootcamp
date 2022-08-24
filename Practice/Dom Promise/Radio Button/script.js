/* Navigate to https://github.com/vardges-musheghyan/DOM_EX1

Download and install the package, read README file in order to understand how to run the file server.


Create a page which will have a quiz in it in the following format,

-- Question

   answer1
   answer2

where the user can choose between answers,
each answer has its coresponding score, after the user choses the
answers and clicks submit button calculate and show the user its score

push your code to github 


small hint https://www.javascripttutorial.net/javascript-dom/javascript-radio-button/#:~:text=Introduction%20to%20the%20JavaScript%20Radio,is%20called%20a%20radio%20group. */

const container = document.createElement('div');
document.body.appendChild(container)
container.classList.add('container')

let question;
let input
//let data = fetch("http://192.168.10.24:3001/quiz")


import {data1} from "./data.js"
function fetchFunc(){
   return new Promise ((res) => res(data1))
}

let data = fetchFunc()

data.then(res =>  res = JSON.parse(res)).then(res => {
   var finalButton = document.createElement("button")
   question = res
 res.map (item => {

let legend = document.createElement('div')
container.appendChild(legend)
legend.classList.add('legend')
legend.innerText = item.question;





finalButton.innerHTML = "Finish"
finalButton.classList.add('finalButton')

item.answers.forEach(answers => {
   console.log(answers)
      let box = document.createElement('div')
   legend.appendChild(box)
   box.classList.add('box');

    input= document.createElement('input')
   box.appendChild(input);
   input.type = "radio";
   input.name = item.id
input.value = answers
   let task = document.createElement('p');
   task.innerHTML = answers
   box.appendChild(task)
   task.classList.add('task')
  

})

finalButton.addEventListener("click", () =>  {


console.log(question)
console.log(input.value)

})
container.appendChild(finalButton)

})
 }

)
