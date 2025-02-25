# Sorteo de Amigo Secreto

Este proyecto es una aplicación simple para gestionar una lista de amigos y realizar un sorteo para seleccionar un "amigo secreto" aleatorio.

## Tabla de Contenidos

- [Descripción](#descripción)
- [Funcionalidades](#funcionalidades)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Ejemplo de HTML](#ejemplo-de-html)
- [Contribución](#contribución)
- [Licencia](#licencia)

## Descripción

La aplicación permite a los usuarios agregar nombres a una lista y realizar un sorteo para elegir un amigo secreto de manera aleatoria. Es una herramienta útil para organizar eventos de intercambio de regalos.

## Funcionalidades

- Agregar amigos a la lista.
- Mostrar la lista de amigos agregados.
- Realizar un sorteo para seleccionar un amigo secreto de la lista.

## Requisitos

- Un navegador web con soporte para JavaScript.
- Un archivo HTML con los siguientes elementos:
  - Un campo de entrada con `id="amigo"`.
  - Un botón para agregar amigos que llame a la función `agregarAmigo()`.
  - Un elemento `ul` con `id="listaAmigos"` para mostrar la lista de amigos.
  - Un botón para sortear que llame a la función `sortearAmigo()`.
  - Un elemento con `id="resultado"` para mostrar el resultado del sorteo.

## Instalación

No se requiere instalación especial. Simplemente descarga el archivo HTML y el archivo JavaScript, y ábrelos en tu navegador.

## Uso

1. Agregar amigos: Ingrese el nombre del amigo en el campo de entrada y haga clic en el botón "Agregar Amigo".
2. Ver la lista de amigos: La lista de amigos se actualizará automáticamente cada vez que se agregue un nuevo amigo.
3. Sortear amigo secreto: Haga clic en el botón "Sortear Amigo" para seleccionar un amigo secreto aleatorio de la lista.

## Ejemplo de HTML

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sorteo de Amigo Secreto</title>
</head>
<body>
    <h1>Sorteo de Amigo Secreto</h1>
    <input type="text" id="amigo" placeholder="Ingrese el nombre del amigo">
    <button onclick="agregarAmigo()">Agregar Amigo</button>
    <ul id="listaAmigos"></ul>
    <button onclick="sortearAmigo()">Sortear Amigo</button>
    <p id="resultado"></p>
    <script src="script.js"></script>
</body>
</html>
```

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza los cambios necesarios y haz commit (`git commit -am 'Agrega nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto se encuentra bajo la Licencia MIT. Consulta el archivo `LICENSE` para obtener más información.
