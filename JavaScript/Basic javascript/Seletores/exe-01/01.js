var campos = [ 
document.querySelector("#nome"),
document.querySelector("#senha"),
document.querySelector("#nickname")
];
var tbody = document.querySelector('tbody');
document.querySelector('.form').addEventListener('submit', function(event) {

   event.preventDefault();

   var tr = document.createElement('tr');

   campos.forEach(function(campo) {
    var td = document.createElement('td');
    td.textContent = campo.value;
    tr.appendChild(td);
   });

tbody.appendChild(tr);
});