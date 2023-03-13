function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const alphabet = "abcdefghijklmnopqrstuvxzwy";
let password = "";

// 8 caracteres

for (let i = 0; i < 8; i++) {
  const numeroRandomico = getRandomInt(26);
  password += alphabet[numeroRandomico];
}
