let numeroSecreto = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);
intentos = 1;
function asignarTextoElemento(elemento, texto){

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero!! en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario>numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++; 
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    
    
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    
    if (listaNumerosSorteados.length == 10) {
        asignarTextoElemento('p','ya se sortearon todos los numero posibles');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
            
        }   
    }   
}


function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto!!');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar intervalo de numeros
    //generar numero aleatorio
    //inicializar numero de intentos
    condicionesIniciales();
    //deshabilitar el boton nuevo
    document.querySelector('#reiniciar').setAttribute('disabled', true);

}

condicionesIniciales();

