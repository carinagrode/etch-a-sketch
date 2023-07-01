const grid = document.querySelector('#grid');

for (let i = 0; i < 256; i++) {
    const box = document.createElement('div');
    box.className = 'box';
    grid.appendChild(box);
}

