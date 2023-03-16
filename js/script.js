// Getting elements
const numbers = document.querySelectorAll(".number")
const screen = document.getElementById("screen");
const cSign = document.getElementById("c--sign");
const operators = document.querySelectorAll(".operator");
const equalSign = document.getElementById("equal--sign");
const piSign = document.getElementById("pi--sign");
const percentSign = document.getElementById("percent--sign");


let e = 0;  // To clean the cache (e=0 it's clean; e=1 it needs to clean)
let dotAfterOper = 0;  // Allows to add more points after a sign operator
let calculation = "";  // Save the string to evaluate with eval() behind the screen

// Showing on screen
const numbersArray = Array.from(numbers);
numbersArray.forEach((number) => {
    number.addEventListener("click", () => {
        
        // Cleaning after click on equal sign
        if (e == 1) {
            calculation = "";
            screen.textContent = "";
            e = 0;
        }

        // Cleaning the screen and calculation string
        if (screen.textContent == "Screen") {
            calculation = "";
            screen.textContent = "";
        }

        // Adding value to dot button
        // if (number.textContent === ".") {
        //     number.value = ".";
        // }
        
        // Verifing not reapeat dot
        if (number.textContent === "." && screen.textContent.includes(".") && dotAfterOper == 0) {
            number.value = "";
        } else if (number.textContent === "." && dotAfterOper == 1) {
            number.value = ".";
            dotAfterOper = 0;
        }

        // Concatenating on screen and calculation string
        calculation += number.value;
        screen.textContent += number.value;

    });
});

// Clear screen with C button
cSign.addEventListener("click", () => {
    calculation = "";
    screen.textContent = "Screen";
    e = 0;
});

// Concatenating operators
const operatorsArray = Array.from(operators);
operatorsArray.forEach((operator) => {
    operator.addEventListener("click", () => {
        if (screen.textContent == "Screen") {
            calculation = "";
            screen.textContent = "";
        }
        calculation += operator.value;
        screen.textContent += operator.textContent;
        dotAfterOper = 1;
        e = 0;
    });
});

// Showing constants
piSign.addEventListener("click", () => {
    if (screen.textContent == "Screen") {
        calculation = "";
        screen.textContent = "";
    }

    if (e == 1) {
        calculation = "";
        screen.textContent = "";
        e = 0;
    }

    piSign.value = Math.PI;
    e = 0;
    screen.textContent += piSign.textContent;

    // 
    if (screen.textContent.match("[0-9.]π") && !screen.textContent.match("÷π")) {
        calculation += "*" + piSign.value;
    } else if (screen.textContent.match("[0-9.]xπ") || screen.textContent.match("π")) {
        calculation += piSign.value;
    } 
    
    // In the case of division we need to group numbers in parenthesis.
    if (screen.textContent.match("[0-9.]π÷[0-9.]π") || screen.textContent.match("π÷[0-9.]π")) {
        console.log(calculation);
        let result = screen.textContent.match(/[0-9.]π+/g);
        console.log(result);
        for (let val of result) {
            val = val.replace("π", `*${Math.PI}`);
            calculation = calculation.replace(val, `(${val})`);
        }
    } else if (screen.textContent.match("[0-9.]xπ÷[0-9.]xπ") || screen.textContent.match("π÷[0-9.]xπ")) {
        let result = screen.textContent.match(/[0-9.]xπ+/g);
        for (let val of result) {
            val = val.replace("xπ", `*${Math.PI}`);
            calculation = calculation.replace(val, `(${val})`);
        }
    } 
});


// Calculating percentage
percentSign.addEventListener("click", () => {
    if (screen.textContent == "Screen") {
        calculation = "";
        screen.textContent = "";
    }

    calculation += percentSign.value;
    screen.textContent += percentSign.textContent;
    
});


// Evaluating operations
equalSign.addEventListener("click", () => {
    console.log(calculation);

    try {
        if (screen.textContent == "Screen") {
            screen.textContent = "Screen";
        } else if (screen.textContent.includes("xx") || screen.textContent.includes("÷÷")) {
            screen.textContent = "Error";
            e = 1;
        } else {
            screen.textContent = eval(calculation);
            e = 1;
        }
    } 
    catch (error) {
        screen.textContent = "Error";
        e = 1;
    }
});