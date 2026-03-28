const newGridBtn = document.querySelector('.new-grid-btn');
const sketch = document.querySelector('.sketch');
const clearBtn = document.querySelector('.clear-color-btn');
const randomColorBtn = document.querySelector('.random-color-btn');
const colorPickerInput = document.querySelector('#colorPicker');

let mode = 'color';
let selectedColor = '#000000';

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
    }
}

function handleNewGrid() {
    const input = Number(prompt('Enter grid size (1–100):'));

    if (Number.isNaN(input)) {
        alert('Value must be a number');
        return;
    }

    if (input < 1 || input > 100) {
        alert('Enter value between 1 and 100');
        return;
    }

    createGrid(input);
}

function handleColorPick(e) {
    selectedColor = e.target.value;
    mode = 'color';
}

function handleRandomMode() {
    mode = 'random';
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

newGridBtn.addEventListener('click', handleNewGrid);
colorPickerInput.addEventListener('input', handleColorPick);
randomColorBtn.addEventListener('click', handleRandomMode);
clearBtn.addEventListener('click', handleClear);

// Initial grid
createGrid(16);