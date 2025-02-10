// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    console.log(nombre);

    if(nombre == '') {
        alert('Por favor ingresa un nombre, completando el campo.');
    } else {
        nombre = amigos.push(document.getElementById('amigo').value);
        limpiarCampoEntrada();
    }

    console.log(amigos);

    return;
}

function limpiarCampoEntrada() {
    document.getElementById('amigo').value = '';
}