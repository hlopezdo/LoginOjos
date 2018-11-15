var minIzquierda = 33;
var minDerecha = 50;
var maxIzquierda = 54;

var posicionIzquierda = minIzquierda;
var posicionDerecha = minDerecha;

function moverOjos(elemento) {
    var ojoIzquierdo = document.getElementById("ojoIzquierdo");
    var ojoDerecho = document.getElementById("ojoDerecho");

    if (elemento.keyCode === 8 || elemento.keyCode === 46) {
        if (posicionIzquierda - 1 >= minIzquierda) {
            posicionIzquierda -= 1;
            posicionDerecha += 1;
        }
    } else if (alphanumeric(elemento.key)) {
        if (posicionIzquierda + 1 <= maxIzquierda) {
            posicionIzquierda += 1;
            posicionDerecha -= 1;
        }
    }

    ojoIzquierdo.style.left = posicionIzquierda + "px";
    ojoDerecho.style.right = posicionDerecha + "px";
}

function quitarMirada() {
    var ojoIzquierdo = document.getElementById("ojoIzquierdo");
    var ojoDerecho = document.getElementById("ojoDerecho");
    
    ojoIzquierdo.style.left = 60 + "px";
    ojoIzquierdo.style.top = 90 + "px";

    ojoDerecho.style.right = 23 + "px";
    ojoDerecho.style.top = 90 + "px";
}

function volverMirada() {
    var ojoIzquierdo = document.getElementById("ojoIzquierdo");
    var ojoDerecho = document.getElementById("ojoDerecho");
    
    ojoIzquierdo.style.left = minIzquierda + "px";
    ojoIzquierdo.style.top = 160 + "px";

    ojoDerecho.style.right = minDerecha + "px";
    ojoDerecho.style.top = 160 + "px";
}

function alphanumeric(elemento) {
    var letters = /^[0-9a-zA-Z]$/;
    return elemento.match(letters);
}