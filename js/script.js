// Getting elements
const numbers = document.querySelectorAll(".number")
const screen = document.getElementById("screen");
const cSign = document.getElementById("c--sign");
const percentSign = document.getElementById("percent--sign");
const powerSign = document.getElementById("power--sign");
const divisionSign = document.getElementById("division--sign");
const sevenSign = document.getElementById("seven--sign");
const eightSign = document.getElementById("eight--sign");
const nineSign = document.getElementById("nine--sign");
const productSign = document.getElementById("product--sign");
const fourSign = document.getElementById("four--sign");
const fiveSign = document.getElementById("five--sign");
const sixSign = document.getElementById("six--sign");
const lessSign = document.getElementById("less--sign");
const oneSign = document.getElementById("one--sign");
const twoSign = document.getElementById("two--sign");
const threeSign = document.getElementById("three--sign");
const plusSign = document.getElementById("plus--sign");
const zeroSign = document.getElementById("zero--sign");
const dotSign = document.getElementById("dot--sign");
const piSign = document.getElementById("pi--sign");
const equalSign = document.getElementById("equal--sign");

// Showing on screen
const numbersArray = Array.from(numbers);
numbersArray.forEach((number) => {
    number.addEventListener("click", () => {
        if (number.textContent === ".") {
            number.value = ".";
        }
        if (screen.textContent == "Screen") {
            screen.textContent = "";
        }
        if (number.textContent === "." && screen.textContent.includes(".")) {
            number.value = "";
        }
        screen.textContent += number.value;
    });
});

cSign.addEventListener("click", () => {
    screen.textContent = "Screen";
});


