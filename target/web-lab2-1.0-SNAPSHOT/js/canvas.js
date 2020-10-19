canvas = document.getElementById("graph");
context = canvas.getContext("2d");

r_canvas = document.getElementById("r_graph");
r_context = r_canvas.getContext("2d");

width_canvas = 1200;
height_canvas = 1350;

point_canvas = document.getElementById("point_graph");
point_contex = point_canvas.getContext("2d");

hit_canvas = document.getElementById("hit_graph");
hit_contex = hit_canvas.getContext("2d");
draw()

draw_r();

function draw_r() {
    r_context.clearRect(0, 0, width_canvas, height_canvas);
    let R = document.getElementById("r").value;
    r_context.strokeStyle = "black";
    r_context.fillText("0", 285, 320);
    if (R === "" || R === undefined || R === 0) {
        r_context.fillText("-3R/2", 59, 320);
        r_context.fillText("-R", 142, 320);
        r_context.fillText("-R/2", 210, 320);
        r_context.fillText("R/2", 365, 320);
        r_context.fillText("R", 447, 320);
        r_context.fillText("3R/2", 515, 320);
        r_context.fillText("3R/2", 262, 78);
        r_context.fillText("R", 283, 153);
        r_context.fillText("R/2", 269, 228);
        r_context.fillText("-R/2", 265, 378);
        r_context.fillText("-R", 277, 453);
        r_context.fillText("-3R/2", 258, 528);
    } else if (R.split(".")[1] === "5") {
        r_context.fillText(-3 * R / 2, 60, 320);
        r_context.fillText(-R, 136, 320);
        r_context.fillText(-R / 2, 210, 320);
        r_context.fillText(R / 2, 367, 320);
        r_context.fillText(R, 442, 320);
        r_context.fillText(3 * R / 2, 516, 320);
        r_context.fillText(3 * R / 2, 262, 78);
        r_context.fillText(R, 269, 153);
        r_context.fillText(R / 2, 262, 228);
        r_context.fillText(-R / 2, 258, 378);
        r_context.fillText(-R, 266, 453);
        r_context.fillText(-3 * R / 2, 258, 528);
    } else if (R % 2 === 0) {
        r_context.fillText(-3 * R / 2, 67, 320);
        r_context.fillText(-R, 142, 320);
        r_context.fillText(-R / 2, 217, 320);
        r_context.fillText(R / 2, 372, 320);
        r_context.fillText(R, 447, 320);
        r_context.fillText(3 * R / 2, 522, 320);
        r_context.fillText(3 * R / 2, 280, 78);
        r_context.fillText(R, 280, 153);
        r_context.fillText(R / 2, 280, 228);
        r_context.fillText(-R / 2, 277, 378);
        r_context.fillText(-R, 277, 453);
        r_context.fillText(-3 * R / 2, 277, 528);
    } else {
        r_context.fillText(-3 * R / 2, 61, 320);
        r_context.fillText(-R, 142, 320);
        r_context.fillText(-R / 2, 211, 320);
        r_context.fillText(R / 2, 367, 320);
        r_context.fillText(R, 447, 320);
        r_context.fillText(3 * R / 2, 516, 320);
        r_context.fillText(3 * R / 2, 268, 78);
        r_context.fillText(R, 280, 153);
        r_context.fillText(R / 2, 270, 228);
        r_context.fillText(-R / 2, 268, 378);
        r_context.fillText(-R, 278, 453);
        r_context.fillText(-3 * R / 2, 268, 528);
    }
}

