document.addEventListener('DOMContentLoaded', () => {
    const ejerciciosFaciles = [
        { imagen: 'imagenes/EcuDif/Ej1/Ejercicio.png', opciones: ['imagenes/EcuDif/Ej1/Paso1A.png','imagenes/EcuDif/Ej1/Paso1B.png', 'imagenes/EcuDif/Ej1/Paso1C.png','imagenes/EcuDif/Ej1/Paso2A.png', 'imagenes/EcuDif/Ej1/Paso2B.png', 'imagenes/EcuDif/Ej1/Paso2C.png','imagenes/EcuDif/Ej1/RespuestaA.png','imagenes/EcuDif/Ej1/RespuestaB.png','imagenes/EcuDif/Ej1/RespuestaC.png'], correcta: 2 },
        { imagen: 'imagenes/EcuDif/Ej2/Ejercicio.png', opciones: ['imagenes/EcuDif/Ej2/Paso1A.png','imagenes/EcuDif/Ej2/Paso1B.png', 'imagenes/EcuDif/Ej2/Paso1C.png','imagenes/EcuDif/Ej2/Paso2A.png', 'imagenes/EcuDif/Ej2/Paso2B.png', 'imagenes/EcuDif/Ej2/Paso2C.png','imagenes/EcuDif/Ej2/RespuestaA.png','imagenes/EcuDif/Ej2/RespuestaB.png','imagenes/EcuDif/Ej2/RespuestaC.png'], correcta: 2 },
        { imagen: 'imagenes/EcuDif/Ej3/Ejercicio.png', opciones: ['imagenes/EcuDif/Ej3/Paso1A.png','imagenes/EcuDif/Ej3/Paso1B.png', 'imagenes/EcuDif/Ej3/Paso1C.png','imagenes/EcuDif/Ej3/Paso2A.png', 'imagenes/EcuDif/Ej3/Paso2B.png', 'imagenes/EcuDif/Ej3/Paso2C.png','imagenes/EcuDif/Ej3/RespuestaA.png','imagenes/EcuDif/Ej3/RespuestaB.png','imagenes/EcuDif/Ej3/RespuestaC.png'], correcta: 2 },
        { imagen: 'imagenes/EcuDif/Ej4/Ejercicio.png', opciones: ['imagenes/EcuDif/Ej4/Paso1A.png','imagenes/EcuDif/Ej4/Paso1B.png', 'imagenes/EcuDif/Ej4/Paso1C.png','imagenes/EcuDif/Ej4/Paso2A.png', 'imagenes/EcuDif/Ej4/Paso2B.png', 'imagenes/EcuDif/Ej4/Paso2C.png','imagenes/EcuDif/Ej4/RespuestaA.png','imagenes/EcuDif/Ej4/RespuestaB.png','imagenes/EcuDif/Ej4/RespuestaC.png'], correcta: 2 },
        { imagen: 'imagenes/EcuDif/Ej5/Ejercicio.png', opciones: ['imagenes/EcuDif/Ej5/Paso1A.png','imagenes/EcuDif/Ej5/Paso1B.png', 'imagenes/EcuDif/Ej5/Paso1C.png','imagenes/EcuDif/Ej5/Paso2A.png', 'imagenes/EcuDif/Ej5/Paso2B.png', 'imagenes/EcuDif/Ej5/Paso2C.png','imagenes/EcuDif/Ej5/RespuestaA.png','imagenes/EcuDif/Ej5/RespuestaB.png','imagenes/EcuDif/Ej5/RespuestaC.png'], correcta: 2 }
    ];

    let currentExercise = 0;

    function mostrarEjercicio() {
        if (currentExercise < ejerciciosFaciles.length) {
            const ejercicio = ejerciciosFaciles[currentExercise];
            const mainImageDiv = document.getElementById('main-image');
            const responseImagesDiv = document.getElementById('response-images');
            const messageDiv = document.getElementById('message');

            messageDiv.innerHTML = '';
            mainImageDiv.innerHTML = `
                <h2>Selecciona una respuesta</h2>
                <img src="${ejercicio.imagen}" alt="Derivada fácil ${currentExercise + 1}" />
            `;
            responseImagesDiv.innerHTML = ejercicio.opciones.map((opcion, index) => 
                `<div class="response-image" onclick="verificarRespuesta(${index}, ${ejercicio.correcta})">
                    <img src="${opcion}" alt="Opción ${index + 1}" />
                </div>`
            ).join('');
        } else {
            alert('¡Felicidades! Has completado todos los ejercicios.');
            currentExercise = 0; // Reiniciar para que se pueda volver a intentar
            const mainImageDiv = document.getElementById('main-image');
            const responseImagesDiv = document.getElementById('response-images');
            mainImageDiv.innerHTML = "Selecciona un nivel para empezar";
            responseImagesDiv.innerHTML = "";
        }
    }

    window.verificarRespuesta = (seleccion, correcta) => {
        const messageDiv = document.getElementById('message');
        if (seleccion === correcta) {
            messageDiv.innerHTML = '<p class="correcto">¡Respuesta correcta! Continuemos...</p>';
            currentExercise++;
            setTimeout(mostrarEjercicio, 2000);
        } else {
            messageDiv.innerHTML = '<p class="incorrecto">Recuerda que U tambien se debe derivar, y despues de ello multiplicar, recuerda la regla de la cadena.</p>';
        }
    };

    // Mostrar el primer ejercicio al cargar la página
    mostrarEjercicio();
});