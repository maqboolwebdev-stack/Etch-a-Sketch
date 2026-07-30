import { buttons } from "./active-btn.js";

const rangeBar = document.querySelector('.range');
const rangeValue = document.querySelector('.rangeValue');
const sketch = document.querySelector('.sketch');
const clearBtn = document.querySelector('.clear-color-btn');
const randomColorBtn = document.querySelector('.random-color-btn');
const colorPickerInput = document.querySelector('#colorPicker');
const eraseBtn = document.querySelector('.erase-color-btn');

let mode = 'color';
let selectedColor = '#000000';
let eraseMode = 'transparent'

function clearGrid() {
    sketch.innerHTML = '';
}

function createGrid(gridSize) {
    clearGrid();

    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        sketch.appendChild(row);

        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement('div');
            cell.classList.add('column');

            // Single event listener per cell
            cell.addEventListener('mouseenter', handleDraw);

            row.appendChild(cell);
        }
    }
}

function handleDraw(e) {
    const cell = e.target;

    if (mode === 'color') {
        cell.style.backgroundColor = selectedColor;
    } else if (mode === 'random') {
        cell.style.backgroundColor = generateRandomRGB();
    } else if(mode === 'erase') {
        cell.style.backgroundColor = eraseMode;
    }
}

function handleNewGrid() {
    rangeBar.addEventListener('input', function() {
        rangeValue.textContent = rangeBar.value;
        let input = rangeBar.value
        createGrid(input);
    })
    
}

function handleColorPick(e) {
    selectedColor = e.target.value;
    mode = 'color';
}

function handleRandomMode() {
    mode = 'random';
}

function handleErase() {
    mode = 'erase';
}

function handleClear() {
    document.querySelectorAll('.column').forEach(cell => {
        cell.style.backgroundColor = 'transparent';
    });
}

function random(max) {
    return Math.floor(Math.random() * (max + 1));
}

function generateRandomRGB() {
    return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}

rangeBar.addEventListener('input', handleNewGrid);
colorPickerInput.addEventListener('input', handleColorPick);
randomColorBtn.addEventListener('click', handleRandomMode);
clearBtn.addEventListener('click', handleClear);
eraseBtn.addEventListener('click', handleErase);

// Initial grid
createGrid(16);