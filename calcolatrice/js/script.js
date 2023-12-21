const display = document.getElementById('display');
const calculator = document.getElementById('calculator');
let button = document.getElementsByTagName('button');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function switchLightness() {
    display.classList.toggle("light-display");
    calculator.classList.toggle("light-calculator");
    for(let appoggio of button) {
        appoggio.classList.toggle('light-btn')
    }
    document.querySelector('.switch-btn').classList.toggle('clicked');
}