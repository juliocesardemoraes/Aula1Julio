// let nome = "Julio";

// nome = "Diogo";

// let pi = 3.18;
// const name = "AH";

// //Global
// let x = 32;

// const teste = () => {
//   //LOCAL
//   console.log("GLOBAL 1", x);
//   let xdentro = 128;

//   const teste2 = () => {
//     console.log("GLOBAL 2", x);
//   };
//   teste2();
// };

// // let idadeREACSACAS = 42; // NUMBER
// // let nome2 = `A minha idade é ${idade}`;
// // let nome3 = "A minha idade é: " + idade;

// let check = false;
// check = true;

// let pessoas = null;

// //Object e Array

// let pessoasArray = ["1", 2, 0.5, ["Ahhh"]];

// let pessoasObj = {
//   nome: "Diogo",
//   nome2: "Júlio",
// };

// let num1 = 10;
// let num2 = 5;
// let soma = num1 + num2; // 15
// let subtracao = num1 - num2; // 5
// let multiplicacao = num1 * num2; // 50
// let divisao = num1 / num2; // 2
// console.log(soma, subtracao, multiplicacao, divisao);

// let a = 10;
// a += num2; // a = a + 5 = 15
// console.log(a);
// a -= num2; // a = a - 5 = 10
// a *= num2; // a = a * 2 = 20
// a /= num2; // a = a / 4 = 5

// let abbb = null;
// let b = "10";

// if (typeof abbb != undefined) {
//   console.log("IGUAl 22222222");
// }

// // console.log(a > b); // true
// // console.log(a < b); // false
// // console.log(a >= b); // true
// // console.log(a <= b); // false
// // console.log(a == b); // false
// // console.log(a != b); // true

// // let a = 10;
// // let b = 5;
// // let c = 3;
// // && = E
// // || = OU
// // !(a > b)
// console.log(a > b && b > c); // true
// console.log(a > b || b < c); // true
// console.log(!(a > b || b < c)); // false

let idade = 14;

let resultado = idade >= 18 ? "Maior de idade" : "Menor de idade";

console.log("R2", resultado);

let num2 = 10;
let num3 = 2;
let resto = 10 % 3;
console.log("Resto", resto);

let i = 0;
i++; // 1
i--; // 0

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//Receber função
const numeroRandomico = getRandomInt(10);
console.log(numeroRandomico);


//