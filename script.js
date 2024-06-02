document.addEventListener('DOMContentLoaded', () => {
    const ejerciciosFaciles = [
        { imagen: 'imagenes/EcuFac/EJ-1/funcion1.jpg', opciones: ['imagenes/EcuFac/EJ-1/RES-A.jpg', 'imagenes/EcuFac/EJ-1/RES-B.jpg', 'imagenes/EcuFac/EJ-1/RES-C.jpg'], correcta: 1 },
        { imagen: 'imagenes/EcuFac/EJ-2/funcion2facil.jpg', opciones: ['imagenes/EcuFac/EJ-2/RES-A.jpg', 'imagenes/EcuFac/EJ-2/RES-B.jpg', 'imagenes/EcuFac/EJ-2/RES-C.jpg'], correcta: 1 },
        { imagen: 'imagenes/EcuFac/EJ-3/funcion3.jpg', opciones: ['imagenes/EcuFac/EJ-3/RES-A.jpg', 'imagenes/EcuFac/EJ-3/RES-B.jpg', 'imagenes/EcuFac/EJ-3/RES-C.jpg'], correcta: 1 },
        { imagen: 'imagenes/EcuFac/EJ-4/funcionno4.jpg', opciones: ['imagenes/EcuFac/EJ-4/RES-A.jpg', 'imagenes/EcuFac/EJ-4/RES-A.jpg', 'imagenes/EcuFac/EJ-4/RES-A.jpg'], correcta: 1 },
        { imagen: 'imagenes/EcuFac/EJ-5/funcion5.jpg', opciones: ['imagenes/EcuFac/EJ-5/RES-A.jpg', 'imagenes/EcuFac/EJ-5/RES-A.jpg', 'imagenes/EcuFac/EJ-5/RES-A.jpg'], correcta: 1 }
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
            messageDiv.innerHTML = '<p class="incorrecto">Recuerda que debes multiplicar la base por el exponente y restarle 1 al exponente.</p>';
        }
    };

    // Mostrar el primer ejercicio al cargar la página
    mostrarEjercicio();
});
