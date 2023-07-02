const grid = document.querySelector('#grid');

createGrid(16);

const newButton = document.getElementById('new-button');
newButton.addEventListener('click', createNewGrid);

const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', resetGrid);


function createGrid(sideSquares) {
    for (let i = 0; i < (sideSquares * sideSquares); i++) {
        const box = document.createElement('div');
        grid.appendChild(box);
            
        const boxSize = 640 / sideSquares;
    
        box.style.width = boxSize + 'px';
        box.style.height = boxSize + 'px';

        box.setAttribute('class', 'pixel');
    
        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = 'rgb(86, 229, 222)';
        });
    }
}


function resetGrid() {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => {
        pixel.style.backgroundColor = 'beige';
    });
}


function createNewGrid() {
    const newWidth = getNewGridWidth();
    removeGrid();
    createGrid(newWidth);
}

function getNewGridWidth() {
    let newGridWidth = prompt('How many squares do you want your new canvas to have per side?', '60');

    if (newGridWidth < 3 || newGridWidth > 100) {
        const fixedNewGridWidth = prompt ("Let's choose a number between 3 and 100 for a nice canvas :)", "70");
        return fixedNewGridWidth;
    } else {
        return newGridWidth;
    }
}

function removeGrid() {

    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
}


