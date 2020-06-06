const btn = document.querySelector('#btnChange');
const body = document.body;
const hex = document.querySelector('#hex')
// Event Listeners 

btn.addEventListener('click', cambiarColor);

function cambiarColor(e) {
    e.preventDefault();
    let result = '';
    let characters = '0123456789ABCDEF'
    let randInt;

    for (var i = 0; i < 6; i++) {
        randInt = enteroRandom();
        result += characters[randInt];   
    }

    body.style.backgroundColor = "#" + result;
    hex.innerHTML = `HEX: ${result}`;
}

function enteroRandom() {
    let numero;
    numero = Math.floor(Math.random() * 16);

    return numero;
}


