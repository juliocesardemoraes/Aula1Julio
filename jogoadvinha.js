/*
Jogo da adivinhação&
Funções de geração de números aleatórios em JavaScrip
Manipulação do DOM para capturar os valores inseridos pelo
usuário e exibir o resultado do jogo
*/

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const valorRandomico = getRandomInt(101);

let valor = -1;

// Rodar o código perguntando o numero ate o usuário acertar o valor
while (valor !== valorRandomico) {
  valor = Number(prompt("Digite um numero de 0 a 100"));
}
