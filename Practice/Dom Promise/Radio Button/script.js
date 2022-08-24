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
//let data = fetch("http://192.168.10.24:3001/quiz")


import {data1} from "./data.js"
function fetchFunc(){
   return new Promise ((res) => res(data1))
}

let data = fetchFunc()

data
  .then((res) => (res = JSON.parse(res)))
  .then((res) => {
   
   let price = document.createElement("h2");
   let finallButton = document.createElement("button");
   finallButton.innerHTML = "Finish";

   let sum = 0;
   res.map((item) => {

   let container = document.createElement("div");
   container.setAttribute("id", item.id);

   let question = document.createElement("p");
   question.innerHTML = item.question;
   container.appendChild(question);

   let con = document.createElement("div");
   item.answers.map((itemm) => {
   let answer = document.createElement("p");
   answer.innerHTML = itemm;

   let inp = document.createElement("input");
   inp.type = "radio";
   inp.name = item.id;
   inp.setAttribute("type", "radio");
   
   con.appendChild(answer);
   con.appendChild(inp);
   container.appendChild(con);
   
   finallButton.addEventListener("click", () => {
     if (inp.checked) {
      if (answer.innerHTML == item.rightAnswer) {
         sum += item.score;
      }
   }
   price.innerHTML = "scor = " + sum;
});

});
      document.body.appendChild(container);
  });
    document.body.appendChild(finallButton);
    document.body.appendChild(price);
  });