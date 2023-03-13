// Conversor de moeda&
// Manipulação do DOM para capturar os valores inseridos pelo
// usuário e exibir o resultado da conversão
// Fórmula de conversão de moeda
// 5.25 - Dolár

const valueTest = prompt("Digite o valor do seu salario para ver em dolar");

const converter = () => {
  const valorReal = valueTest / 5.25;
  const value = Math.round(valueTest / 5.25);
  console.log(valorReal);
  alert(`$ ${value}`);
};

converter();
