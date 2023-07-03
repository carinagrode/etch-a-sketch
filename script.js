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
    const newWidth = prompt('How many squares do you want per side?\nEnter a number between 3 and 100 :)');

    if (newWidth === null) {
        return;
    }

    while (newWidth === '' || newWidth < 3 || newWidth > 100) {
        newWidth = prompt ("Let's choose a number between 3 and 100 for a nice canvas :)");
    }

    removeGrid();
    createGrid(newWidth);
}

function removeGrid() {

    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
}


// Change the favicon color each time the browser is refreshed

const favicon = document.querySelector('link[rel="icon"]');

function changeFavicon() {
  const randomColor = getRandomColor();
  favicon.href = `favicon/${randomColor}.png`;
}

function getRandomColor() {

  const randomNumber = Math.floor(Math.random() * 5) + 1;
  return `color${randomNumber}`;
}

window.addEventListener('load', changeFavicon);



