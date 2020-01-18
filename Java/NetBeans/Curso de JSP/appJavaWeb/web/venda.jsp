<%-- 
    Document   : venda
    Created on : 28/09/2018, 11:40:58
    Author     : yago
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Venda de mercadoria</title>
    </head>
    <body>
        <h1>Dados da venda</h1>
        <form method="post" action="venda">
            <label>Nome do Produto</label><input type="text" name="produto"/>
            <label>Quantidade</label><input type="text" name="quantidade"/>
            <label>Valor</label><input type="text" name="valor"/>
            <input type="submit" value="Calcular"/>
        </form>
    </body>
</html>
