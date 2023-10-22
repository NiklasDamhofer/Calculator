let display = document.querySelector('#display');
const numberButton = document.querySelectorAll('.buttons');

let currentNum = "";
let operator = "";
let previousNum = "";

const currentDisplayNumber = document.querySelector(".currentNumber");
const previousDisplayNumber = document.querySelector(".previousNumber");


const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const divbtn = document.getElementById('divbtn');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btnx = document.getElementById('btnx');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const minbtn = document.getElementById('minbtn');
const combtn = document.getElementById('combtn');
const btn0 = document.getElementById('btn0');
const btnequ = document.getElementById('btnequ');
const btnadd = document.getElementById('btnadd');

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

function showInput() {
    const content = document.createElement('div');
    content.classList.add('input');
    content.append = packet1;
    display.append(content);
}

function handleOperator(op) {
    
}