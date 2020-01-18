const url = "https://api.github.com/facebook"; //Sua URL
const axios = window.axios;

/*
var url = "https://dicasdejavascript.com.br/exemplo.txt";//Sua URL

var xhttp = new XMLHttpRequest();
xhttp.open("GET", url, false);
xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

console.log(xhttp.responseText);
*/

async function push() {
  const response = await axios.get("https://api.github.com/users/facebook");
  return response;
}
console.log(push());
