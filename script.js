const newGridBtn = document.querySelector('.new-grid-btn');
const sketch = document.querySelector('.sketch');
const clearBtn = document.querySelector('.clear-color-btn');

function reSizeGrid() {
    document.querySelectorAll('.row').forEach((element) => {
        element.remove();
    });
}

function defaultGrid(size) {
    for (let rowIndex = 1; rowIndex <= size; rowIndex++) {
        const row = document.createElement('div');
        row.classList.add('row');
        sketch.appendChild(row);

        for (let columnIndex = 1; columnIndex <= size; columnIndex++) {
            const column = document.createElement('div');
            column.classList.add('column');
            row.appendChild(column);

            column.addEventListener('mouseenter', function () {
                column.style.backgroundColor = 'black';
            });
            clearBtn.addEventListener('click', function(){
                column.style.backgroundColor = 'transparent';
            })
        }
    }
}

// Initial Grid
defaultGrid(16);

function createGrid() {
    let userChoiceGrid = Number(prompt('Enter a Number between 1-100'));

    if (Number.isNaN(userChoiceGrid)) {
        return alert('Value Should be Number');
    } else if (userChoiceGrid > 100 || userChoiceGrid < 1) {
        return alert('Please! between 1 to 100');
    } else {
        reSizeGrid();
        defaultGrid(userChoiceGrid);
    }
};

newGridBtn.addEventListener('click', createGrid);

