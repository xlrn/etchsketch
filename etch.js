const container = document.querySelector('#container');
const header = document.querySelector('#header');

const btn = document.createElement('button');
btn.setAttribute('id', 'reset');
btn.textContent = 'Reset';
header.appendChild(btn);

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => resetGrid());

function generateGrid(squares = 16) {
    container.style.setProperty('--gridlength', squares);

    for (i = 0; i < Math.pow(squares, 2); i++) {
        let tempDiv = document.createElement('div');
        tempDiv.setAttribute('id', `square${i}`);
        tempDiv.setAttribute('class', 'gridsquare');
        container.appendChild(tempDiv);
    }

    let divs = document.querySelectorAll('.gridsquare');

    divs.forEach(function(e) {
        e.addEventListener('mouseover', function() {
            e.style.backgroundColor = generateRGB();
        });
    });
}

function resetGrid () {
    let input = prompt('Enter length of grid.', 16);
    if (input != null) {
        let divs = document.querySelectorAll('.gridsquare');
        divs.forEach(function(e) {
            e.remove();
        });

        generateGrid(input);
    }
}

function generateRGB() {
    let h = Math.floor(Math.random() * 361);
    let s = '100%'
    let l = '50%'
    let rgb = `hsl(${h}, ${s}, ${l})`;
    console.log(rgb);
    return rgb;
}

window.onload = function() {
    generateGrid();
}