const container = document.querySelector('#container');
const squares = 16;

for (i = 0; i < Math.pow(squares, 2); i++) {
    let tempDiv = document.createElement('div');
    tempDiv.setAttribute('id', `square${i}`);
    tempDiv.setAttribute('class', 'gridsquare');
    container.appendChild(tempDiv);
}

let divs = document.querySelectorAll('.gridsquare');

divs.forEach(function(e) {
    e.addEventListener('mouseover', function() {
        e.style.backgroundColor = 'aqua';
    });
});