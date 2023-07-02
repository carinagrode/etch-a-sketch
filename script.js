const grid = document.querySelector('#grid');

for (let i = 0; i < 256; i++) {
    const box = document.createElement('div');
    grid.appendChild(box);
    box.className = 'box';

    box.addEventListener('mouseenter', () => {
        box.style.backgroundColor = 'rgb(86, 229, 222)';
    });
}

const newButton = document.getElementById('newbutton');
newButton.addEventListener('click', createNewGrid);

function createNewGrid() {
    const newWidth = getNewGridWidth();
    

    


}

function getNewGridWidth() {
    const newGridWidth = prompt('How many squares do you want your new canvas to have per side?', '60');

    if (newGridWidth < 3 || newGridWidth > 100) {
        const fixedNewGridWidth = prompt ("Let's choose a number between 3 and 100 for a nice canvas :)", "70");
        return fixedNewGridWidth;
    } else {
        return newGridWidth;
    }
}
