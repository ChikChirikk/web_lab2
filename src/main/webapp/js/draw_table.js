table = document.getElementById("table")

function clear_table() {
    $.post("reset", function (responseText) {
    });
    localStorage.clear();
    clear_points();
    clear_hit_point();
    clear_labels();
    table.innerHTML = "<th>X</th>\n" +
        "<th>Y</th>" +
        "<th>R</th>" +
        "<th>Result</th>" +
        "<th>Script time</th>" +
        "<th>Time</th>" +
        "<th>Action</th>";
}

// function getDeleteButton() {
//     let delete_button = document.createElement("button");
//     delete_button.innerHTML = "delete";
//     delete_button.setAttribute("class", "table_button");
//     delete_button.onclick = function () {
//         $(this).parent().remove();
//         //document.getElementById("point_" + this.value).remove();
//         let cookies = "";
//         for (let r = 1, n = table.rows.length; r < n; r++) {
//             for (let c = 0, m = table.rows[r].cells.length - 1; c < m; c++) {
//                 cookies += (table.rows[r].cells[c].innerHTML) + ",";
//             }
//             cookies += table.rows[r].cells[5].innerHTML + ";";
//         }
//         document.cookie = encodeURIComponent("data") + '=' + (encodeURIComponent(cookies));
//     }
//     return delete_button;
// }

var is_selected = false;
function add_select_button(x, y, r, isHit) {
    let rows = document.getElementsByName("select_td");
    let row = rows[rows.length - 1];
    row.appendChild(getSelectButton(x, y, r, isHit))
}

function getSelectButton(x, y, r, isHit) {
    let select_button = document.createElement("button");
    select_button.setAttribute("class", "table_button");
    select_button.setAttribute("name", "select_button");
    select_button.innerHTML = "select";
    select_button.value = x + ";" + y + ";" + r + ";" + isHit;

    select_button.onclick = function () {
        // let values = $(this).parent().html().split("</td>");
        if (this.innerHTML === "select") {
            clear_points();
            clear_hit_point();
            is_selected = true;
            let clicked_button = document.getElementsByName('clicked_button')[0];
            if (clicked_button != undefined) {
                clicked_button.click();
                clicked_button.setAttribute("name", "select_button");
            }
            this.innerHTML = "unselect";
            this.setAttribute("name", "clicked_button");
            let values = this.value.split(";");
            r_input.value = values[2];
            draw_r();
            draw_point(values[0],values[1],values[2],values[3]);
            this.style.background = "#1d49aa";
        } else {
            this.innerHTML = "select";
            this.setAttribute("name", "select_button");
            clear_points();
            is_selected = false;
            this.style.background = "#6086d4";
            graph_div.scrollTo({
                top: height_canvas / 2 - 150,
                left: width_canvas / 4,
                behavior: 'smooth'
            });
        }
    }
    return select_button;
}