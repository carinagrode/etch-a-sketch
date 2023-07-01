const grid = document.querySelector('#grid');

for (let i = 0; i < 256; i++) {
    const box = document.createElement('div');
    grid.appendChild(box);
    box.className = 'box';

    box.addEventListener('mouseenter', () => {
        box.style.backgroundColor = 'blue';
    });
    
    box.addEventListener('mouseleave', () => {
        box.style.backgroundColor = 'pink';
    });
}

