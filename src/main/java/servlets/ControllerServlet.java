package main.java.servlets;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ControllerServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
        if (request.getParameter("x") != null && request.getParameter("y") != null &&
                request.getParameter("r") != null) {
            getServletContext().getNamedDispatcher("AreaCheckServlet").forward(request, response);
        } else
            getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
    }
}
