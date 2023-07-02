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
    let newGridWidth = prompt('How many squares do you want per side?\nEnter a number between 3 and 100 :)');

    while (newGridWidth === null || newGridWidth === '' || newGridWidth < 3 || newGridWidth > 100) {
        newGridWidth = prompt ("Let's choose a number between 3 and 100 for a nice canvas :)");
    }
    
    return newGridWidth;
    
}

function removeGrid() {

    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
}


