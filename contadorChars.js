// const palavra = prompt("Digite uma palavra");
// alert(`O tamanho da palavra é: ${palavra.length}`);

// Conversor de temperatura
// (100°C × 9/5) + 32 // Celsius para fahrenheit
// 0  + 273.15 // Celsius para kelvin

const temp = Number(prompt("Digite a temperatura atual em celsius: "));
const fahrenheit = (temp * 9) / 5 + 32;
const kelvin = temp + 273.15;

alert(`A temp em fahrenheit é:  ${fahrenheit} A temp em kelvin é: ${kelvin} `);