graph_div = document.getElementById("graph_div");
graph_div.scrollTo(width_canvas / 4, height_canvas / 4 + 150)
// graph_div.onscroll = function () {
//     let coords = canvas.relMouseCoords(event);
//     let x = coords.x;
//     let y = coords.y;
//     save_scroll(x,y)
// }
function draw() {
    context.beginPath();

    context.font = "12px veranda"

    context.lineWidth = 2;
    context.fillStyle = "rgba(91,95,201,0.58)";
    context.strokeStyle = "rgba(91,95,201,0.1)";
    context.clearRect(0, 0, width_canvas, height_canvas);
    // прямоугольник
    context.fillRect(width_canvas / 2 - 150, height_canvas / 2 - 75, 150, 75);
    // четверть круга
    context.moveTo(width_canvas / 2, height_canvas / 2)
    context.arc(width_canvas / 2, height_canvas / 2, 75, -3 * Math.PI / 2, 0, true);
    // треугольник
    context.moveTo(width_canvas / 2, height_canvas / 2);
    context.lineTo(width_canvas / 2, height_canvas / 2 - 75);
    context.lineTo(width_canvas / 2 + 150, height_canvas / 2);
    context.lineTo(width_canvas / 2, height_canvas / 2);
    context.fill();
    context.stroke();
    context.lineWidth = 0.4;
    context.strokeStyle = "rgba(91,90,95,0.7)";
    //штрихи x
    for (let i = 75; i <= width_canvas - 75; i += 75) {
        context.moveTo(i, height_canvas);
        context.lineTo(i, 0);
    }
    //штрихи y
    for (let i = 75; i <= height_canvas - 75; i += 75) {
        context.moveTo(width_canvas, i);
        context.lineTo(0, i);
    }
    context.closePath()

    context.stroke();
    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = "black";
    //ось X черные штрижки
    for (let i = 75; i <= width_canvas - 75; i += 75) {
        context.moveTo(i, height_canvas / 2 + 5);
        context.lineTo(i, height_canvas / 2 - 5);
    }
    //Ось Y черные штрижки
    for (let i = 75; i <= height_canvas - 75; i += 75) {
        context.moveTo(width_canvas / 2 + 5, i);
        context.lineTo(width_canvas / 2 - 5, i);
    }
    context.stroke();
    context.fillStyle = "rgb(17,16,16)";
    context.font = "12px veranda";
    //ось у стрелка
    context.moveTo(width_canvas / 2, height_canvas);
    context.lineTo(width_canvas / 2, 0);
    context.lineTo(width_canvas / 2 + 3, 7);
    context.moveTo(width_canvas / 2, 0);
    context.lineTo(width_canvas / 2 - 3, 7);
    context.lineTo(width_canvas / 2 + 4, 7);
    context.fillText("y", width_canvas / 2 - 18, 12);

    //Ось X стрелка
    context.moveTo(0, height_canvas / 2);
    context.lineTo(width_canvas, height_canvas / 2);
    context.lineTo(width_canvas - 7, height_canvas / 2 - 3);
    context.moveTo(width_canvas, height_canvas / 2);
    context.lineTo(width_canvas - 7, height_canvas / 2 + 3);
    context.lineTo(width_canvas - 7, height_canvas / 2 - 4);
    context.fillText("x", width_canvas - 8, height_canvas / 2 + 20);
    context.stroke();

    context.closePath();

}

graph_div.onclick = function () {
    let coords = canvas.relMouseCoords(event);
    let x = coords.x;
    let y = coords.y;
    save_coords_to_hit(x,y);
    hit_point_cursor(x,y);

}

function relMouseCoords(event) {
    let totalOffsetX = 0;
    let totalOffsetY = 0;
    let canvasX = 0;
    let canvasY = 0;
    let currentElement = this;

    do {
        totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
        totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
    }
    while (currentElement = currentElement.offsetParent)

    canvasX = event.pageX - totalOffsetX;
    canvasY = event.pageY - totalOffsetY;

    return {x: canvasX, y: canvasY}
}

HTMLCanvasElement.prototype.relMouseCoords = relMouseCoords;


context.lineWidth = 2;
context.strokeStyle = 'black';

