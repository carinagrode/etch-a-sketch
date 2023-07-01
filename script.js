const gridContainer = document.querySelector('#grid-container');





for (let i = 0; i < 256; i++) {
    const box = document.createElement('div');
    box.className = 'box';
    gridContainer.appendChild(box);
}

// for (let i = 0; i <= 16; i++) {
//     const box = document.createElement('div');
//     box.className = 'box';
//     gridContainer.appendChild(box);
// }

