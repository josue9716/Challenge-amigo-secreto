let amigos = [];

function agregarAmigo() {
    let nombreImput = document.getElementById('amigo').value.trim();

    if(nombreImput === ""){
        alert('Por favor, inserte un nombre.');
        return;
    } else{

        amigos.push(nombreImput);
        document.getElementById('amigo').value = "";
        actualizarLista();
    }

}

function actualizarLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML ="";

    for ( let i = 0; i < amigos.length; i++){
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo(){
    if (amigos.length === 0){
        document.getElementById('resultado').innerHTML = "No hay amigos en la lista para sortear.";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() *amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML = `Amigo seleccionado: <strong>${amigoSorteado}</strong>`;

}