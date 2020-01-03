//MAP
//nao vai alterar o meu objeto original
//vai retornar um novo objeto respeitando o tamanho do objeto original

const { passengers } = require("../data");

//1. Quantos anos eles tem?

const newPassergers = passengers.map(passenger => {
  return `${passenger.name} tem ${2019 - passenger.birthYear} anos`;
});

console.table(newPassergers);

//2. Encontre o palíndromo

const founds = passengers.map(passenger => {
  const reverseName = [].map
    .call(passenger.name, letter => letter)
    .reverse()
    .join("");
  if (reverseName.toLowerCase() === passenger.name.toLowerCase())
    return `This is palindromo: ${passenger.name}`;
});

console.table(founds);
