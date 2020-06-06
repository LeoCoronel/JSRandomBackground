const btn = document.querySelector('#btnChange');
const body = document.body;
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
}

function enteroRandom() {
    let numero;
    numero = Math.floor(Math.random() * (17 - 0)) + 0;

    return numero;
}


