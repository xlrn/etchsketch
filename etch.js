const container = document.querySelector('#container');

let divs = [];
const squares = 16;
for (i = 0; i < Math.pow(squares, 2); i++) {
    let tempDiv = document.createElement('div');
    tempDiv.setAttribute('id', `square${i}`);
    tempDiv.setAttribute('class', 'gridsquare');
    container.appendChild(tempDiv);
}