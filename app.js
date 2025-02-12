// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let listaAmigos = document.getElementById('listaAmigos');

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value.trim(); // Recibimos el valor de los usuarios sin espacios en blanco

    if(nombre === '') {
        alert('Por favor ingresa un nombre, completando el campo.');
        return;
    }

    amigos.push(nombre); // Agregamos el amigo a la lista
    limpiarCampoEntrada();
    mostrarAmigos();

    return;
}

function mostrarAmigos() {
    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML += `<li>${amigos[i]}</li>`; // Reasigno el amigo para no reemplazar el que ya esta
    }

    return;
}

function sortearAmigo() {
    resultado = document.getElementById('resultado');

    if (amigos == "") {
        alert('No hay amigos para sortear');
    } else {
        if (amigos.length == 1) {
            alert('No hay suficientes amigos para sortear');
        } else {
            resultado.innerHTML = `<li>${amigos[Math.floor(Math.random() * amigos.length)]}</li>`;
            amigos = [];
        }
    }

    return;
}

function limpiarCampoEntrada() {
    document.getElementById('amigo').value = '';
}

