restore_data()

function save_data() {
    localStorage.setItem("is_graph_choice", is_graph_choice);
    localStorage.setItem("x_input.value", x_input.value);
    localStorage.setItem("y_input.value", y_input.value);
    localStorage.setItem("r_input.value", r_input.value);
}

document.getElementById("button").onmouseenter = function () {
    save_data()
}

function save_scroll(x, y) {
    localStorage.setItem("scroll", x + ";" + y);
}

function save_last_button_select(x, y, r, isHit) {
    localStorage.setItem("last_button_select", x + ";" + y + ";" + r + ";" + isHit);
}

function save_coords_to_hit(x, y) {
    localStorage.setItem("x_coord", x);
    localStorage.setItem("y_coord", y);
}

function restore_data() {
    let y = localStorage.getItem("y_input.value");
    let x = localStorage.getItem("x_input.value");
    if (y !== "undefined" || y !== undefined) y_input.value = y;
    else y_input.value = "";
    if (x !== "undefined" || x !== undefined) x_input.value = x;
    else x_input.value = "";
    r_input.value = localStorage.getItem("r_input.value");
    if (localStorage.getItem("is_graph_choice") === "true") {
        // $("#choice").fadeOut(1, function () {
        //     $("#graph_choice").fadeIn(400);
        // });
        let x_coord = localStorage.getItem("x_coord");
        let y_coord = localStorage.getItem("y_coord");
        if (x_coord !== "undefined" || x_coord !== undefined) {
            hit_point_cursor(x_coord, y_coord);
        }
    }

    draw_r();
    if (document.getElementById("table").rows.length > 1) {
        let values = $('#table tr:last').html().split("</td>");
        let x = values[0].trim().replace("<td>", "");
        let y = values[1].trim().replace("<td>", "");
        let r = values[2].trim().replace("<td>", "");
        let isHit = values[3].trim().replace("<td>", "");
        isHit = isHit.replace("td", "");
        draw_point(x, y, r, isHit);
    }
    let coords_to_scroll = localStorage.getItem("scroll")
    if (coords_to_scroll !== "undefined" || coords_to_scroll !== undefined){
        let coords = coords_to_scroll.split(";")
        // graph_div.scrollTo(coords[0], coords[1])

    }
}