//FOREACH
//Não é imutavel
//Modifica o objeto original
//Não retorna um novo objeto
//array.forEach((currentValue, index, array))
const { passengers } = require("../data");
//1. Adicione a idade como um valor (age) para cada pessoa

passengers.forEach(passenger => {
  passenger.age = 2019 - passenger.birthYear;
});

console.table(passengers);
