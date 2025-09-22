// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array for save secret friends
let array_amigos = [];
let input = document.getElementById('amigo');


function agregarAmigo() {
    //amigo
    if (input.value === '') {
        alert('El campo no puede estar vacío');
    } else {
        console.log(array_amigos);
        array_amigos.push(input.value);
        document.getElementById('amigo').value = '';
        document.getElementById('amigo').focus();

        listaAmigos();
    }
};

function listaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""
    for (let i = 0; i < array_amigos.length; i++) {
        console.log(array_amigos[i]);
        let li = document.createElement("li");
        li.innerText = array_amigos[i];
        lista.appendChild(li);

    }
}

