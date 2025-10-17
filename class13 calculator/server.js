// console.log("Simple Calculator")

let display = document.getElementById("display");

const appendToDisplay = (input) => {
    display.value += input;
}

const cleardisplay = () => {
    display.value = "";
}
const calculate = () => {
    try {
        display.value = eval(display.value)
    }
    catch {
        display.value = "Error"
    }
}