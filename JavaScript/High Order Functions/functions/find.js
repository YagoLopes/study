//Find
//imutabilidade
//function(element, index, array)

// 1. Econtre o passageiro de nome "Enzo"
const { passengers } = require("../data");

const Enzo = passengers.find(
  passenger => passenger.name.toLowerCase() === "enzo"
);

console.table(Enzo);
