let amigos = [];

function agregarAmigo() {
    const nombreAmigoInput = document.getElementById('amigo');
    const nombreAmigo = nombreAmigoInput.value.trim();
    if (nombreAmigo === '') {
        alert('Por favor, ingrese un nombre válido.');
        return;
    }
    amigos.push(nombreAmigo);
    actualizarListaAmigos();
    nombreAmigoInput.value = '';
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    // Limpiar la lista existente
    listaAmigos.innerHTML = '';
    // Iterar sobre el arreglo y agregar elementos a la lista
    for (const amigo of amigos) {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert('No hay nombres en la lista para sortear.');
        return;
    }
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    // Obtener el nombre sorteado
    const amigoSecreto = amigos[indiceAleatorio];
    // Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.textContent = `El amigo secreto es: ${amigoSecreto}`;
}

