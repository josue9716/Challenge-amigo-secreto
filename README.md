<h1>Challenge-amigo-secreto</h1> 

- Estado del proyecto: Completado.

<h2>Sorteo de Amigos</h2> 

Este es un sencillo proyecto en JavaScript que permite agregar nombres a una lista y luego realizar un sorteo aleatorio para seleccionar a un amigo.

<h2>🚀 Características</h2>

- Agregar nombres a una lista.

- Visualizar los nombres agregados.

- Realizar un sorteo aleatorio.

- Mostrar el nombre del amigo seleccionado.

<h2>🛠️ Tecnologías utilizadas</h2> 

- HTML

- CSS (Opcional para mejorar la apariencia)

- JavaScript

<h2>📌 Instrucciones de uso</h2>

- Ingresa un nombre en el campo de entrada.

- Haz clic en el botón "Agregar" para añadir el nombre a la lista.

- Visualiza la lista de amigos agregados.

- Haz clic en "Sortear" para seleccionar un amigo al azar.

<h2>📜 Código principal (JavaScript)</h2>
let amigos = [];

function agregarAmigo() {
    let nombreInput = document.getElementById('amigo').value.trim();

    if (nombreInput === "") {
        alert('Por favor, inserte un nombre.');
        return;
    } else {
        amigos.push(nombreInput);
        document.getElementById('amigo').value = "";
        actualizarLista();
    }
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        document.getElementById('resultado').innerHTML = "No hay amigos en la lista para sortear.";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML = `Amigo seleccionado: <strong>${amigoSorteado}</strong>`;
}

<h2>📂 Estructura del Proyecto</h2

📂 sorteo-amigos
├── index.html
├── style.css (opcional)
├── script.js
└── README.md

 <h2>🎯 Mejoras futuras</h2>

- Agregar opción para eliminar amigos de la lista.

- Estilizar la interfaz con CSS.

- Permitir guardar la lista en localStorage para mantener los datos después de recargar la página.