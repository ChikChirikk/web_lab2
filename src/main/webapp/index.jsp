<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<jsp:useBean id="entries" class="main.java.beans.EntriesBean" scope="session"/>
<head>
    <meta charset="UTF-8">
    <title>Лаб2</title>
    <script src="https://yastatic.net/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js"></script>
    <script src="js/draw_table.js"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div id="content">
    <div id="description">
        Инячина Диана Александровна P3114 Вариант 921871
    </div>
    <div id="graph_div">
        <canvas name="canvas" class="graph" width="1205" height="1200" id="graph"></canvas>
        <canvas name="canvas" class="r_graph" width="605" height="600" id="r_graph"></canvas>
        <canvas name="canvas" class="point_graph" width="1205" height="1200" id="point_graph"></canvas>
        <canvas name="canvas" class="point_graph" width="1205" height="1200" id="hit_graph"></canvas>
    </div>
    <div id="coordinates">
        <form id="form" method="post" action="/web-lab2">
            <div id="choice">
                <label>X</label>
                <input type="text" required id="x" name="x" maxlength="10" placeholder="-4...4">
                <br><br>
                <label>Y</label>
                <input type="text" required id="y" name="y" maxlength="10" placeholder="-5...5">
                <br><br>
                <label>R</label>
                <select required id="r" name="r">
                    <option value="1">1</option>
                    <option value="1.5">1.5</option>
                    <option value="2">2</option>
                    <option value="2.5">2.5</option>
                    <option value="3">3</option>
                </select>
            </div>
            <div id="graph_choice" hidden="true">
                <input type="button" id="back_button" value="back">
                <div id="coord_value_labels">
                    <div id="coord_labels">
                        <label>X:</label>
                        <br><br>
                        <label>Y:</label>
                        <br><br>
                        <label>R:</label>
                    </div>
                    <div id="value_labels">
                        <label id="x_choice"></label>
                        <br><br>
                        <label id="y_choice"></label>
                        <br><br>
                        <label id="r_choice"></label>
                    </div>
                </div>
            </div>
            <div id="bottoms">
                <input align="left" type="submit" name="button" id="button" value="send">
                <input align="right" type="reset" name="clear" id="reset" value="reset" onclick="clear_table()">
            </div>

        </form>
    </div>
    <div id="table_div">
        <div class="table_container">
            <table id="table" align="center" border="2">
                <tr>
                    <th>X</th>
                    <th>Y</th>
                    <th>R</th>
                    <th>Result</th>
                    <th>Script time</th>
                    <th>Time</th>
                    <th>Action</th>
                </tr>
                <c:forEach var="entry" items="${entries.entries}">
                    <tr class="row_table">
                        <td>${entry.xValue}</td>
                        <td>${entry.yValue}</td>
                        <td>${entry.rValue}</td>
                        <td>${entry.hitResult}</td>
                        <td>${entry.executionTime} ns</td>
                        <td>${entry.currentTime}</td>
                        <td name="select_td"></td>
                        <script>add_select_button(${entry.xValue}, ${entry.yValue}, ${entry.rValue}, ${entry.hitResult})</script>
                    </tr>
                </c:forEach>
            </table>
        </div>
    </div>
</div>
<script src="js/canvas.js"></script>
<script src="js/validation.js"></script>
<script src="js/contact.js"></script>
<script src="js/restore.js"></script>
</body>
</html>