'use strict';
let inInputMode = true;
let input;
let outputMap = new Map();

const inputSection = document.querySelector('.input');
const outputSection = document.querySelector('.output');

const textarea = document.querySelector('.ta');
const outputList = document.querySelector('.list');

function switchmode() {
    if(inInputMode) { // switch to output
        getInput();
        createMap();
        createList();
        clearInput();
    } else { // switch to input
        clearOutput();
    }
    inputSection.classList.toggle('hidden');
    outputSection.classList.toggle('hidden');
    inInputMode = !inInputMode;
}

function getInput() {
    let strInput = textarea.value;
    input = strInput.split('\n');
}

function clearInput() {
    textarea.value = '';
}

function clearOutput() {
    input = [];
    outputMap = new Map();
    outputList.innerHTML = '';
}

function createMap() {
    input.forEach((item, index) => {
        let parsed = (item.trim()).toUpperCase();
        if(parsed !== '') {
            outputMap.set(parsed, outputMap.get(parsed) + 1 || 1);
        }
    });
}

function createList() {
    outputMap.forEach((value, key) => {
        let li = document.createElement('li');
        li.innerHTML = '▶️ <span class="tag">ID:</span> ' + key + '&emsp;<span class="tag">QTY:</span> ' + value +'<hr style="width: 100%; margin-left:0;">';
        outputList.appendChild(li);
    });
}
