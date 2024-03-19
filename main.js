function addCaracter(num) {
    let display = document.querySelector(".display").value;
    document.querySelector(".display").value += num
}

function calcular() {
    let display = document.querySelector(".display").value;
    document.querySelector(".display").value = eval(display)  // -> Resolve a equação
}

function invert() {
    let display = document.querySelector(".display").value;
    document.querySelector(".display").value = display * (-1)
}

