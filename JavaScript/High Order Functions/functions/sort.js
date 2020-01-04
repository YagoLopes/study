// SORT
// ordenar elementos
// ordenação segue a regra do unicode ASCII
// A - Z a-z 1,11,2,3
// Maiusculo primeiro e numeros são strings
// function compare(a, b)
// [1, 2, 3, 4 ,5].sort((valor_a, valor_b)=>{
// Calcula todos com todos
//return valor > 0 //Valor avança uma casa na ordenação
// return valor == 0  // Valor continua no mesmo lugar
//return valor < 0 // Valor volata uma casa na ordenação
//})

console.log([10, 50, 3, 5, 20].sort((valor_a, valor_b) => valor_a - valor_b));
