<%-- 
    Document   : computador
    Created on : 18/09/2018, 17:03:53
    Author     : yago
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Computador de Bordo</title>
    </head>
    <body>
        <h1>resultado do cálculo</h1>
        <form>
            Distancia máxima
            <input type="text" size="10" value="<%= request.getAttribute("distancia") %>" /><br>
            Valor gasto para abastecer
            <input type="text" size="10" value="<%= request.getAttribute("valor") %>" /><br>
            <input type="button" value="retorno" onclick="history.back()">
        </form>
                    
    </body>
</html>