document.getElementById("back_button").onclick = function (event) {
        $("#graph_choice").fadeOut(300, function () {
            $("#choice").fadeIn(300);
        });
        try {
            is_graph_choice = false;
            y_input.value = old_y_value;
            x_input.value = old_x_value;
            if (is_empty_x) x_input = "";
            if (is_empty_y) y_input = "";
        }
        catch (e) {
            
        }
};
x_graph_input = document.getElementById("x_choice");
y_graph_input = document.getElementById("y_choice");
r_graph_input = document.getElementById("r_choice");
is_graph_choice = false;

function clear_labels() {
    x_graph_input.innerText = "...";
    y_graph_input.innerText = "...";
}

function hit_point_cursor(x,y) {
    $("#choice").fadeOut(10, function () {
        $("#graph_choice").fadeIn(400);
    });
    hit_contex.clearRect(0, 0, width_canvas, height_canvas);
    let r = r_input.value;
    
    hit_contex.beginPath();
    hit_contex.strokeStyle = "rgb(0,0,0)";
    hit_contex.arc(x, y, 2, 0, 2 * Math.PI);
    hit_contex.fill();
    hit_contex.stroke();
    
    
    x_graph_input.innerText = ((x - width_canvas / 2) / 150 * r).toFixed(2);
    y_graph_input.innerText = ((-y + height_canvas / 2) / 150 * r).toFixed(2);
    r_graph_input.innerText = r;
    is_graph_choice = true;
    old_x_value = x_input.value;
    old_y_value = y_input.value;
    if (x_input.value === "") is_empty_x = true;
    if (y_input.value === "") is_empty_y = true;
    x_input.value = x_graph_input.innerText;
    y_input.value = y_graph_input.innerText;
}

var is_empty_y = false;
var is_empty_x = false;
var old_x_value = "";
var old_y_value = "";

function draw_point(x, y, r, isHit) {
    clear_hit_point();
    point_contex.clearRect(0, 0, width_canvas, height_canvas)
    point_contex.fillStyle = "rgb(255,255,255)";
    point_contex.strokeStyle = "rgb(255,255,255)";
    point_contex.setLineDash([5, 3]);
    point_contex.moveTo(width_canvas / 2 + x * 150 / r, height_canvas / 2 - 150 * y / r);
    point_contex.lineTo(width_canvas / 2, height_canvas / 2 - 150 * y / r)
    point_contex.moveTo(width_canvas / 2 + x * 150 / r, height_canvas / 2 - 150 * y / r);
    point_contex.lineTo(width_canvas / 2 + x * 150 / r, height_canvas / 2);
    point_contex.stroke();

    point_contex.setLineDash([]);
    if (!isHit || isHit === "false") {
        point_contex.fillStyle = "rgb(231,37,37)";
        point_contex.strokeStyle = "rgb(241,58,58)";
    } else {
        point_contex.fillStyle = "rgb(61,212,70)";
        point_contex.strokeStyle = "rgb(51,234,56)";
    }
    point_contex.beginPath();
    point_contex.arc(width_canvas / 2 + x * 150 / r, height_canvas / 2 - 150 * y / r, 4, 0, 2 * Math.PI);
    point_contex.fill();
    point_contex.stroke();
    point_contex.setLineDash([]);
    point_contex.closePath();
    point_contex.strokeStyle = "rgb(255,255,255)";
    point_contex.arc(width_canvas / 2 + x * 150 / r, height_canvas / 2 - 150 * y / r, 5, 0, 2 * Math.PI);
    point_contex.stroke();
    graph_div.scrollTo({
        top: height_canvas / 2 - 150 - 150 * y / r,
        left: width_canvas / 4 + x * 150 / r,
        behavior: 'smooth'
    });
    // save_scroll(height_canvas / 2 - 150 - 150 * y / r, width_canvas / 4 + x * 150 / r)
}

function clear_points() {
    point_contex.clearRect(0, 0, width_canvas, height_canvas);
}

function clear_hit_point() {
    hit_contex.clearRect(0, 0, width_canvas, height_canvas);
}
