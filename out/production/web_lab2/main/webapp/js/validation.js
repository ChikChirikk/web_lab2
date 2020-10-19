r_input = document.getElementById("r");
y_input = document.getElementById("y");
x_input = document.getElementById("x");
table = document.getElementById("table");


r_input.onchange = function () {
    draw_r();
    clear_points();
}
y_input.onchange = function () {
    this.setAttribute("class", "sample_input")
    check_input(this, 5, -5)
};
x_input.onchange = function () {
    this.setAttribute("class", "sample_input")
    check_input(this, 4, -4)
}


function check_input(input , max, min) {
    if (!/^-?\d+(\.|,)?\d*$/i.test(input.value)) {
        // alert("Значение \"Y\" должно быть числом в интервале [-4;4]");
        input.setAttribute("class", "failed_input")
        input.value = "";
        return false;
    } else if (input.value.replace(/[,]/, ".") >= min && input.value.replace(/[,]/, ".") <= max) {
        if (/(\.|,)$/i.test(input.value)) {
            // alert("Значение \"Y\" должно быть числом в интервале [-4;4]");
            input.setAttribute("class", "failed_input")
            input.value = "";
            return false;
        } else {
            input.value = input.value.replace(/[,]/, ".");
            return true;
        }
    } else if (/(\.|,)$/i.test(input.value)) {
        // alert("Значение \"Y\" должно быть числом в интервале [-4;4]");
        input.setAttribute("class", "failed_input")
        input.value = "";
        return false;
    } else {
        // alert("Значение \"Y\" должно быть числом в интервале [-4;4]");
        input.setAttribute("class", "failed_input")
        input.value = "";
        return false;
    }
}
