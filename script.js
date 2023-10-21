let display = document.querySelector('#display');

let packet1 = "";

let packet2 = "";

function showInput() {
    const content = document.createElement('div');
    content.classList.add('input');
    content.textContent = "13 + 5";
    display.append(content);
}

showInput();