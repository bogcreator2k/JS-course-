"use s trict";

//alert("Hello");

//const result = confirm("Are you here?");
//console.log(result);

/*const answer = prompt(" How old are you?", "");
console.log(answer + 5); */

// const answers = [];

// answers[0] = prompt("Как ваше имя?", "");
// answers[1] = prompt("Как ваше фамилия?", "");
// answers[2] = prompt("Сколько вам лет", "");

// document.write(answers);

const category = "toys";
console.log(`https://someurl.com/${category}/5`); //интерполяция

const user = "Ivan";
alert(`Hello, ${user}`); //интерполяция 

let incr = 10,
    decr = 10;

// incr++;
// decr--;
console.log(incr++); // постфиксний инекремент
console.log(--decr); // прификстний декримент

const ischekt = true,
    siclose = true;

console.log(ischekt && siclose);