//Reduce
//Reduzir um objeto a um valor unico
//Imutavel
//Retorna o que eu pedir para ele retornar
//Na primrira execução do callback o accumulador recebe o valor do initialValue
//Na segunda execução ele precisa assumir o valor de retorno da primeira
//Ele precisa de um return
//array.reduce((accumulator, currentValue, index, array)=>{}, initialValue, )
const { shopCart } = require("../data");
// 1.Qual o valor total desse carrinho de compras
const totalValue = shopCart.reduce(
  (acc, cur) => acc + cur.quantity * cur.unitPrice,
  0
);

console.table(totalValue);

// 2.Quantidade total de produtos do carrinho

const totalProducts = shopCart.reduce((acc, cur) => acc + cur.quantity, 0);

console.log(totalProducts);
