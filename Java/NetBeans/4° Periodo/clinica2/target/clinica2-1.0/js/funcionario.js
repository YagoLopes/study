/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    $('#cpf').mask('000.000.000-00', {reverse: true});
    $('.telefone').mask('(00) 0000-0000');
    $("#funcionario").validate({
        rules: {
            nome: {
                required: true,
                minlength: 3
            },
            orgao_emissor: {
                maxlength: 6
            },
            rg: {
                maxlength: 12
            },
            nascimento: {
                required: true
            }
        },
        messages: {
            nome: {
                required: "Por favor, informe seu nome",
                minlength: "O nome deve ter pelo menos 3 caracteres"
            },
            orgao_emissor: {
                maxlength: "A quantidade de caracteres máxima são 6."
            },
            rg: {
                maxlength: "A quantidade de caracteres máxima são 12."
            },
            nascimento: {
                required: "Por favor, informe a data de nascimento"
            },
        }
    });
});