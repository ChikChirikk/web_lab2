package main.java.servlets;

import main.java.beans.EntriesBean;
import main.java.beans.Entry;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;

public class AreaCheckServlet extends HttpServlet {
    private static final Double rRange[] = {1d, 1.5, 2d, 2.5, 3d};

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        final long startTime = System.nanoTime();

        String xString = request.getParameter("x");
        String yString = request.getParameter("y").replace(',', '.');
        String rString = request.getParameter("r");
        boolean isValuesValid = validateValues(xString, yString, rString);

        if (isValuesValid) {
            double xValue = Double.parseDouble(xString);
            double yValue = Double.parseDouble(yString);
            double rValue = Double.parseDouble(rString);
            boolean isHit = checkHit(xValue, yValue, rValue);


            String currentTime = new SimpleDateFormat("HH:mm:ss").format(new Date());

            EntriesBean entries = (EntriesBean) request.getSession().getAttribute("entries");
            if (entries == null) entries = new EntriesBean();
            String executionTime = String.valueOf((System.nanoTime() - startTime));
            entries.getEntries().add(new Entry(xValue, yValue, rValue, currentTime, executionTime, isHit));
            request.getSession().setAttribute("entries", entries);
            response.setCharacterEncoding("UTF-8");
        }
        getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
    }

    private boolean validateX(String xString) {
        try {
            double xValue = Double.parseDouble(xString);
            return xValue >= -4 && xValue <= 4;
        } catch (NumberFormatException exception) {
            return false;
        }
    }

    private boolean validateY(String yString) {
        try {
            double yValue = Double.parseDouble(yString);
            return yValue >= -5 && yValue <= 5;
        } catch (NumberFormatException exception) {
            return false;
        }
    }

    private boolean validateR(String rString) {
        try {
            double rValue = Double.parseDouble(rString);
            return Arrays.asList(rRange).contains(rValue);
        } catch (NumberFormatException exception) {
            return false;
        }
    }

    private boolean validateValues(String xString, String yString, String rString) {
        return validateX(xString) && validateY(yString) && validateR(rString);
    }

    private boolean checkRectangle(double x, double y, double r) {
        return x >= 0 && y >= 0 && y <= r / 2 && x >= -r;
    }

    private boolean checkCircle(double x, double y, double r) {
        return x >= 0 && y <= 0 && Math.sqrt(x * x + y * y) <= r / 2;
    }

    private boolean checkTriangle(double x, double y, double r) {
        return (x >= 0 && y >= 0) && y <= r / 2 && x <= r -2*y;
    }

    private boolean checkHit(double xValue, double yValue, double rValue) {
        return checkTriangle(xValue, yValue, rValue) || checkRectangle(xValue, yValue, rValue) ||
                checkCircle(xValue, yValue, rValue);
    }
}
