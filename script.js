const newGridBtn = document.querySelector('.new-grid-btn');
const sketch = document.querySelector('.sketch');

function reSizeGrid() {
    document.querySelectorAll('.row').forEach((element) => {
        element.remove();
    });
}

function defaultGrid(size) {
    for (let i = 1; i <= size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        sketch.appendChild(row);
        for (let i = 1; i <= size; i++) {
            const column = document.createElement('div');
            column.classList.add('column');
            row.appendChild(column).addEventListener('mouseenter', function() {
                column.style.backgroundColor = 'black';
            });
        }
    }
}

defaultGrid(16);

function createGrid() {
    reSizeGrid();
    let userChoiceGrid = Number(prompt('Enter a Number between 1-100'));

    if (Number.isNaN(userChoiceGrid)) {
         alert('Value Should be Number');
    } else if (userChoiceGrid > 100) {
        alert('Please! between 1 to 100');
    } else {
        defaultGrid(userChoiceGrid);
    }
};

newGridBtn.addEventListener('click', createGrid);

