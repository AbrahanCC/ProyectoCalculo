document.addEventListener('DOMContentLoaded', () => {
    const ejerciciosFaciles = [
        { imagen: 'imagenes/ImagenesDer/EJ1/Principio.png', opciones: ['imagenes/ImagenesDer/EJ1/R6-a.png','imagenes/ImagenesDer/EJ1/R6-b.png', 'imagenes/ImagenesDer/EJ1/R6-c.png'], correcta: 0 },
        { imagen: 'imagenes/ImagenesDer/EJ2/EJ2.png', opciones: ['imagenes/ImagenesDer/EJ2/RES-A.png', 'imagenes/ImagenesDer/EJ2/RES-B.png', 'imagenes/ImagenesDer/EJ2/RES-C.png'], correcta: 0 },
        { imagen: 'imagenes/ImagenesDer/EJ3/EJ3.png', opciones: ['imagenes/ImagenesDer/EJ3/RES-A.png', 'imagenes/ImagenesDer/EJ3/RES-B.png', 'imagenes/ImagenesDer/EJ3/RES-C.png'], correcta: 0 },
        { imagen: 'imagenes/ImagenesDer/EJ4/EJ4.png', opciones: ['imagenes/ImagenesDer/EJ4/RES-A.png','imagenes/ImagenesDer/EJ4/RES-B.png', 'imagenes/ImagenesDer/EJ4/RES-C.png'], correcta: 0 },
        { imagen: 'imagenes/ImagenesDer/EJ5/EJ5.png', opciones: ['imagenes/ImagenesDer/EJ5/RES-A.png', 'imagenes/ImagenesDer/EJ5/RES-B.png', 'imagenes/ImagenesDer/EJ5/RES-C.png'], correcta: 0 }
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
            messageDiv.innerHTML = '<p class="incorrecto">No te olvides del signo, y que la derivada de una constante es 0.</p>';
        }
    };

    // Mostrar el primer ejercicio al cargar la página
    mostrarEjercicio();
});