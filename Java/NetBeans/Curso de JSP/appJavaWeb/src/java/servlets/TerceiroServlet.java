package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "TerceiroServlet", urlPatterns = {"/TerceiroServlet", "/terceiroservlet", "/saudacao"})
public class TerceiroServlet extends HttpServlet {
    
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        String nome = request.getParameter("nome");
        
              response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet TerceiroServlet</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Olá " + nome +", seja bem vindo a programação em Java com Servlets</h1>");
            out.println("</body>");
            out.println("</html>");
        }

            }
}
