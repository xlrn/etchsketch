const container = document.querySelector('#container');

let divs = [];
for (i = 0; i < 16; i++) {
    let tempDiv = document.createElement('div');
    tempDiv.setAttribute('id', `square${i}`);
    container.appendChild(tempDiv);
}