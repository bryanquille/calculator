// Getting elements
const numbers = document.querySelectorAll(".number")
const screen = document.getElementById("screen");
const cSign = document.getElementById("c--sign");
const operators = document.querySelectorAll(".operator");
const equalSign = document.getElementById("equal--sign");
const piSign = document.getElementById("pi--sign");
const percentSign = document.getElementById("percent--sign");


// const powerSign = document.getElementById("power--sign");
// const divisionSign = document.getElementById("division--sign");
// const sevenSign = document.getElementById("seven--sign");
// const eightSign = document.getElementById("eight--sign");
// const nineSign = document.getElementById("nine--sign");
// const productSign = document.getElementById("product--sign");
// const fourSign = document.getElementById("four--sign");
// const fiveSign = document.getElementById("five--sign");
// const sixSign = document.getElementById("six--sign");
// const lessSign = document.getElementById("less--sign");
// const oneSign = document.getElementById("one--sign");
// const twoSign = document.getElementById("two--sign");
// const threeSign = document.getElementById("three--sign");
// const plusSign = document.getElementById("plus--sign");
// const zeroSign = document.getElementById("zero--sign");
// const dotSign = document.getElementById("dot--sign");


let e = 0;
let dotAfterOper = 0;

// Showing on screen
const numbersArray = Array.from(numbers);
numbersArray.forEach((number) => {
    number.addEventListener("click", () => {
        
        // Cleaning after click on equal sign
        if (e == 1) {
            screen.textContent = "";
            e = 0;
        }

        // Adding value to dot button
        if (number.textContent === ".") {
            number.value = ".";
        }

        // Cleaning the screen
        if (screen.textContent == "Screen") {
            screen.textContent = "";
        }

        // Verifing not reapeat dot
        if (number.textContent === "." && screen.textContent.includes(".") && dotAfterOper == 0) {
            number.value = "";
        } else if (number.textContent === "." && dotAfterOper == 1) {
            number.value = ".";
            dotAfterOper = 0;
        }

        // Concatenating on screen
        screen.textContent += number.value;
    });
});

// Clear screen
cSign.addEventListener("click", () => {
    screen.textContent = "Screen";
    e = 0;
});

// Concatenating operators
const operatorsArray = Array.from(operators);
operatorsArray.forEach((operator) => {
    operator.addEventListener("click", () => {
        if (screen.textContent == "Screen") {
            screen.textContent = "";
        }
        screen.textContent += operator.value;
        dotAfterOper = 1;
        e = 0;
    });
});

// Showing constants
piSign.addEventListener("click", () => {
    if (screen.textContent == "Screen") {
        screen.textContent = "";
    }

    piSign.value = Math.PI.toFixed(5);
    if (screen.textContent.match(/[0-9.]/)) {
        screen.textContent += "*" + piSign.value;
        e = 0;
    } else {
        screen.textContent += piSign.value;
        e = 0;
    }
});


// Calculating percentage
percentSign.addEventListener("click", () => {
    if (screen.textContent == "Screen") {
        screen.textContent = "";
    }

    screen.textContent += percentSign.value;
    
});


// Evaluating operations
equalSign.addEventListener("click", () => {
    try {
        screen.textContent = eval(screen.textContent);
        e = 1;
    } 
    catch (error) {
        screen.textContent = "Error";
        e = 1;
    }
});