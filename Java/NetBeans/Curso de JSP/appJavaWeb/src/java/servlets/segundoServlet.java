package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "segundoServlet", urlPatterns = {"/segundoServlet"})
public class segundoServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet segundoServlet</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("Nome do servlet ....................:" + request.getContextPath() + "<br>");
            out.println("Nome da máquina local ..............:" + request.getLocalName()+ "<br>");
            out.println("Endereço da máquina local ..........:" + request.getLocalAddr()+ "<br>");
            out.println("Endereço da máquina local ..........:" + request.getLocalPort()+ "<br>");
            out.println("Endereço do Servidor ...............:" + request.getRemoteHost()+ "<br>");
            out.println("Porta do Servidor ..................:" + request.getRemotePort()+ "<br>");
            out.println("Método de Requisição ...............:" + request.getMethod()+ "<br>");
            out.println("Protocolo Utilizado.................:" + request.getProtocol()+ "<br>");
            out.println("</body>");
            out.println("</html>");
        }
    }
}
