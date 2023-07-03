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

            const value1 = getRandomNumber();
            const value2 = getRandomNumber();
            const value3 = getRandomNumber();

            box.style.backgroundColor = 'rgb(' + value1 + ', ' + value2 + ', ' + value3 + ')';
        });
    }
}

function getRandomNumber() {
    return Math.floor(Math.random() * 256);
}


function resetGrid() {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => {
        pixel.style.backgroundColor = 'white';
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


