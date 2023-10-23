let display = document.querySelector('#display');
const numberButton = document.querySelectorAll('.buttons');
const clear = document.querySelector('#clearBtn');

let currentNum = "";
let operator = "";
let previousNum = "";

const currentDisplayNumber = document.querySelector(".currentNumber");
const previousDisplayNumber = document.querySelector(".previousNumber");

const operators = document.querySelectorAll(".operator");

numberButton.forEach(btn => {
    btn.addEventListener('click', (e) => {
        handleNumber(e.target.textContent)
    });
});

function handleNumber(number) {
    if (currentNum.length <= 11) {
        currentNum += number;
        currentDisplayNumber.textContent = currentNum;
    };
};

operators.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        handleOperator(e.target.textContent);
    });
});

function handleOperator(op) {
    operator = op;
    previousNum = currentNum;
    previousDisplayNumber.textContent = previousNum + " " + op;
    currentNum = "";
    currentDisplayNumber.textContent = "";
}

function calculate() {
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);

    if(operator === "+") {
        previousNum = previousNum + currentNum;
    }
    previousDisplayNumber.textContent = "";
    currentDisplayNumber.textContent = previousNum;
}